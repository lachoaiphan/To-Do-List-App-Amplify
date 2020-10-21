import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../graphql/mutations';
import { listTasks } from '../graphql/queries';
import Modal from './modal';
import Task from './task';

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const ToDoList = () => {
    //const [formState, setFormState] = useState(initialState);
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, []);

    function showModal() {
        console.log('modal');
        setOpen(true);
    }

    function hideModal() {
        setOpen(false);
    }

    /*
    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }
    */

    async function fetchTasks() {
        try {
            const taskData = await API.graphql(graphqlOperation(listTasks));
            const taskList = taskData.data.listTodos.items;
            console.log(taskList)
            setTasks(taskList);
        } catch (err) {
            console.log('error in creating task:', err);
        }
    }

    async function addTask(data) {
        try {
            if (!data) return;
            console.log('before');
            const task = {id: tasks.length, name: data}
            console.log(task);
            console.log([...tasks, task])
            setTasks([...tasks, task]);
            console.log(tasks);
            //setFormState(initialState);
            await API.graphql(graphqlOperation(createTodo, {input: task}));
        } catch (err) {
            console.log('error creating todo:', err);
            console.log('error creating todo:', err.errors.message);
        }
        hideModal();
    }

    function handleFormSubmit (event) {
        event.preventDefault();
        
        const data = event.target.name.value;
        console.log(data);
        addTask(data);
        
    };

    function handleCheckBox (event) {
        return;
        /*
        const tasks = this.state.tasks.slice();
        let task = tasks[event.target.id];
        task.checked = !task.checked;
        this.setState({ tasks: tasks } );
        */
    }

    return (
        <React.Fragment>
            <section id="to-do-list" className="fl-r">
                <div className="to-do-ctn">
                    <div>
                        <h1>My To-Do List</h1>
                        <ul>
                            {tasks.map(task => <Task id={task.id}
                                                        check={task.checked}
                                                        handleCheckBox={handleCheckBox}
                                                        taskDesc={task.name}/>)}
                        </ul>
                    </div>
                    <div>
                        <button type="button" onClick={showModal} className="icon-plus"></button>
                        <Modal open={open} handleClose={hideModal}
                                                handleFormSubmit={handleFormSubmit} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
 
export default ToDoList;