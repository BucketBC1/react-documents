import React from "react";
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <nav>
          <h4 className='cont-title'>Content</h4>
          <ul className='navUl'>
            <li className='navIl'>
              <Link to="/Create a Complex JSX Element" className='link'>
                Create a Complex JSX Element
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Add Comments in JSX" className='link'>
                Add Comments in JSX
              </Link>
            </li>
            <li className='navIl'>
            <Link to="/Render HTML Elements to the DOM" className='link'>
              Render HTML Elements to the DOM
            </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Define an HTML Class in JSX
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Learn About Self-Closing JSX Tags
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a Stateless Functional Component
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a React Component
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a Component with Composition
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Use React to Render Nested Components
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Compose React Component	11
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Render a Class Component to the DOM
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Write a React Component from Scratch
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Pass Props to a Stateless Functional Component
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Pass an Array as Props
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Use Default Props
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Override Default Props
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Use PropTypes to Define the Props You Expect
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Access Props Using this.props
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Review Using Props with Stateless Functional Components
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a Stateful Component
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Render State in the User Interface
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Render State in the User Interface Another Way
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Set State with this.setState
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Bind ‘this’ to a Class Method
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Use stage to Toggle an Element
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Write a Simple Counter
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a Controlled Input
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Create a Controlled Form
              </Link>
            </li>
            <li className='navIl'>
              <Link className='link'>
                Pass State as Props to Child Components
              </Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;