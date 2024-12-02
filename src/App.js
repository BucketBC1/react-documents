import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddCommentsinJsx from './components/content/AddCommentsinJsx';
import CreateaComplexJsxElement from './components/content/CreateaComplexJsxElement'
import Nav from './components/Nav';
import RenderHtmlElementsToTheDOM from './components/content/RenderHtmlElementsToTheDOM';
import DefineAnHtmlClassinJsx from './components/content/DefineanHtmlClassinJsx';
import LearnAboutSelfClosingJsxTags from './components/content/LearnAboutSelf-ClosingJsxTags';
import CreateaStatelessFunctionalComponent from './components/content/CreateaStatelessFunctionalComponent';
import CreateaReactComponent from './components/content/CreateaReactComponent';
import CreateaComponentwithComposition from './components/content/CreateAComponentWithComposition';
import UseReactToRenderNestedComponents from './components/content/UseReacttoRenderNestedComponents';
import ComposeReactComponent from './components/content/ComposeReactComponent';
import RenderaClassComponentTotheDOM from './components/content/RenderaClassComponentToTheDOM';
import WriteaReactComponentFromScratch from './components/content/WriteaReactComponentFromScratch';
import './styles/App.css';

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
              <Route path="/Define an HTML Class in JSX" element={<DefineAnHtmlClassinJsx/>}/>
              <Route path="/Learn About Self-Closing JSX Tags" element={<LearnAboutSelfClosingJsxTags/>}/>
              <Route path="/Create a Stateless Functional Component" element={<CreateaStatelessFunctionalComponent/>}/>
              <Route path="/Create a React Component" element={<CreateaReactComponent/>}/>
              <Route path="/Create a Component with Composition" element={<CreateaComponentwithComposition/>}/>
              <Route path="/Use React to Render Nested Components" element={<UseReactToRenderNestedComponents/>}/>
              <Route path="/Compose React Component" element={<ComposeReactComponent/>}/>
              <Route path="/Render a Class Component to the DOM" element={<RenderaClassComponentTotheDOM/>}/>
              <Route path="/Write a React Component from Scratch" element={<WriteaReactComponentFromScratch/>}/>
            </Routes>
          </section>


        </main>
        
      </Router>
    </div>
  );
}

export default App;
