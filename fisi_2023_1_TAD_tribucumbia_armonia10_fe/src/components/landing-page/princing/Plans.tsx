import {useEffect, useState} from "react";
import PlanResponse from "../../../fetching/get/res/PlanResponse";
import Loading from "../../shared/loading/Loading";
import Plan from "./Plan";
import {config} from "./config/config";
import "./Plans.css"
import fetchPlansApi from "../../../fetching/get/actions/fetchPlansApi";

export default function Plans() {
    const [loading, setLoading] = useState(false)
    const [plans, setPlans] = useState<Array<PlanResponse>>([])

    useEffect(() => {
        fetchPlansApi().then((res) => {
            setLoading(true)
            setPlans(res)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <div id={"landing-plans"}>
            {loading && <Loading name={"Cargando planes"}/>}
            {
                plans.map((plan, index) => <Plan pricing={
                    {
                        plan: plan,
                        features: config[index].features,
                        border: config[index].border
                    }
                }/>)
            }
        </div>
    )
}
