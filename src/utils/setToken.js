export const setToken = (token) => {
    if(token){
        localStorage.setItem("token", token);
        window.location.href = "/";
    }
    else{
        window.location.href = '/auth/failure';
    }
}
