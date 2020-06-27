import React from 'react'
import { Link } from 'react-router-dom'
import Usuario from '../imagen/usuario.png'
import Email from '../imagen/correo.png'
import Contraseña from '../imagen/contrasena.png'
import firebase from 'firebase'
import 'firebase/app'
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
    handleSubmit = (event) => {
        const{nombre,correo,contraseña}=this.state
        firebase.auth().createUser({nombre,correo,contraseña })
            .then(function(userRecord) {
              console.log('Successfully created new user:', userRecord.uid);
            })
            .catch(function(error) {
              console.log('Error creating new user:', error);
            });
       /* event.preventDefault();
        const { correo, contraseña } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(correo, contraseña)
            .then((user) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ error: error });
            });*/
    };
    render() {
        return (
            <div className="container2">
                <div className="registro">
                    <div id="registro">
                        <h1 className="titulo1">Registro de Usuario</h1>
                        <form className="marge" method="POST" onChange={this.handleSubmit}>
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

                                <Link to="/pages"><button className="guardar" type='submit' >Guardar Usiario</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registro 