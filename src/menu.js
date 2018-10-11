import React from './menu';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink path={ '/' }>Home</NavLink>
        </li>
        <li>
          <NavLink path={ '/about' }>About</NavLink>
        </li>
        <li>
          <NavLink path={ '/contact' }>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
