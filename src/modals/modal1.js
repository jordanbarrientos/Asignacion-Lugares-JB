import React from 'react';
import './style.css';
import Mpa from '../imagen/mapa.png'
import { firebase } from '../firebase'

class Popup extends React.Component {
 constructor(props){
     super(props)
     this.state ={
         nombre1:'',
         dispo:'',
         radio1:'',
         lugar1:''
     }
     this.handleNombre = this.handleNombre.bind(this)
     this.handleDispo = this.handleDispo.bind(this)
     this.handleRadio = this.handleRadio.bind(this)
     this.handleLugar = this.handleLugar.bind(this)
 }

 handleNombre(event){
     this.setState({nombre1:event.target.value})
 }

 handleDispo(event){
    this.setState({dispo1:event.target.value})
}

handleRadio(event){
    this.setState({radio1:event.target.value})
}

handleLugar(event){
    this.setState({lugar1:event.target.value})
}

Submit = ()=>{
    const ref = firebase.firestore().collection("Lugares")

    ref.get().then(querySnapshot =>{
       
        const lugares =[]

        querySnapshot.forEach(doc=>{
            const {nombre} = doc.data()
            const {disposicion} = doc.data()
            const {radio} = doc.data()
            const {Tlugar} = doc.data()

            lugares.push({
                id: doc.id,
                nombre,
                disposicion,
                radio,
                Tlugar
            })
        })
        console.log(lugares)

        if(lugares.length){
            ref.add({
                nombre: this.state.nombre1,
                disposicion: this.state.dispo1,
                radio: this.state.radio1,
                Tlugar: this.state.lugar1

            }).then((docRef)=>{
                console.log("documento por id: ", docRef.id)
            })
            .catch((error)=>{
                console.error("error para añadir los campos", error)
            })
            .catch(error=>{console.log("error",error)})
        }
    })
}
    render() {
        return (

            <div className='popup' >
                <div className='popup\_inner'>
                    < div className="container4" >
                        <div className="componen1">
                            <div className="imagens1"><img src={Mpa} className="img4" alt='mapa1' /></div>
                        </div>

                        <form id="regis1" onChange={this.Submit}>

                            <h3>Nombre del Lugar</h3>

                            <input type="text" 
                            className="nombre1" 
                            placeholder="Ingrese el nombre del lugar"
                            value={this.state.nombre1} 
                            onChange={this.handleNombre} required />

                            <h3>Disponibilidad del Lugar:</h3>

                            <input type="text" 
                            className="dispo1" 
                            placeholder="ingrese la disponibilidad del lugar" 
                            value={this.state.dispo1} 
                            onChange={this.handleDispo} required />

                            <h3>Radio:</h3>

                            <input type="text"
                            className="radio1" 
                            placeholder="Ingrese el radio del lugar" 
                            value={this.state.radio1} 
                            onChange={this.handleRadio} required />

                            <h3>Tipo de lugar:</h3>

                            <input type="text" 
                            className="lugar1" 
                            placeholder="Ingrese el tipo de lugar" 
                            value={this.state.lugar1} 
                            onChange={this.handleLugar} required />

                            <div className="buttons1"  >

                                <button className="regis2" onClick={this.props.closePopup} >Cerrar</button>

                                <button className="intro2" type="submit" onClick={this.Submit} >Guardar usuario</button>
                            </div>

                        </form>
                    </div >
                </div>
            </div>
        );
    }
}

export default Popup;  