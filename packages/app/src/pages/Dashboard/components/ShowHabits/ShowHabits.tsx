import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { AppContext } from '../../../../components';
import { db, doc, getDoc } from '../../../../config/firebase';

interface Habit {
  habitName: string;
  goal: number;
  unit: string;
  timeframe: string;
  id: string;
}

const HabitRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ShowHabits() {
  const [habits, setHabits] = useState(null);
  const { currentUser } = useContext(AppContext);

  const retrieveUserDetails = async () => {
    const userData = await getDoc(doc(db, `userData/${currentUser.uid}`));
    setHabits(userData.data().habits);
  };

  useEffect(() => {
    retrieveUserDetails();

    return () => {
      setHabits(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logHabit = () => {
    console.log('We neeed to log an event for the habit');
  };

  return (
    <div>
      {habits &&
        habits.map((habit: Habit) => (
          <HabitRow key={habit.id}>
            {habit.habitName}
            <div>
              <button onClick={logHabit}>Log</button>
            </div>
          </HabitRow>
        ))}
    </div>
  );
}

export default ShowHabits;
