import React, { Component } from 'react'
import s from './components/Phonebook.module.css'

import { v4 as uuidv4 } from 'uuid';
import Section from './components/Section';
import Phonebook from './components/Phonebook';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts);
      this.setState({ contacts: parsedContacts || [] });
  }

  componentDidUpdate(PrevProps, PrevState) {
    if (this.state.contacts !== PrevState.contacs) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  onAddContact = (name, number) => {
    if (this.onCheckContact(name)) {
      alert(`${name} is already in contacts`)
      return
    }
    const obj = { id: uuidv4(), name, number }
    this.setState((prevState)=> ({contacts: [obj, ...prevState.contacts] }))
  }
  onCheckContact = (value) => {
    return this.state.contacts.find(
      (el) => el.name.toUpperCase() === value.toUpperCase(),
    )
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value }) 
  }

  onDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el, index) => el.id !== id),
    }))

  }

  render() {
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
    <div>
        <Section title="Phonebook">
          <div className={s.mainDiv}>  
            <Phonebook onAddContact={ this.onAddContact }/>
          </div>
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={ this.changeFilter }/>
          <ContactList listContacts={visibleContacts} onDelete={ this.onDelete }/>
        </Section>
      </div>  
   )
  }
}

export default App;
