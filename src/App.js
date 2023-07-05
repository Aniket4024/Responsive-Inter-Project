import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TopLable from './components/TopLable';

function App() {
  return (
    <div className="App">
      <TopLable/>
      <div id='main'>
        <SideBar/>
        <div id='main1'>
          <Header/>
          <div>
            <h2>Name</h2>
          </div>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
