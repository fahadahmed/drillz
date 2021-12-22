import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { db, collection, getDocs } from '../config/firebase';

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

function App() {

  console.log(process.env.DRILLZ_APP_PROJECT_ID);

  // const [tasks, setTasks] = useState(null);
  const dbRef = collection(db, 'tasks');



  const handleAddTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      addTask: { value: string }
    };
    const task = target.addTask.value;
    console.log('We are in the handleAddTask', task);
  };

  const getTasks = async () => {
    const data = await getDocs(dbRef);
    console.log(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <h1>Sample Todo App to check Firebase Integration</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" name="addTask" placeholder="What do you need to do?" />
        <button type="submit">Add Task</button>
      </form>
    </Container>
  );
}

export default App;
