import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMemberList from "./Data/TeamMemberList";
import TeamMemberCard from "./Components/TeamMemberCard";
import InputForm from "./Components/Form"


function App() {
  const [list, setList] = useState(TeamMemberList);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setList([...list, newMember]);
  }


  return (
    <div className="App">
        <h1>Team Members</h1>
        <InputForm addNewMember = {addNewMember} />
        <TeamMemberCard memberList = {list} />
    </div>
  );
}

export default App;
