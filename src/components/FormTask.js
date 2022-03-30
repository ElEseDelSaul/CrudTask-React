import React, { useRef } from 'react';
import { AvField, AvForm, AvInput, AvGroup } from 'availity-reactstrap-validation';
import { Label, Button } from 'reactstrap';

const FormTask = ({ onSubmit, task }) => {
    let form = useRef();

    const _onSubmit = (values) => {
        onSubmit(values);
        form.reset();
    }

    return (
        <>
            <h2 className="mb-3">{task ? 'Edit' : 'New'} Task</h2>
            <AvForm ref={c => (form = c)} onValidSubmit={(_, values) => _onSubmit(values)} >

                <AvGroup className="mb-3">
                    <AvField name="nombre" placeholder="Task Name" label="Name" required value={task ? task.nombre : ''} />
                </AvGroup>

                <AvGroup check className="mb-3">
                    <AvInput type="checkbox" name="status" checked={task ? task.status : false} />
                    <Label check for="status">Estado</Label>
                </AvGroup>

                <AvGroup>
                    <Button className="btn btn-block btn-success">Enviar</Button>
                </AvGroup>
            </AvForm>
        </>
    )

}

export default FormTask;