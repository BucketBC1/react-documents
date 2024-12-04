import React, {useState, useEffect} from "react";
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
              <Link to="/Define an HTML Class in JSX" className='link'>
                Define an HTML Class in JSX
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Learn About Self-Closing JSX Tags"className='link'>
                Learn About Self-Closing JSX Tags
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a Stateless Functional Component" className='link'>
                Create a Stateless Functional Component
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a React Component" className='link'>
                Create a React Component
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a Component with Composition" className='link'>
                Create a Component with Composition
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Use React to Render Nested Components" className='link'>
                Use React to Render Nested Components
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Compose React Component" className='link'>
                Compose React Component
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Render a Class Component to the DOM" className='link'>
                Render a Class Component to the DOM
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Write a React Component from Scratch" className='link'>
                Write a React Component from Scratch
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Pass Props to a Stateless Functional Component" className='link'>
                Pass Props to a Stateless Functional Component
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Pass an Array as Props" className='link'>
                Pass an Array as Props
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Use Default Props" className='link'>
                Use Default Props
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Override Default Props" className='link'>
                Override Default Props
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Use PropTypes to Define the Props You Expect" className='link'>
                Use PropTypes to Define the Props You Expect
              </Link>
            </li>
            <li className='navIl'>
              <Link to="Access Props Using this.props" className='link'>
                Access Props Using this.props
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Review Using Props with Stateless Functional Components" className='link'>
                Review Using Props with Stateless Functional Components
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a Stateful Component" className='link'>
                Create a Stateful Component
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Render State in the User Interface" className='link'>
                Render State in the User Interface
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Render State in the User Interface Another Way" className='link'>
                Render State in the User Interface Another Way
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Set State with this.setState" className='link'>
                Set State with this.setState
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Bind this to a Class Method" className='link'>
                Bind ‘this’ to a Class Method
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Use stage to Toggle an Element" className='link'>
                Use stage to Toggle an Element
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Write a Simple Counter" className='link'>
                Write a Simple Counter
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a Controlled Input" className='link'>
                Create a Controlled Input
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Create a Controlled Form" className='link'>
                Create a Controlled Form
              </Link>
            </li>
            <li className='navIl'>
              <Link to="/Pass State as Props to Child Components" className='link'>
                Pass State as Props to Child Components
              </Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;