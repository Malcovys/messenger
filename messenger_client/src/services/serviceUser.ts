import { LoginParams } from "@/store/interfaces/LoginParams";
import { RegisterParams } from "@/store/interfaces/RegisterParams";

const fakeUser = {
        "email": "malcovys@gmail.com",
        "password": "123456",
        "token": "ml455",
        "first_name": "malcovys",
        "last_name": "bonely",
        "prifileImage_url": "file:///home/malcovys/T%C3%A9l%C3%A9chargements/medium.webp",
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