import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppWrapper } from './App.styles';
import { ANOTHER_REQUEST, REQUEST } from 'state/constants';

const App = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: REQUEST });
  }, [dispatch]);

  const handleAnotherClick = useCallback(() => {
    dispatch({ type: ANOTHER_REQUEST });
  }, [dispatch]);
  return (
    <AppWrapper>
      <button onClick={handleClick}>Make Request</button>
      <button onClick={handleAnotherClick}>Make Another Request</button>
      <h1>please open the console and enter:</h1>
      <pre>
        <code>$$LogSagas()</code>
      </pre>
    </AppWrapper>
  );
};

export default App;
