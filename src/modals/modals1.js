import React from 'react'
import ReactDom from 'react-dom'


class modal1 extends React.Component{
    render(){
        const {expeses} = this.props
        const node =(
            <div className="modal1">
                <div className="component1">
                    <h1>listo ya podes man
                    </h1>
                </div>

            </div>
        )
            
        
        return ReactDom.createPortal(node,document.getElementById('modals'))
    }
}

export default modal1 