import React from 'react'
import imagen from '../imagen/mapa.png'
import { Link, Router } from 'react-router-dom'
import agregar from '../imagen/agregar.png'
class PaginaPrincipal extends React.Component {
    render() {
        const openModal = () =>{
            console.log("hola solo es prueba")
        }
        return (
            <div className="container3">
                <div className="banner">
                    <div className="imagen1">
                        <img src={imagen} id="img3" className="img3" />
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
                        <tr>
                            <th>Nombre</th>
                            <th>Disponibilidad</th>
                            <th>Radio</th>
                            <th>Tipo de lugar</th>
                            <th>Acciones</th>
                        </tr>
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
                        </table>

                        <button className="agre" onClick={openModal}><img src={agregar} className="agreg"/> </button>
                        /*fhttps://www.youtube.com/watch?v=SmMZqh1xdB4*/
                    </div>
                </div>
            </div>
        )
    }

}

export default PaginaPrincipal