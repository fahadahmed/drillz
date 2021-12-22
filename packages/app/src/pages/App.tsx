import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db, collection, getDocs, addDoc } from '../config/firebase';

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

function App() {

  console.log(process.env.DRILLZ_APP_PROJECT_ID);

  const [tasks, setTasks] = useState(null);
  const [todo, setTodo] = useState('');
  const dbRef = collection(db, 'tasks');



  const handleAddTask = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todo !== '') {
      await addDoc(dbRef, { description: todo, status: 'open' });
      setTodo('');
    }
  };

  const getTasks = async () => {
    const data = await getDocs(dbRef);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getTasks();
  }, []);

  type Task = {
    description: string;
    status: string;
    id: string;
  }

  return (
    <Container>
      <h1>Sample Todo App to check Firebase Integration</h1>
      <form onSubmit={handleAddTask} id="add-task-form">
        <input type="text" name="addTask" placeholder="What do you need to do?" onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <div>
        {tasks && tasks.map((task: Task) =>
          <div key={task.id}>{task.description}</div>
        )}
      </div>
    </Container>
  );
}

export default App;
