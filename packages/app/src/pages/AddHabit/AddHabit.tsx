import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GoodHabit, BadHabit } from './components';

const PageContainer = styled.div`
  padding: 16px;
`;

function AddHabit() {
  const [habitType, setHabitType] = useState(null);

  const handleHabitType = (habit: string) => {
    setHabitType(habit);
  };

  return (
    <PageContainer>
      <h2>Add New Habit</h2>
      <div>
        <button onClick={() => handleHabitType('createHabit')}>Create Good Habit</button>
        <button onClick={() => handleHabitType('breakHabit')}>Break Bad Habit</button>
      </div>
      <div>
        {habitType === 'createHabit' && <GoodHabit />}
        {habitType === 'breakHabit' && <BadHabit />}
      </div>
    </PageContainer>
  );
}

export default AddHabit;
