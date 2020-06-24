import React from 'react'
import Mpa from '../imagen/mapa.png'
import { Link } from 'react-router-dom'
import "../style/style.css"





class Page extends React.Component {
    constructor(args){
        super(args)
        this.state = {
            correo1:'',
            contraseña1:''
        }
        this.handleNombreChange = this.handleNombreChange.bind(this);
        this.handleContraChange = this.handleContraChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNombreChange(event){
        this.setState({correo1:event.target.value.toUpperCase()});
    }
    
    handleContraChange(event){
        this.setState({contraseña1:event.target.value.toUpperCase()})
    }
    handleSubmit(event) {
        alert('esta informacion se ha ido con exitos: ' + this.state.correo1+''+this.state.contraseña1);
        event.preventDefault();
      }
    render() {  

        
        return (
            
            < div className="container1" >
                <div className="component">
                    <div className="imagens"><img src={Mpa} className="img1" alt='mapa1' /></div>
                </div>
                <form id="regis" onSubmit={this.handleSubmit}>
                    <h4 htmlFor="correo1">Ingrese su Correo:</h4>
                    <input type="email" id="correo1" name="correo1" placeholder="Ingrese su correo" value={this.state.correo1} onChange={this.handleNombreChange}  />
                    <h4>Ingrese su Contraseña:</h4>
                    <input type="text" id="contraseña1" name="contraseña1" placeholder="ingrese su contraseña" value={this.state.contraseña1} onChange={this.handleContraChange}/>

                    <Link to="/registro" ><button className="regis" >Registrar</button></Link>

                    <button className="intro" type="submit" value="Enviar">Iniciar Secion</button>
                </form>
            </div >
            
        )
    }
}

export default Page