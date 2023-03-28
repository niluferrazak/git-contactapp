
import React, {useState, useEffect} from "react";
import './App.css';
import AddContact from './components/AddContact';
import ContatctList from './components/ContatctList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contacts);
    setContacts([...contacts, contact] );
  };

  useEffect(() => {
    const retriveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContatctList contacts={contacts}/>
    
    </div>
  );
}

export default App;
