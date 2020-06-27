import React from 'react'
import imagen from '../imagen/mapa.png'
import { Link } from 'react-router-dom'
import agregar from '../imagen/agregar.png'
import Popup from '../modals/modal1';



class PaginaPrincipal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="container3">
                <div className="banner">
                    <div className="imagen1">

                        <img src={imagen} id="img3" className="img3" alt='img3' />
                    </div>
                    <h1 className="titulo">Encuentra el lugar perfecto</h1>
                    <Link from="/" to="/pages"><button className="cerrar">cerrar cesion</button></Link>
                </div>
                <div className="contenido">
                    <form>
                        <button type="submit" className="buscar">Buscar</button>
                        <input type="search" placeholder="Buscar" className="busc" />
                    </form>
                    <div className="listado">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Disponibilidad</th>
                                    <th>Radio</th>
                                    <th>Tipo de lugar</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button>elminar</button>
                                        <button>editar</button>
                                        <button>Ver detalle</button>
                                    </td>
                                </tr>
                            </tbody>


                        </table>

                        <button className="agre" onClick={this.togglePopup.bind(this)}><img src={agregar} className="agreg" alt='agred' /></button>

                        {this.state.showPopup ?
                            <Popup closePopup={this.togglePopup.bind(this)} />
                            : null
                        }
                    </div>
                </div>
            </div>

        )
    }

}

export default PaginaPrincipal