import './App.css';
import Hint from './components/Hint/Hint';
import Title from './components/Title/Title';
import InputCard from './components/InputCard/InputCard';
import PreviewCard from './components/PreviewCard/PreviewCard';

function App() {
  return (
    <>
      <Hint />
      <Title />
      <div className="container">
        <InputCard />
        <PreviewCard />
      </div>
    </>
  );
}

export default App;
