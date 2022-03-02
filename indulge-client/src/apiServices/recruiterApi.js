import { serverBaseURL } from "../configs/axiosConfig";

export const saveJnf = ({ data, accessToken }) => {
    console.log(accessToken)
    return serverBaseURL.post('/api/recruiter/save-jnf', JSON.stringify(data), {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}