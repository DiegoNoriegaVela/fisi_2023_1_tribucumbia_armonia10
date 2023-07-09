import "./Article.css"
import TextField from "../shared/textfield/TextField";
import {Theme} from "../../common/Theme";
import Button, {Styles} from "../shared/button/Button";
import {Dispatch, MouseEventHandler} from "react";
import {UserAuth} from "../../App";
import Error from "../shared/error/Error";
import {RedirectTo} from "../shared/button/RedirectTo";
import Loading from "../shared/loading/Loading";

type Props = {
    onLogin: MouseEventHandler<HTMLButtonElement>,
    user: UserAuth,
    setUser: Dispatch<UserAuth>
}

export default function LoginForm({onLogin, user, setUser}: Props) {

    return <div id="article">
        <div className="back">
            <RedirectTo
                name={"Volver"}
                icon={""}
                style={Styles.Filled}
                theme={Theme.Secondary}
                path={'/'}/>
        </div>
        <h1>Login</h1>
        <TextField
            name="Correo"
            placeholder="Ingrese su correo"
            icon=""
            theme={Theme.Dark}
            onChange={({target}) => setUser({...user, 'email': target.value})}
            type={"email"}
        />
        <TextField
            name="Contraseña"
            placeholder="Ingrese su contraseña"
            icon=""
            theme={Theme.Dark}
            onChange={({target}) => setUser({...user, 'contrasenia': target.value})}
            type={"password"}
        />

        <Button
            name={"Ingresar"}
            icon={""}
            style={Styles.Outline}
            theme={Theme.Light}
            onClick={onLogin}/>
        <>
            {
                user.logging && (<Loading name={"Verificando.."}/>)
            }
            {
                user.error && (<Error message={user.error}/>)
            }
        </>
    </div>;
}
