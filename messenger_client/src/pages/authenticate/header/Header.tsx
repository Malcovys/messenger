import { FeatherIcon } from "lucide-react";
import Notification from "../notification/Notification.tsx";
import Profile from "../profile/Profile.tsx";
import SearchBar from "../search/SearchBar.tsx";

const Header : React.FC = () => {
    return(
        <div id="app-header" className="shadow w-full py-2 px-5 flex flex-row items-center">
            <div className="flex space-x-10">
                <div className="flex">
                    <FeatherIcon/>
                    <span>feather</span>
                </div>
                <SearchBar />
            </div>
            <div className="flex w-full justify-end">
                <div className="px-2">
                    <Notification />
                </div>
                <div className="px-2">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Header