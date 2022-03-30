import React from 'react';
import './App.css';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

//Components
import ListTasks from './components/ListTasks.js';
import { useEffect, useState } from 'react';
import FormTask from './components/FormTask';
import Banner from './components/Banner';

function App() {

  //State
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();


  //peticion al backend

  const getTasks = () => {
    axios.get('http://localhost:8080/tareas')
      .then(({ data }) => setTasks(data));
  }

  //Cargar la funcion getTasks apenas se renderice la App, sin dependencias
  useEffect(getTasks, []);

  const onSubmit = (values) => {
    if (task) {
      axios.put(`http://localhost:8080/tareas/${task.id}`, values)
        .then(() => {
          setTask();
          getTasks();
        });
    } else {
      axios.post('http://localhost:8080/tareas', values)
        .then(() => getTasks());
    }
  }

  const deleteTask = (task) => {
    axios.delete(`http://localhost:8080/tareas/${task.id}`)
      .then(() => getTasks());
  }

  const editTask = (task) => {

  }

  return (
    <>
      <Container>
        <Banner/>
        <Row>
          <Col md={6}>
            <ListTasks tasks={tasks} onDelete={deleteTask} onEdit={(task) => setTask(task)} />
          </Col>
          <Col md={6}>
            <FormTask onSubmit={onSubmit} task={task} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
