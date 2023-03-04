import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div>
      <Stars count={2} />
      <Stars count={'1'} />
      <Stars />
      <Stars count={6} />
      <Stars count={5} />
    </div>
  )
}

export default App;
