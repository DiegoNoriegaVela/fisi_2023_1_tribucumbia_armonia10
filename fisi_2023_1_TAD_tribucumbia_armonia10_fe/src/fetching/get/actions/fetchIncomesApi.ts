import fetchApi from "../fetchApi";
import IncomeResponse, {ParsedIncome} from "../res/IncomeResponse";

export default async function fetchIncomesApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3031/servicio-de-ingresos/v1/ingresos/plan"
    }
        return fetchApi<IncomeResponse>({url: url.local})
        .then((res) => res.map((response) => ParsedIncome.from(response)))
}
