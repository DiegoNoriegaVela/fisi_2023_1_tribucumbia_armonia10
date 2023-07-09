import fetchApi from "../fetchApi";
import TrainerResponse from "../res/TrainerResponse";

export default async function fetchTrainersApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3030/api/entrenadores"
    }
    return fetchApi<TrainerResponse>({url: url.local})
}
