import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface ConversationCardProps {
    id: number;
    avatarUrl: string;
    name: string;
    lastMessage?: string;
    last_time?: string;
    readed: boolean;
    clickCallBack: (conversationId:number) => void;
}

interface ConvesationsProps {
    commandSetter : (consersationId:number) => void;
}

const ConversationCard: React.FC<ConversationCardProps> = (props) => {
    const { id, avatarUrl, lastMessage, name, last_time, readed, clickCallBack} = props;
    const [isHaveRead, setIsHaveRead] = useState<boolean>(readed);
    const [style, setStyle] = useState({});

    function handleClick () {
        if(!isHaveRead) {
            setIsHaveRead(true)
            // modifer dans la base de donner
        }
        clickCallBack(id)
    }

    useEffect(() => {
        if (isHaveRead) {
            setStyle({ fontWeight: 400 });
        } else {
            setStyle({ fontWeight: 700 });
        }
    }, [isHaveRead]);

    return (
        <Button onClick={handleClick} className="flex space-x-4 h-20 w-full" style={style} variant={"ghost"}>
            <Avatar>
                <AvatarImage src={avatarUrl}></AvatarImage>
                <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-start">
                <h1>{name}</h1>
                <p>{lastMessage}</p>
            </div>
            <div>{last_time}</div>
        </Button>
    );
};

const Conversations: React.FC<ConvesationsProps> = (props) => {
    const { commandSetter } = props
    const [activeConversationId, setActiveConversatoinId] = useState<number>()
    const avatarUrl = useSelector((state: RootState) => state.user.avatar_url)

    function clickCallBack(conversationId:number) {
        setActiveConversatoinId(conversationId)
    }

    useEffect(() => {
        if(activeConversationId != undefined) {
            commandSetter(activeConversationId)
        }
    }, [activeConversationId])

    useEffect(() => {
        // fetch la list des discussions
    }, [])

    return (
        <div className="w-full">
            <h4 className="py-3">Conversations</h4>
            <ScrollArea className="h-[33.2rem]">
                <ConversationCard
                    id={0}
                    last_time="10 min"
                    name="Benjamin Anjara"
                    lastMessage="Il y avait ce truc..."
                    readed={false}
                    avatarUrl={avatarUrl}
                    clickCallBack={clickCallBack}
                />
            </ScrollArea>
        </div>
    );
};

export default Conversations;
