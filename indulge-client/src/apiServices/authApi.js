import { serverBaseURL } from "../configs/axiosConfig";

export const sendComfirmEmailApi = ({ email, type }) => {
    const body = JSON.stringify({ email, type })
    return serverBaseURL.post('/api/auth/send-confirm-mail', body, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}
export const verifyEmailApi = ({ token, type }) => {
    const body = JSON.stringify({ token, type })
    return serverBaseURL.post('/api/auth/verify-mail', body, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}
export const registerApi = ({ email, name, type, password, repeatPassword, company, registerToken }) => {
    const body = JSON.stringify({ email, name, type, password, repeatPassword, company });
    return serverBaseURL.post(`/api/auth/register/${type}`, body, {
        headers: {
            "Content-Type": "application/json",
            "register-token": registerToken,
        },
    })
}
export const loginApi = ({ email, password, type }) => {
    const body = JSON.stringify({ email, type, password });
    return serverBaseURL.post(`/api/auth/login/${type}`, body, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const renewAccessTokenApi = () => {
    return serverBaseURL.get(`/api/auth/renew-access-token`, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    })
}