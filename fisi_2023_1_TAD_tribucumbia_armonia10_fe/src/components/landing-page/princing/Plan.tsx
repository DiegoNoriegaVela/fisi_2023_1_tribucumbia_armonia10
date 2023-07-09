import PricingPlan from "./config/PricingPlan";
import "./Plan.css"
import Button, {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import Feature from "./Feature";
import { RedirectTo } from "../../shared/button/RedirectTo";

export default function Plan({pricing: {plan, features, border}}: { pricing: PricingPlan }) {
    return (
        <div className={`pricing-plan ${border}`}>
            <div className={"title"}>
                <span>{plan.Nombre}</span>
                <div>
                    <span className={"price"}>${plan.Precio}</span>
                    <span className={"duration"}></span>
                </div>
            </div>
            {
                features.map((feature, index) => <Feature feature={feature} key={index}/>)
            }
            <RedirectTo name={'Subscribete'} icon={''} style={Styles.Outline} theme={Theme.Light} path={'/contact-us'}/>          
        </div>
    )
}
