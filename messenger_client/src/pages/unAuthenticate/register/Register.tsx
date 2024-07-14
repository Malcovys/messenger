import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import { RegisterParams } from "@/store/interfaces/RegisterParams";
import { useNavigate } from "react-router-dom";
import { register } from "@/services/serviceUser";

function Register() {
    const navigate = useNavigate()
    const [first_name, setFirstName] = useState<string>()
    const [last_name, setLastName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    function handelRegister(data:RegisterParams) {
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setEmail(data.email)
        setPassword(data.password)
    }

    async function fetchRegister() {
        const registerData : RegisterParams = { 
            first_name: first_name, last_name: last_name,
            email: email, password: password
        }
        const res = await register(registerData)
        if(res) {
            console.log("done")
            navigate("/login")
        }
    }

    useEffect(() => {
        if(first_name && last_name && email && password) {
            fetchRegister()
        }
    },[first_name, last_name, email, password, navigate])

    return (
        <div id="register" className="flex justify-center items-center flex-grow">
            <div id="register-form" className="flex justify-center shadow-xl min-w-96 sm:min-w-[30rem] py-5">
                <RegisterForm submitCallback={handelRegister}/>
            </div>
        </div>
    )
}

export default Register;