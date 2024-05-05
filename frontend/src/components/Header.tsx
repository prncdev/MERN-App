import React from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaSignInAlt, FaUser } from 'react-icons/fa';
type ListProps = {
  /**
   * @type React Element for list items or any React JSX.
   */
  children?: React.ReactNode | null;

  /**
   * 
   * @returns Mouse click event handler void.
   */
  onClick?: () => void;

  /**
   * Class name for Element.
   */
  className?: string;
}

export const List: React.FC<ListProps> = function(props) {
  const { children } = props;

  return (
    <ul
      className="flex gap-2"
      {...props}
      >
        {children}
    </ul>
  );
};

type ItemProps = {
  /**
   * @Value Text value that will display.
   */
  children?: string | React.ReactNode;
  className?: string;
}

export const Item: React.FC<ItemProps> = function(props) {
  const { children } = props;
  
  return (
    <li
      className="flex items-center gap-1 cursor-pointer"
      {...props}
    >
      {children}
    </li>
  );
};

const Header: React.FC = function() {
  return (
    <header className='py-3 px-4'>
      <section className="flex gap-5 py-4">
        <Link to='/'>
          <div className="w-36 flex items-center justify-between">
            Bitter Buddies <FaPizzaSlice />
          </div>
        </Link>

        <nav className="w-full flex justify-between">
          <List>
            <Item>
              <Link to='/'>Home</Link>
            </Item>
            
            <Item>About</Item>
          </List>

          <List>
            <Item>
              <FaSignInAlt /> <Link to='/login' >Login</Link>
            </Item>

            <Item>
              <FaUser /> <Link to='/signin'>Sign up</Link>
            </Item>
          </List>
        </nav>
      </section>
      <hr />
    </header>
  )
};

export default Header;