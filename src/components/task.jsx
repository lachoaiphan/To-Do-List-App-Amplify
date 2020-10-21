import React, { Component } from 'react';


class Task extends Component { 

    render() { 
        return (
            <React.Fragment>
                <li className="to-do-task fl-r">
                    <div>
                        <p name="task" className={this.props.check ? "task-check" : "task-uncheck"}>{this.props.taskDesc}</p>
                    </div>
                    <div>
                        <button id={this.props.id} onClick={this.props.handleCheckBox} className="icon-ok"></button>
                    </div>
                </li>
            </React.Fragment>
        );
    }
}
 
export default Task;