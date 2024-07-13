import { User } from "../interfaces/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState : User = {
    first_name: localStorage.getItem("u_first_name") || "",
    last_name: localStorage.getItem("u_last_name") || "",
    avatar_url: localStorage.getItem("u_avatar_url") || "",
    token: localStorage.getItem("u_token") || "",
    isAuth: localStorage.getItem("isAuth") == "true",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeData: function (state, action: PayloadAction<{ user: User}>) {
            let payloadUser = action.payload.user;

            localStorage.setItem("first_name", payloadUser.first_name);
            localStorage.setItem("last_name", payloadUser.last_name);
            localStorage.setItem("avatar_url", payloadUser.avatar_url);
            localStorage.setItem("token", payloadUser.token);
            localStorage.setItem("isAuth", payloadUser.isAuth.toString());
        }
    }
})

export const { storeData } = userSlice.actions;

export default userSlice.reducer;