import ClientRequest from "../req/ClientRequest";
import fetchOnPost from "../fetchOnPost";

export default async function onPostClient(request: ClientRequest) {
    const url = {
        "external": "",
        "local": "http://localhost:3030/api/clientes"
    }
    return fetchOnPost({
        url: url.local,
        request: request
    })
}
