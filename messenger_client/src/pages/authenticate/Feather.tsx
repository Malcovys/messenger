import { useEffect, useState } from "react";
import Conversations from "./conversation/Conversations";
import Header from "./header/Header";
import Conversation from "./conversation/Conversation";

function Feather () {
    const [showConversation, setShowConversation] = useState<number>()

    function commandSetter(conversationId:number) {
        setShowConversation(conversationId)
    }

    return (
        <div id="feather-app">
            <Header/>
            <div className="flex mt-3 px-3 space-x-4">
                <div className="w-72">
                    <Conversations commandSetter={commandSetter}/>
                </div>
                <div className="w-full mt-2">
                    <Conversation/>
                </div>
            </div>
        </div>
    )
}

export default Feather;