import React from 'react'
import { Link } from 'react-router-dom'
import Usuario from '../imagen/usuario.png'
import Email from '../imagen/correo.png'
import Contraseña from '../imagen/contrasena.png'
import firebase from 'firebase'
import 'firebase/auth'

class Registro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            correo: '',
            contraseña: ''
        }
        this.handleNombreChance = this.handleNombreChance.bind(this)
        this.handleCorreoChance = this.handleCorreoChance.bind(this)
        this.handleContraChance = this.handleContraChance.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNombreChance(event) {
        this.setState({ nombre: event.target.value })
    }

    handleCorreoChance(event) {
        this.setState({ correo: event.target.value })
    }

    handleContraChance(event) {
        this.setState({ contraseña: event.target.value })
    }
    handleSubmit =async (event) => {
        
         event.preventDefault();
        const{correo,contraseña}=this.state
    
       await firebase
            .auth()
            .createUserWithEmailAndPassword(correo, contraseña)
            .then((user) => {
                this.props.history.push('/dashboard');
                console.log("creando el usuario"+correo)
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };
    render() {
        return (
            <div className="container2">
                <div className="registro">
                    <div id="registro">
                        <h1 className="titulo1">Registro de Usuario</h1>
                        <form className="marge"  onChange={this.handleSubmit}>
                            <div className="rosut">
                                <img src={Usuario} className="rgo" alt='user' />
                                <input type="text" id="nombre" name="nombre" className="rgio" placeholder="Ingrese su Nombre" value={this.state.nombre} onChange={this.handleNombreChance} />
                            </div>
                            <div className="rosut">
                                <img src={Email} className="rgo" alt='email' />
                                <input type="email" id="correo" name="correo" className="rgio" placeholder="Ingrese su Correo" value={this.state.correo} onChange={this.handleCorreoChance} />
                            </div>
                            <div className="rosut">
                                <img src={Contraseña} className="rgo" alt='password' />
                                <input type="password" id="contraseña" name="contraseña" className="rgio" placeholder="Ingrese su Contraeña" value={this.state.contraseña} onChange={this.handleContraChance} />
                            </div>
                            <div className="buttons">
                                <Link to="/pages" ><button className="cancelar" >cancelar</button></Link>

                                <Link to="/pages"></Link>
                                <button className="guardar" type='submit' >Guardar Usiario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registro 