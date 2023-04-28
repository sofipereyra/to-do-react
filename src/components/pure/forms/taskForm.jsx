import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

function TaskForm({ add }) {
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center mb-4'>
            <div>
                <input ref={nameRef} id="inputName" type="text" className="form-control lg" placeholder='Title'/>
                <input ref={descriptionRef} id="inputDescription" type="text" className="form-control lg my-2" placeholder='Description'/>
                <label htmlFor="selectLevel" className="sr-only">Priotity</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-outline-success m-4'>Add</button>
        </form>
    )
}

TaskForm.prototype = {
    add: PropTypes.func.isRequired
}

export default TaskForm;