import { serverBaseURL } from "../configs/axiosConfig";

export const getAllJnfApi = ({ accessToken }) => {
    return serverBaseURL.get('/api/admin/get-all-jnf', {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}

export const confirmJnfApi = ({ accessToken, jnfId }) => {
    const data = JSON.stringify({ jnfId })
    return serverBaseURL.post('/api/admin/confirm-jnf', data, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}
