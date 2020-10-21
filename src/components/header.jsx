import React, { Component } from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';


class Header extends Component { 



    render() { 
        return (
            <React.Fragment>
                <header id="header" className="fl-r">
                    <div id="logo-title">
                        ListToDo
                    </div>
                    <nav id="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <AmplifySignOut />
                            </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Header;