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
                    <div id="registro">
                        <h1 className="titulo1">Registro de Usuario</h1>
                        <form className="marge" method=''>
                            <div className="rosut">
                                <img src={Usuario} className="rgo" alt='user' />
                                <input type="text" id="nombre" className="rgio" placeholder="Ingrese su Nombre" />
                            </div>
                            <div className="rosut">
                                <img src={Email} className="rgo" alt='email' />
                                <input type="email" id="correo" className="rgio" placeholder="Ingrese su Correo" />
                            </div>
                            <div className="rosut">
                                <img src={Contraseña} className="rgo" alt='password' />
                                <input type="password" id="contraseña" className="rgio" placeholder="Ingrese su Contraeña" />
                            </div>
                            <div className="buttons">
                                <Link to="/pages" ><button className="cancelar" >cancelar</button></Link>

                                <Link to="/pages" ><button className="guardar" type='submit' >Guardar Usiario</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registro 