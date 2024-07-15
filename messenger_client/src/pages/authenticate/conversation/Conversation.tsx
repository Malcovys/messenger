import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { RootState } from "@/store/store"
import { SettingsIcon } from "lucide-react"
import { useSelector } from "react-redux"

const Conversation : React.FC = () => {
    const avatarUrl = useSelector((state: RootState) => state.user.avatar_url)

    return (
        <div id="conversation">
            <div id="conversation-header" className="flex items-center space-x-5 px-3">
                <div className="flex items-center w-full space-x-5">
                    <Avatar>
                        <AvatarImage src={avatarUrl}></AvatarImage>
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <span>Nirina Rajoaluna</span>
                </div>
                <Button variant={"ghost"} size={"icon"}><SettingsIcon/></Button>
            </div>
            <div id="conversation-body">

            </div>
            <div id="conversation-footer">

            </div>
        </div>
    )
}

export default Conversation