import { serverBaseURL } from "../configs/axiosConfig";

export const saveJnfApi = ({ data, accessToken }) => {
    return serverBaseURL.post('/api/recruiter/save-jnf', JSON.stringify(data), {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}


export const submitJnfApi = ({ data, accessToken }) => {
    return serverBaseURL.post('/api/recruiter/submit-jnf', JSON.stringify(data), {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}

export const getJnfsApi = ({ accessToken }) => {
    return serverBaseURL.get('/api/recruiter/get-jnf', {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "auth-token": accessToken
        },
    })
}