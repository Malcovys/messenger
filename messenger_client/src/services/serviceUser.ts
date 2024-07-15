import { LoginParams } from "@/pages/unAuthenticate/login/LoginParams";
import { RegisterParams } from "@/pages/unAuthenticate/register/RegisterParams";

const fakeUser = {
        "email": "malcovys@gmail.com",
        "password": "123456",
        "token": "ml455",
        "first_name": "malcovys",
        "last_name": "bonely",
        "prifileImage_url": "https://github.com/shadcn.png",
    }

export const login = async (data:LoginParams) => {
    // const { email, password } = data;

    return fakeUser
}


export const register = async (data:RegisterParams) => {
    const { first_name, last_name, email, password } = data;
    console.log(first_name)
    console.log(last_name)
    console.log(email)
    console.log(password)
    
    return true
}