import fetchOnPost from "../fetchOnPost";
import IncomeRequest from "../req/IncomeRequest";

export default async function onPostIncome(request: IncomeRequest) {
    const url = {
        "external": "",
        "local": "http://localhost:3031/servicio-de-ingresos/v1/ingresos"
    }
    return await fetchOnPost({
        url: url.local,
        request: request
    }).then((res) => res)
}
