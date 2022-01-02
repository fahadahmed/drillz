import React, { useContext, SyntheticEvent } from 'react';
import { AppContext } from '../../../../components';
import { db, setDoc, doc } from '../../../../config/firebase';

const UNITS = ['times', 'mins', 'ml', 'serve', 'cups'];
const TIMEFRAME = ['daily', 'weekly', 'monthly'];

function GoodHabit() {
  const { currentUser } = useContext(AppContext);

  const createHabit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      habitName: { value: string };
      goal: { value: number };
      unit: { value: string };
      timeframe: { value: string };
    };

    const habitName = target.habitName.value;
    const goal = target.goal.value;
    const unit = target.unit.value;
    const timeframe = target.timeframe.value;

    console.log('We need to create a new habit', currentUser);
    console.log(habitName, goal, unit, timeframe);
    await setDoc(doc(db, 'userData', currentUser.uid), {
      habits: [
        {
          habitName,
          goal,
          unit,
          timeframe,
        },
      ],
    });
  };

  return (
    <div>
      <h3>Create Good Habit</h3>
      <form onSubmit={createHabit}>
        <div>
          <label htmlFor="habitName">NAME</label>
          <input type="text" name="habitName" placeholder="Enter the name of the habit" />
        </div>
        <div>
          <label htmlFor="goal">GOAL</label>
          <input type="number" name="goal" />
          <select name="unit">
            {UNITS.map((unit) => (
              <option value={unit} key={unit}>
                {unit}
              </option>
            ))}
          </select>
          <select name="timeframe">
            {TIMEFRAME.map((unit) => (
              <option value={unit} key={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default GoodHabit;
