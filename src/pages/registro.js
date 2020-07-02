import React from 'react'
import { Link } from 'react-router-dom'
import Usuario from '../imagen/usuario.png'
import Email from '../imagen/correo.png'
import Contraseña from '../imagen/contrasena.png'
import { firebase } from '../firebase'


class Registro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            correo: '',
            contraseña: ''
        }
        this.handleNombre = this.handleNombre.bind(this)
        this.handleCorreo = this.handleCorreo.bind(this)
        this.handlecontraseña = this.handlecontraseña.bind(this)
        this.handleSubmit = this.handleSubmit(this)
    }

    componentDidMount() {
        const ref = firebase.firestore().collection("Lugares")
        console.log("hola", ref)
        ref.get().then(querySnapshot => {
            console.log("holas", querySnapshot)
            const lugares = [];
            querySnapshot.forEach(doc => {
                const { nombres } = doc.data();
                console.log(nombres)
                lugares.push({
                    id: doc.id,
                    nombres,

                });
            });
            if (lugares.length) {
              
                ref.add({ nombres: "col. la sosa" }).then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
            }
        })
            .catch(error => { console.log("ërror", error) });
    }


    handleNombre(event) {
        this.setState({ nombre: event.tareget.value })
    }

    handleCorreo(event) {
        this.setState({ correo: event.target.value })
    }

    handlecontraseña(event) {
        this.setState({ contraseña: event.target.value })
    }

    handleSubmit() {
        
    }
    render() {
        return (
            <div className="container2">
                <div className="registro">
                    <div id="registro">
                        <h1 className="titulo1">Registro de Usuario</h1>
                        <form className="marge" onchange>
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

                                <Link to="/pages" ></Link>
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