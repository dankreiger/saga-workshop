import React, { useCallback } from 'react';
import { AppWrapper, AppImgWrapper, AppButton, AppCounter } from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDog } from 'state/dog/actions';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

function App() {
  const dispatch = useDispatch();
  const image = useSelector(({ dog }) => dog.image);
  const loading = useSelector(({ dog }) => dog.loading);
  const counter = useSelector(({ counter }) => counter);

  const handleFetchDog = useCallback(() => {
    dispatch(fetchDog());
  }, [dispatch]);
  return (
    <AppWrapper>
      <AppImgWrapper>
        <img src={image} alt="dog" />
      </AppImgWrapper>
      <AppButton onClick={handleFetchDog}>
        {loading ? <LoadingSpinner /> : 'fetch'}
      </AppButton>

      <AppCounter>
        Fetched {counter} time{counter === 1 ? '' : 's'}
      </AppCounter>
    </AppWrapper>
  );
}
export default App;
