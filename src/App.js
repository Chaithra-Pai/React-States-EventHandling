import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <Counter />
      <FunctionClick/>
      <ClassClick /> 
      <EventBind />
      <ParentComponent />
    </div>
  );
}

export default App;
