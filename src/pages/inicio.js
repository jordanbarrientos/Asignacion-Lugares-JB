import React from 'react'
import firebase from 'firebase'
import Mpa from '../imagen/mapa.png'
import { Link } from 'react-router-dom'
import "../style/style.css"


class Page extends React.Component {
    
handleAuth (){
    //const provider = new firebase.auth.EmailAuthProvider()
    const email = new firebase.auth.id('correo1')
    const password = new firebase.auth.id('contraseña1')
    /*firebase.auth().signInWithEmailAndPassword(provider)
    .then(result =>console.log(`${result.user.email} ha iniciado secion`))
    .catch(error => console.log(`Error ${error.code}: ${error.messege}`))*/

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => console.log(`Error ${error.code}: ${error.messege}`))
}
    render() {
        return (

            < div className="container1" >
                <div className="component">
                    <div className="imagens"><img src={Mpa} className="img1" /></div>
                </div>
                <form>
                    <h4>Ingrese su Correo:</h4>
                    <input type="mail" id="correo1" placeholder="Ingrese su correo" />
                    <h4>Ingrese su Contraseña:</h4>
                    <input type="text" id="contraseña1" placeholder="ingrese su contraseña" required/>

                    <Link to="/registro" ><button className="regis" >Registrar</button></Link>

                    <Link to="/dashboard" ><button className="intro" onClick={this.handleAuth}>Iniciar Secion</button></Link>
                </form>
            </div >
        )
    }
}

export default Page