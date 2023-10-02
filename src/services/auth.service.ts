import { authKey } from "@/constants/auth";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string; }) => {
    return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
    const authUserToken = getFromLocalStorage(authKey);
    if (authUserToken) {
        return decodedToken(authUserToken);
    } else {
        return "";
    }
};
export const isLoggedIn = () => {
    const authUserToken = getFromLocalStorage(authKey);
    return !!authUserToken;
};
export const removeUserInfo = (authKey: string) => {
    return localStorage.removeItem(authKey);
};