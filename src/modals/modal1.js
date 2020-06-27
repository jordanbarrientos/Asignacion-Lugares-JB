import React from 'react';
import './style.css';
import Mpa from '../imagen/mapa.png'
import firebase from '../firebase'


class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre1: '',
            dispo1: '',
            radio1: '',
            lugar1: ''
        }
        this.handleNombre1Change = this.handleNombre1Change.bind(this)
        this.handleDispo1Change = this.handleDispo1Change.bind(this)
        this.handleRadio1Change = this.handleRadio1Change.bind(this)
        this.handleLugar1Change = this.handleLugar1Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        
      }
     

    handleNombre1Change(event) {
        this.setState({ nombre1: event.target.value })
    }

    handleDispo1Change(event) {
        
        const { dispo1, value } = event.target;

        this.setState({
          [dispo1]: value
        })
    }

    handleRadio1Change(event) {
        this.setState({ radio1: event.target.value })
    }

    handleLugar1Change(event) {
        this.setState({ lugar1: event.target.value })
    }

    handleSubmit() {
        var postsRef = firebase.database().ref('nombre1','dispo1','radio1','lugar1', arguments.length);
      
        postsRef.on('nombre1','dispo1','radio1','lugar1', snapshot => {
          this.setState({
            posts: snapshot.val(),
          });
        });
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    < div className="container4" >
                        <div className="componen1">
                            <div className="imagens1"><img src={Mpa} className="img4" alt='mapa1' /></div>
                        </div>
                        <form id="regis1" onChange={this.handleSubmit}>
                            <h3>Nombre del Lugar</h3>
                            <input type="text" className="nombre1" name="nombre1" id="nombre1" value={this.state.nombre1} onChange={this.handleNombre1Change} placeholder="Ingrese el nombre del lugar" required />
                            <h3>Disponibilidad del Lugar:</h3>
                            <label htmlFor="dispo1" className="dislay">Si</label>
                            <input type="radio" className="dispo1" name="dispo1" id="dispo1" value="Si" onChange={this.handleDispo1Change} required />
                            <label htmlFor="dispo2" className="dislay1">No</label>
                            <input type="radio" className="dispo2" name="dispo1" id="dispo2" value="No" onChange={this.handleDispo1Change} required />
                            <h3>Radio:</h3>
                            <input type="text" className="radio1" name="radio1" id="radio1" value={this.state.radio1} onChange={this.handleRadio1Change} placeholder="Ingrese el radio del lugar" required />
                            <h3>Tipo de lugar:</h3>
                            <input type="text" className="lugar1" name="lugar1" id="lugar1" value={this.state.lugar1} onChange={this.handleLugar1Change} placeholder="Ingrese el tipo de lugar" required />

                            <div className="buttons1">
                                <button className="regis2" onClick={this.props.closePopup} >Cerrar</button>

                                <button className="intro2" type="submit">Guardar usuario</button>
                            </div>

                        </form>
                    </div >
                </div>
            </div>
        );
    }
}

export default Popup; 