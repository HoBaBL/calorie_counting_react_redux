import { store } from './redux/store';
import { Provider } from 'react-redux'
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
    
  );
}

export default App;
