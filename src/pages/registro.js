import React from 'react'
import { Link } from 'react-router-dom'
import Usuario from '../imagen/usuario.png'
import Email from '../imagen/correo.png'
import Contraseña from '../imagen/contrasena.png'


class Registro extends React.Component {
    render() {
        return (
            <div className="container2">
                <div className="registro">
                    <form id="registro">
                        <h1 className="titulo1">Registro de Usuario</h1>
                        <form className="marge">
                            <div className="rosut">
                                <img src={Usuario} className="rgo" />
                                <input type="text" id="nombre" className="rgio" placeholder="Ingrese su Nombre" />
                            </div>
                            <div className="rosut">
                                <img src={Email} className="rgo" />
                                <input type="email" id="correo" className="rgio" placeholder="Ingrese su Correo" />
                            </div>
                            <div className="rosut">
                                <img src={Contraseña} className="rgo" />
                                <input type="password" id="contraseña" className="rgio" placeholder="Ingrese su Contraeña" />
                            </div>
                            <div className="rosut">
                                <img src={Contraseña} className="rgo" />
                                <input type="password" id="contraseñaconfir" className="rgio" placeholder="Confirme su Contraseña" />
                            </div>
                            <div className="buttons">
                                <Link to="/pages" ><button className="cancelar" >cancelar</button></Link>

                                <Link to="/pages" ><button className="guardar">Guardar Usiario</button></Link>
                            </div>
                        </form>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registro 