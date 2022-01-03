import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../../components';
import { db, doc, getDoc } from '../../../../config/firebase';

interface Habit {
  habitName: string;
  goal: number;
  unit: string;
  timeframe: string;
  id: string;
}

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
  return (
    <div>{habits && habits.map((habit: Habit) => <div key={habit.id}>{habit.habitName}</div>)}</div>
  );
}

export default ShowHabits;
