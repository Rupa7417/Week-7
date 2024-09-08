import React, { useState } from 'react';
import EventList from './components/EventList';
import AddEventForm from './components/AddEventForm';
import EventDetail from './components/EventDetail';
import './App.css';

const App = () => {
  const [events, setevents] = useState([]);
  const [selectedevent, setSelectedEvent] = useState(null);

  const addEvent = (newRecipe) => {
    setEvent([...events, newEvent]);
  };

  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="app">
      <h1>event management system</h1>
      <AddRecipeForm addevent={addevent} />
      <EventList  event={events} selectevent={selectevent} />
      {selectedEvent && <eventDetail event={selectedevent} />}
    </div>
  );
};

export default App;
