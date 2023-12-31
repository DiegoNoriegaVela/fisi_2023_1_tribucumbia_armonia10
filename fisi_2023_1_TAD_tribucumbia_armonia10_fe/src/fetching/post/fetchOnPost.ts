import PostRequest from "./PostRequest";

export default async function fetchOnPost<T extends PostRequest>({url, request}: { url: string, request: T }) {
    return await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': ''
        },
        body: JSON.stringify(request)
    })
}
