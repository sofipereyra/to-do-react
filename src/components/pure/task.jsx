import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i className='bi-toggle-on task-action' onClick={() => complete(task)} style={{color: 'green'}}></i>)
        }else{
            return (<i className='bi-toggle-off task-action' onClick={() => complete(task)} style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'black'
    }

    return (
        <div className='individual-card fw-normal bg-light shadow p-3 border border-dark rounded-2' style={task.completed ? taskCompleted : taskPending}>
            <h5 >
                <span className='align-middle'>{task.name}</span>
            </h5 >
            <p className='align-middle'>
                <span>{task.description}</span>
            </p>
            <div className='text-end'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </div>
            <div className='mt-2 text-end'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </div>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;