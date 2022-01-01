import React, { SyntheticEvent } from 'react';

const UNITS = ['times', 'mins', 'ml', 'serve', 'cups'];
const TIMEFRAME = ['daily', 'weekly', 'monthly'];

function GoodHabit() {
  const createHabit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('We need to create a new habit');
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
