import React from 'react';
import './style.css';
import Mpa from '../imagen/mapa.png'


class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    < div className="container4" >
                        <div className="componen1">
                            <div className="imagens1"><img src={Mpa} className="img4" alt='mapa1' /></div>
                        </div>
                        <form id="regis1">
                            <h3>Nombre del Lugar</h3>
                            <input type="text" className="nombre1" placeholder="Ingrese el nombre del lugar" required/>
                            <h3>Disponibilidad del Lugar:</h3>
                            <input type="text" className="dispo1" placeholder="ingrese la disponibilidad del lugar" required />
                            <h3>Radio:</h3>
                            <input type="text" className="radio1" placeholder="Ingrese el radio del lugar" required />
                            <h3>Tipo de lugar:</h3>
                            <input type="text" className="lugar1" placeholder="Ingrese el tipo de lugar" required/>

                            <div className="buttons1">
                                <button className="regis2" onClick={this.props.closePopup} >Cerrar</button>

                                <button className="intro2" onClick={this.handleAuth}>Guardar usuario</button>
                            </div>

                        </form>
                    </div >
                </div>
            </div>
        );
    }
}

export default Popup; 