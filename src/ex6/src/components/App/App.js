import React, { useCallback, useEffect, useState } from 'react';
import {
  AppWrapper,
  AppLoadingWrapper,
  AppImgWrapper,
  AppButton,
  AppCounter,
  AppButtonWrapper
} from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogRequest } from 'state/dog/actions';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

function App() {
  const dispatch = useDispatch();
  const [breeds, setBreeds] = useState([]);
  const currentImage = useSelector(({ dog }) => dog.currentImage);
  const currentBreed = useSelector(({ dog }) => dog.currentBreed);
  const loading = useSelector(({ dog }) => dog.loading);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(json => setBreeds(Object.keys(json.message)));
  }, []);

  const handleFetchDog = useCallback(
    e => {
      dispatch(fetchDogRequest(e.target.name));
    },
    [dispatch]
  );
  return (
    <AppWrapper>
      {loading && (
        <AppLoadingWrapper>
          <LoadingSpinner />
        </AppLoadingWrapper>
      )}
      <AppImgWrapper>
        {currentImage && <img src={currentImage} alt="dog" />}
      </AppImgWrapper>
      <AppButtonWrapper>
        {breeds.map(b => (
          <AppButton
            currentBreed={currentBreed}
            breed={b}
            name={b}
            onClick={handleFetchDog}
            key={b}
          >
            {b}
          </AppButton>
        ))}
      </AppButtonWrapper>
    </AppWrapper>
  );
}
export default App;
