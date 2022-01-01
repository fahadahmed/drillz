import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

const Pane = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  border: 2px solid #999;
`;
const PaneHeader = styled.div`
  border-bottom: 2px solid #999;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PaneContent = styled.div`
  padding: 16px;
`;

function Dashboard() {
  return (
    <Container>
      <Pane>
        <PaneHeader>
          <h2>All Habits</h2>
          <button>Add Habit</button>
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
