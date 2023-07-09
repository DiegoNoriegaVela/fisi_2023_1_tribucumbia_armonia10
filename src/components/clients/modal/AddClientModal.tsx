import {Theme} from "../../../common/Theme";
import {useRef, useState} from "react";
import Button, {Styles} from "../../shared/button/Button";
import "../../modals/Modal.css"
import InputRef from "../../shared/textfield/InputRef";
import onPostClient from "../../../fetching/post/action/onPostClient";
import Loading from "../../shared/loading/Loading";
import Error from "../../shared/error/Error";
import Success from "../../shared/success/Success";

export default function AddClientModal({onCancel}: { onCancel: () => void }) {
    const nameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const dniRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    return (
        <div id={"modal"}>
            <div id={"container"}>
                <div id={"form"}>
                        <span>Agregar cliente</span>
                        <button className="close-button" onClick={onCancel}>
                        <span>&times;</span>
                        </button>
                    <InputRef
                        name={"Nombres"}
                        icon={''}
                        theme={Theme.Light}
                        input={
                            () => <input placeholder={"Ingresa los nombres"} ref={nameRef}/>
                        }
                    />
                    <InputRef
                        name={"Apellidos"}
                        icon={''}
                        theme={Theme.Light}
                        input={
                            () => <input placeholder={"Ingrese los apellidos"} ref={lastNameRef}/>
                        }
                    />
                    <InputRef
                        name={"Correo"}
                        icon={''}
                        theme={Theme.Light}
                        input={
                            () => <input placeholder={"Ingrese el correo"} ref={emailRef} type={'email'}/>
                        }
                    />
                    <InputRef
                        name={"DNI"}
                        icon={''}
                        theme={Theme.Light}
                        input={
                            () => <input placeholder={"Ingrese el DNI"} ref={dniRef} type={'email'}/>
                        }
                    />
                    <InputRef
                        name={"Teléfono"}
                        icon={''}
                        theme={Theme.Light}
                        input={
                            () => <input placeholder={"Ingrese el teléfono"} ref={phoneRef} type={'email'}/>
                        }
                    />
                    <div id={"options"}>
                        <Button
                            name={"Cancelar"}
                            icon={''}
                            style={Styles.Outline}
                            theme={Theme.Dark}
                            onClick={onCancel}/>
                        <Button
                            name={"Registar"}
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
        </div>
    );
}
