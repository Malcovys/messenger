import Notification from "./notification/Notification.tsx";
import Profile from "./profile/Profile.tsx";
import SearchBar from "./search/SearchBar.tsx";

const Header : React.FC = () => {
    return(
        <div id="app-header" className="shadow py-2 px-3 flex flex-row ">
            <div className="sm:basis-[57%] md:basis-[65%] lg:basis-[75%] xl:basis-[80%] basis-1/2 flex">
                <div>Logo</div>
                <SearchBar />
            </div>
            <div className="flex">
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