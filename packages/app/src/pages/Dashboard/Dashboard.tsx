import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Pane, PaneHeader, PaneContent } from '../../styles/common.styles';

function Dashboard() {
  return (
    <Container>
      <Pane>
        <PaneHeader>
          <h2>All Habits</h2>
          <Link to="/add-habit">Add Habit</Link>
        </PaneHeader>
        <PaneContent>
          <p>This is the content section of the pane</p>
        </PaneContent>
      </Pane>
      <Pane>
        <PaneHeader>
          <h2>Habit Analysis</h2>
        </PaneHeader>
        <PaneContent>
          <p>This is the content section of the pane</p>
        </PaneContent>
      </Pane>
    </Container>
  );
}

export default Dashboard;
