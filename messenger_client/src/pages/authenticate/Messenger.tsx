import { Button } from "@/components/ui/button";
import { clearData } from "@/store/slices/userSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

function Messenger () {
    const dispatch = useDispatch<AppDispatch>();

    function handelDisconnection() {
        dispatch(clearData())
        window.location.reload()
    }

    return (
        <div>
            Messenger App
            <Button variant={"custom"} onClick={handelDisconnection}>Déconnexion</Button>
        </div>
    )
}

export default Messenger;