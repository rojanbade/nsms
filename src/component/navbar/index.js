import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none',
        }}
      >
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/calculator`}>Calculator</Link>
        </li>
        <li>
          <Link to={`/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`/clock`}>Clock</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
