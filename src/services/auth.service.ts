import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string; }) => {
    return setToLocalStorage("accessToken", accessToken);
};
export const getUserInfo = () => {
    const authUserToken = getFromLocalStorage("accessToken");
    if (authUserToken) {
        return decodedToken(authUserToken);
    } else {
        return "";
    }
};
export const isLoggedIn = () => {
    const authUserToken = getFromLocalStorage("accessToken");
    return !!authUserToken;
};