import { FeatherIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavigationBar : React.FC = () => {
    function manager ({ isActive }: { isActive:boolean }) {
        return {
            fontWeight: isActive ? "bold" : "",
        }
    }

    return(
        <nav id='head-bar' className="shadow py-3 px-5 flex flex-row w-full">
            <div>
                <NavLink to="/" style={manager} className={"flex"}>
                    <FeatherIcon/>
                    <span>feather</span>
                </NavLink>
            </div>
            <div className="flex w-full justify-end">
                <NavLink to="/login" style={manager} className={"px-2"}>Se connecter</NavLink>
                <NavLink to="/register" style={manager} className={"px-2"}>Créer un compte</NavLink>
            </div>
        </nav>
    )
}

export default NavigationBar;