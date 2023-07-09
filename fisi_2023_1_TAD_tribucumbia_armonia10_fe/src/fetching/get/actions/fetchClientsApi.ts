import ClientResponse from "../res/ClientResponse";
import fetchApi from "../fetchApi";


export default async function fetchClientsApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3030/api/clientes"
    }
    return fetchApi<ClientResponse>({url: url.local})
}
