// import { useState, useMemo, useEffect,ChangeEvent } from 'react';
// import { UseSelector, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import css from './App.module.css';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
 
    return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm  />

      <h2>Contacts</h2>

      <Filter />
      <ContactsList/>
    </div>
  );
};
