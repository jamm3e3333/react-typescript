import GuestList from './state/GuestList';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
import './App.scss';

function App() {
  return (
    <div className="App">
      <GuestList />
      <EventComponent />
      <UserSearch />
    </div>
  );
}

export default App;
