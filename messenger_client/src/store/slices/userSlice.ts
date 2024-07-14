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

            localStorage.setItem("u_first_name", payloadUser.first_name);
            localStorage.setItem("u_last_name", payloadUser.last_name);
            localStorage.setItem("u_avatar_url", payloadUser.avatar_url);
            localStorage.setItem("u_token", payloadUser.token);
            localStorage.setItem("isAuth", payloadUser.isAuth.toString());
        },
        clearData: function (state) {
            localStorage.removeItem("u_first_name");
            localStorage.removeItem("u_last_name");
            localStorage.removeItem("u_avatar_url");
            localStorage.removeItem("u_token");
            localStorage.removeItem("isAuth");
        }
    }
})

export const { storeData, clearData } = userSlice.actions;

export default userSlice.reducer;