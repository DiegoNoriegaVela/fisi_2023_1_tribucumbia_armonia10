import Button, {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import "./ContactUsContent.css"
import {useRef, useState} from "react";
import "../../modals/Modal.css"
import InputRef from "../../shared/textfield/InputRef";
import onPostClient from "../../../fetching/post/action/onPostClient";
import Loading from "../../shared/loading/Loading";
import Error from "../../shared/error/Error";
import Success from "../../shared/success/Success";
import "../../incomes/modal/Plan"
import "../../modals/Modal.css"
import "../../modals/Modal.css"
import "../../incomes/modal/AddIncomeModal.css"
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"

export default function ContactUsContent() {
    const nameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const dniRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const [selectedOption, setSelectedOption] = useState("");
    const options = ["Plan Mensual - S/.150.00", "Plan Trimestral - S/.400.00", "Plan Semestral - S/.700.00"];
    
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };


    return (
        <div id={"container"}>
                <div id={"form"}>
                    <span>Unete a nuestra comunidad Gym</span>
                    <InputRef
                        name={"Nombres"}
                        icon={''}
                        theme={Theme.Dark}
                        input={
                            () => <input placeholder={"Ingresa los nombres"} ref={nameRef}/>
                        }
                    />
                    <InputRef
                        name={"Apellidos"}
                        icon={''}
                        theme={Theme.Dark}
                        input={
                            () => <input placeholder={"Ingrese los apellidos"} ref={lastNameRef}/>
                        }
                    />
                    <InputRef
                        name={"Correo"}
                        icon={''}
                        theme={Theme.Dark}
                        input={
                            () => <input placeholder={"Ingrese el correo"} ref={emailRef} type={'email'}/>
                        }
                    />
                    <InputRef
                        name={"DNI"}
                        icon={''}
                        theme={Theme.Dark}
                        input={
                            () => <input placeholder={"Ingrese el DNI"} ref={dniRef} type={'email'}/>
                        }
                    />
                    <InputRef
                        name={"Teléfono"}
                        icon={''}
                        theme={Theme.Dark}
                        input={
                            () => <input placeholder={"Ingrese el teléfono"} ref={phoneRef} type={'email'}/>
                        }
                    />
                    <div >
                        
                        <select className="custom-select" value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Elige el plan a registrar</option>
                            {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>            
                    <div id={"options"}>
                        <Button
                            name={"Pagar con Paypal"}
                            icon={''}
                            style={Styles.Filled}
                            theme={Theme.Secondary}
                            onClick={() => {
                                onPostClient(
                                    {
                                        "Nombre": nameRef?.current?.value || "",
                                        "Apellido": lastNameRef?.current?.value || "",
                                        "Email": emailRef?.current?.value || "",
                                        "DNI": dniRef?.current?.value || "",
                                        "Telefono": parseInt(phoneRef?.current?.value || "0")
                                    }
                                ).then((res) => {
                                    setLoading(true)
                                    if (res.ok) {
                                        setSuccess("Registro exitoso")
                                        setError("")
                                    } else {
                                        setSuccess("")
                                    }
                                    return res.json()
                                }).then((res) => {
                                    if (res["message"] !== "Entrada de Cliente añadida") {
                                        setError(res['message'])
                                    }
                                }).catch((err) => {
                                    setError(err)
                                }).finally(() => {
                                    setLoading(false)
                                })
                            }}/>
                    </div>

                    <div>
                        {loading && <Loading name={"Registrando"}/>}
                        {error && <Error message={error}/>}
                        {success && <Success message={success}/>}
                    </div>
                </div>
            
            </div>
            
    )
}
