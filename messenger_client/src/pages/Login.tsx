import { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";
import { LoginParams } from "@/store/interfaces/LoginParams";
import { login } from "@/services/serviceUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { User } from "@/store/interfaces/User";
import { storeData } from "@/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function handleLogin (data: LoginParams) { 
        setEmail(data.email)
        setPassword(data.password)
    }

    useEffect(() => {
        if(email != "" && password != "") {

            async function fetchLogin() {
                const loginData : LoginParams = {
                    email: email, password: password
                }

                const res = await login(loginData)
                
                const { first_name, last_name, prifileImage_url, token } = res;
                const user : User = {
                    first_name: first_name,
                    last_name: last_name,
                    avatar_url: prifileImage_url,
                    token: token,
                    isAuth: true
                }
                dispatch(storeData({ user }))

                window.location.reload()
            }

            fetchLogin();
        }
    }, [email, password, dispatch, navigate])

    return (
        <div id="login" className="flex justify-center items-center">
            <div id="form-container" className="flex justify-center shadow-lg min-w-96 py-8">
                <LoginForm submitCallback={handleLogin}/>
            </div>
        </div>
        
    )
}

export default Login;