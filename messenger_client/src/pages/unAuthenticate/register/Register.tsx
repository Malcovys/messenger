import RegisterForm from "./RegisterForm";
import { useEffect, useState } from "react";
import { register } from "@/services/serviceUser";
import { RegisterParams } from "./RegisterParams";
import { useToast } from "@/components/ui/use-toast";

function Register() {
    const { toast } = useToast()
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
            toast({
                description: "Votre compte a été créer.",
            })
        }
    }

    useEffect(() => {
        if(first_name && last_name && email && password) {
            fetchRegister()
        }
    },[first_name, last_name, email, password, toast])

    return (
        <div id="register" className="flex justify-center items-center flex-grow">
            <div id="register-form" className="flex justify-center shadow-xl min-w-96 sm:min-w-[30rem] py-5">
                <RegisterForm submitCallback={handelRegister}/>
            </div>
        </div>
    )
}

export default Register;