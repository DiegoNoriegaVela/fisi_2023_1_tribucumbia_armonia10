import fetchApi from "../fetchApi";
import PlanResponse from "../res/PlanResponse";

export default async function fetchPlansApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3031/servicio-de-planes/v1/planes"
    }
    return fetchApi<PlanResponse>({url: url.local})
}
