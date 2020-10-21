import React, { Component } from 'react';
import Header from './header';
import ToDoList from './toDoList';
import { withAuthenticator } from '@aws-amplify/ui-react'


class App extends Component { 

    render() { 
        return (
            <React.Fragment>
                <Header />
                <ToDoList />
            </React.Fragment>
        );
    }
}
 
export default withAuthenticator(App);