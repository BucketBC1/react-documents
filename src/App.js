import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import NewPage from './components/NewPage';
import Learn from './components/Learn';
import './App.css';

function App() {
  return (
    <div className='mainApp'>
      <Router>
        <nav>
          <h4 className='cont'>Content</h4>
          <ul className='navUl'>
            <li className='navIl'> 
              <Link to="/new-page">
                Create a Simple JSX Element
              </Link>
            </li>
            <li className='navIl'>
              Create a Complex JSX Element
            </li>
            <li className='navIl'>
              Add Comments in JSX
            </li>
            <li className='navIl'>
              Render HTML Elements to the DOM
            </li>
            <li className='navIl'>
              Define an HTML Class in JSX
            </li>
            <li className='navIl'>
              Learn About Self-Closing JSX Tags
            </li>
            <li className='navIl'>
              Create a Stateless Functional Component
            </li>
            <li className='navIl'>
              Create a React Component
            </li>
            <li className='navIl'>
              Create a Component with Composition
            </li>
            <li className='navIl'>
              Use React to Render Nested Components
            </li>
            <li>
              Compose React Component	11
            </li>
            <li>
              Render a Class Component to the DOM
            </li>
            <li>
              Write a React Component from Scratch
            </li>
            <li>
              Pass Props to a Stateless Functional Component
            </li>
            <li>
              Pass an Array as Props
            </li>
            <li>
              Use Default Props
            </li>
            <li>
              Override Default Props
            </li>
            <li>
              Use PropTypes to Define the Props You Expect
            </li>
            <li>
              Access Props Using this.props
            </li>
            <li>
              Review Using Props with Stateless Functional Components
            </li>
            <li>
              Create a Stateful Component
            </li>
            <li>
              Render State in the User Interface
            </li>
            <li>
              Render State in the User Interface Another Way
            </li>
            <li>Set State with this.setState</li>
            <li>Bind ‘this’ to a Class Method</li>
            <li>Use stage to Toggle an Element</li>
            <li>Write a Simple Counter</li>
            <li>Create a Controlled Input</li>
            <li>Create a Controlled Form</li>
            <li>Pass State as Props to Child Components</li>
          </ul>
        </nav>
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/new-page" element={<NewPage/>}/>
              <Route path="/new-page/learn" element={<Learn/>}/>
            </Routes>
          </section>
        </main>
        
      </Router>
    </div>
  );
}






export default App;
