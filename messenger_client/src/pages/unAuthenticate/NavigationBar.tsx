import { NavLink } from "react-router-dom";

const NavigationBar : React.FC = () => {
    function manager ({ isActive }: { isActive:boolean }) {
        return {
            fontWeight: isActive ? "bold" : "",
        }
    }

    return(
        <nav id='head-bar' className="shadow py-3 px-3 flex flex-row">
            <div className="sm:basis-[57%] md:basis-[65%] lg:basis-[75%] xl:basis-[80%] basis-1/2">
                <NavLink to="/" style={manager} >Acceuil</NavLink>
            </div>
            <div className="flex">
                <NavLink to="/login" style={manager} className={"px-2"}>Se connecter</NavLink>
                <NavLink to="/register" style={manager} className={"px-2"}>Créer un compte</NavLink>
            </div>
        </nav>
    )
}

export default NavigationBar;