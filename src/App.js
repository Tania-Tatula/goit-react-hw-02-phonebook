import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';



class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  };


formSubmitHandler = contact =>{

  console.log(contact);
  this.setState(prevState =>({
    contacts: [contact, ...prevState.contacts]
   }))

   console.log(this.state.contacts);

}
changeFilter =(evt) =>{
  this.setState({filter: evt.currentTarget.value})
}

getVisibleContacts =() =>{
  const {filter, contacts} = this.state;
  const filterLowerCase = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));

}

  render() {
    // const filterLowerCase = this.state.filter.toLowerCase();
    // const visibleContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));
    
    return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <ContactList contactList={this.getVisibleContacts()}/>
      
    </div>
    )}
}

export default App;
