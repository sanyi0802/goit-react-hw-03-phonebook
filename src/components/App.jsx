
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in the contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
