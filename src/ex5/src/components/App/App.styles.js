import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'image button'
    'counter counter';
`;

export const AppImgWrapper = styled.div`
  position: relative;
  padding-bottom: 75%;
  overflow: hidden;
  grid-area: image;

  img {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AppButton = styled.button`
  border: none;
  grid-area: button;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;

  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
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
