import fetchApi from "../fetchApi";
import UserResponse from "../res/UserResponse";


export default async function fetchUsersApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3030/api/usuarios"
    }
    return fetchApi<UserResponse>({url: url.local})
}
