import React, { Component } from 'react';

class Modal extends Component { 
    render() { 
        return (
            <React.Fragment>
                <div className={this.props.open ? "bg-modal display-flex" : "bg-modal display-none"}>
                    <div className="modal-content">
                        <div className='close' onClick={this.props.handleClose}>
                            <button className='nav-btn'>&times;</button>
                        </div>
                        <h1>Enter Project Task!</h1>
                        <form onSubmit={this.props.handleFormSubmit} id="task-form">
                            <p><input className='add-input' name="name" required type="text" placeholder="Enter Task Name"></input></p>
                            <p><button type='submit' className="nav-btn">ADD TASK</button></p>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Modal;