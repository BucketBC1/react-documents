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
import PassPropsToaStatelessFunctionalComponent from './components/content/PassPropsToaStatelessFunctionalComponent';
import PassAnArrayAsProps from './components/content/PassanArrayAsProps';
import UseDefaultProps from './components/content/UseDefaultProps';
import OverrideDefaultProps from './components/content/OverrideDefaultProps';
import UsePropTypesToDefineThePropsYouExpect from './components/content/UsePropTypestoDefinethePropsYouExpect';
import AccessPropsUsingThisProps from './components/content/AccessPropsUsingThisProps';
import ReviewUsingPropsWithStatelessFunctionalComponents from './components/content/ReviewUsingPropsWithStatelessFunctionalComponents';
import CreateAStatefulComponent from './components/content/CreateaStatefulComponent';
import RenderStateInTheUserInterface from './components/content/RenderStateInTheUserInterface';
import RenderStateInTheUserInterfaceAnotherWay from './components/content/RenderStateInTheUserInterfaceAnotherWay';
import Main from './components/Main';
import './styles/App.css';

function App() {
  return (
    <div className='mainApp'>
      <Router>
        <Nav/>
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/Add Comments in JSX" element={<AddCommentsinJsx/>}/>
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
              <Route path='/Pass Props to a Stateless Functional Component' element={<PassPropsToaStatelessFunctionalComponent/>}/>
              <Route path="/Pass an Array as Props" element={<PassAnArrayAsProps/>}/>
              <Route path="/Use Default Props" element={<UseDefaultProps/>}/>
              <Route path="/Override Default Props" element={<OverrideDefaultProps/>}/>
              <Route path='/Use PropTypes to Define the Props You Expect' element={<UsePropTypesToDefineThePropsYouExpect/>}/>
              <Route path='/Access Props Using this.props' element={<AccessPropsUsingThisProps/>}/>
              <Route path="/Review Using Props with Stateless Functional Components" element={<ReviewUsingPropsWithStatelessFunctionalComponents/>}/>
              <Route path="/Create a Stateful Component" element={<CreateAStatefulComponent/>}/>
              <Route path='/Render State in the User Interface' element={<RenderStateInTheUserInterface/>}/>
              <Route path='/Render State in the User Interface Another Way' element={<RenderStateInTheUserInterfaceAnotherWay/>}/>
            </Routes>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
