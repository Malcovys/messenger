import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { clearData } from "@/store/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import ModifyProfil from "./ModifyProfil";

const Profile : React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const avatarUrl = useSelector((state:RootState)=> state.user.avatar_url)
    const userName = useSelector((state:RootState) => state.user.first_name+' '+state.user.last_name)

    function handelDisconnection() {
        dispatch(clearData())
        window.location.reload()
    }

    return(
        <Sheet>
            <SheetTrigger>
                <Avatar>
                    <AvatarImage src={avatarUrl}></AvatarImage>
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Profil</SheetTitle>
                </SheetHeader>
                <div id="sheet-body" className="flex flex-col items-center">
                    <div id="user-profile" className="flex flex-col items-center mt-3">
                        <Avatar className="size-24">
                            <AvatarImage src={avatarUrl}></AvatarImage>
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <div id="user-name">{userName}</div>
                    </div>
                    <Button variant={"ghost"} onClick={handelDisconnection}>Déconnexion</Button>
                    <div id="user-actions" className="flex flex-col items-center w-full mt-6 ">
                        <ModifyProfil />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
        
    )
}

export default Profile
