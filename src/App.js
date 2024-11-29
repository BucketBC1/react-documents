import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddCommentsinJsx from './components/content/AddCommentsinJsx';
import CreateaComplexJsxElement from './components/content/CreateaComplexJsxElement'
import Nav from './components/Nav';
import RenderHtmlElementsToTheDOM from './components/content/RenderHtmlElementsToTheDOM';
import './App.css';

function App() {
  return (
    <div className='mainApp'>
      <Router>
        <Nav/>
        <main>
          <section>
            <Routes>
              <Route exact path="/Add Comments in JSX" element={<AddCommentsinJsx/>}/>
              <Route path="/Create a Complex JSX Element" element={<CreateaComplexJsxElement/>}/>
              <Route path="/Render HTML Elements to the DOM" element={<RenderHtmlElementsToTheDOM/>}/>
            </Routes>
          </section>
        </main>
        
      </Router>
    </div>
  );
}

export default App;
