import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index';
import { Home, Basket } from './pages/index';

const App = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <div className="content">
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route path='/basket' Component={Basket} />
            </Routes>
          </div>
        </main>
    </div>
  </div>
  );
}

export default App;