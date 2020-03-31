import styled from 'styled-components';

export const AppWrapper = styled.div``;
export const AppLoadingWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const AppImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const AppButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 2;
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
`;

export const AppButton = styled.button`
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: ${({ currentBreed, breed }) =>
    currentBreed === breed ? 'rgba(238,110,115,0.9)' : 'rgba(33,150,243, 0.7)'};
  box-shadow: 0 0 4px #999;
  outline: none;
  width: 200px;
  margin-bottom: 10px;

  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: ${({ currentBreed, breed }) => `${
      currentBreed === breed ? 'rgba(238,110,115,0.9)' : '#47a7f5'
    } radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%`};
  }
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const AppCounter = styled.div`
  font-size: 2em;
  grid-area: counter;
  justify-self: center;
`;
