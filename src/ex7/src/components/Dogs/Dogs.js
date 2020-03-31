import React from 'react';
import { animated, useTrail } from 'react-spring';
import { useSelector } from 'react-redux';
import { numberOfPups } from '../../redux/screensaver/constants';

const Dogs = () => {
  const puppiesVisible = useSelector(
    ({ screenSaver }) => screenSaver.puppiesVisible
  );
  const puppies = useSelector(({ screenSaver }) => screenSaver.puppies);
  const error = useSelector(({ screenSaver }) => screenSaver.error);

  const trail = useTrail(numberOfPups, {
    opacity: puppiesVisible ? 1 : 0,
    transform: puppiesVisible ? 'scale(1)' : 'scale(0.3)'
  });

  if (error) {
    throw new Error(error);
  }
  return (
    <>
      {puppies.length > 0 && (
        <div className="dogs-grid">
          {trail.map((animation, i) => (
            <animated.div key={i} className="dog" style={animation}>
              <div className="img-wrapper">
                <img src={puppies[i]} alt={i} />
              </div>
            </animated.div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dogs;
