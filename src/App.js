import './app.css';
import Button from './UI/Button/Button';

function App() {
  return (
    <div className="App">
      <Button size={'large'} variant={'primary'}>
        click
      </Button>
      <Button size={'small'} variant={'secondary'}>
        click
      </Button>
      <Button variant={'danger'}>click</Button>
    </div>
  );
}

export default App;
