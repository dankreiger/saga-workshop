import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import Dogs from '../Dogs/Dogs';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default function App() {
  const dispatch = useDispatch();
  const screenSaverActive = useSelector(
    ({ screenSaver }) => screenSaver.active
  );

  const onActive = useCallback(() => {
    dispatch({ type: 'STOP_SCREEN_SAVER' });
  }, [dispatch]);

  const onIdle = useCallback(() => {
    dispatch({ type: 'START_SCREEN_SAVER' });
  }, [dispatch]);
  return (
    <ErrorBoundary>
      <IdleTimer
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        debounce={250}
        timeout={3000}
      />
      <div className={`App ${screenSaverActive && 'screenSaver'}`}>
        <h1 className={screenSaverActive ? 'hidden' : ''}>I am an app</h1>
        {screenSaverActive && <Dogs />}
      </div>
    </ErrorBoundary>
  );
}
