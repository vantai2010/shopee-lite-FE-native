import customAxios from "../utils/customize/customAxios";

export const handleLoginService = (data) => {
    return customAxios.post("/api/login", data)
}

export const handleRegisterService = (data) => {
    return customAxios.post("/api/register", data)
}

export const handleRegisterInformations = (data) => {
    return customAxios.post("/api//register-information", data)
}