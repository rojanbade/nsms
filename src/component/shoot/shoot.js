import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../score/scoreSlice';

const Shoot = () => {
  const teamA = useSelector((state) => state.score.value);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Football</h1>
      <button onClick={() => dispatch(increment())}>Shoot</button>
      <h1>Team A:{teamA}</h1>
    </div>
  );
};
export default Shoot;
