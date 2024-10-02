import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "@/store/features/auth/auth-slice";

export const setToken = (token) => {
    const auth = useSelector((state) => state.auth);
    if(token){
        // localStorage.setItem("token", token);
        useDispatch(login({token :auth.token}));
        window.location.href = "/";
    }
    else{
        window.location.href = '/auth/failure';
    }
}
