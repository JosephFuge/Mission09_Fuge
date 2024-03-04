import React from 'react';
import logo from './logo.svg';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <div className="Heading">
      <h2>NCAA Basketball Info</h2>
      <p className="HeadingText">
        This site provides information about the college teams that participate
        in NCAA Basketball in order to help you fill out the best March Madness
        bracket you can.
      </p>
    </div>
  );
}

// {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
function TeamCard({ ...TeamProps }) {
  return (
    <div className="TeamCard">
      <h3>School: {TeamProps.school}</h3>
      <p>Mascot Name: {TeamProps['name']}</p>
      <p>
        Location: {TeamProps['city']}, {TeamProps['state']}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="TeamList">
      {teamsData['teams'].map((teamInfo, index) => (
        <TeamCard {...{ key: index, ...teamInfo }} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <TeamList />
    </div>
  );
}

export default App;
