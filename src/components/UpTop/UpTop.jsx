import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './UpTop.css';

const MenuItem = () => {
  const [showUp, setShowUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY >= 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="app__uptop">
      {showUp && (
        <BsFillArrowUpCircleFill
          color="#fff"
          fontSize={40}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
};

export default MenuItem;
