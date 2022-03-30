import { faEdit, faTrash, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ListTasks = ({ tasks, onDelete, onEdit }) => {
    return (
        <>
            <h2 className="color-primary mb-3">Task List</h2>
            {
                tasks.map(task =>
                    <div className="border rounded mb-3 p-3 color-secondary" key={task.id}>

                        <div className="d-flex justify-content-between">
                            <div className="fw-bold">   {task.nombre}  </div>
                            <div className="text-muted">
                                <FontAwesomeIcon icon={faEdit} onClick={() => { onEdit(task) }} className="btn btn-primary" title="Edit Task" />
                                <FontAwesomeIcon icon={faTrash} onClick={() => { onDelete(task) }} className="btn btn-danger ms-2" title="Delete Task" />
                            </div>
                        </div>

                        <div className='pt-2'>
                            {
                                task.status ?
                                    <div className="text-success small">
                                        <FontAwesomeIcon icon={faCheckCircle} /> {' '}
                                        Completado
                                    </div>
                                    :
                                    <div className="text-secondary small">
                                        <FontAwesomeIcon icon={faClock} /> {' '}
                                        Pendiente
                                    </div>
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ListTasks;