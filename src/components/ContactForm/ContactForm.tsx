import { useState,ChangeEvent,FormEvent  } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redax/contacts/contacts-selector';
import { addContact } from '../../redax/contacts/contacts-slice';
import Notiflix from 'notiflix';

interface IContact {
  id:string;
  name: string;
  number: string;
}
type typeonSubmit= (name:string, number:string)=>void
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts:IContact[] = useSelector(getContacts);
 
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmit:typeonSubmit = (name, number) => {
    dispatch(addContact(name, number));
  };
  const normalizeName = name.toLowerCase();
  const ifNameAlreadyExist = contacts.some(
    contact => contact.name.toLowerCase() === normalizeName
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ifNameAlreadyExist) {
      Notiflix.Notify.failure(`${name} is alredy in contact`);
      return;
    }
    if (normalizeName.trim() === '') {
      Notiflix.Notify.failure(`Please enter contact name`);
      return;
    }
    onSubmit(name, number);
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className="col-md-11">
        <input
          id={nameInputId}
          className="form-control form-control-lg  mb-4 "
          type="text"
          placeholder=" Enter Name"
          aria-label=".form-control-lg example"
          name="name"
          value={name}
          required
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-md-11">
        <input
          id={numberInputId}
          className="form-control form-control-lg  mb-4 "
          type="tel"
          placeholder=" Enter Phone"
          aria-label=".form-control-lg example"
          name="number"
          value={number}
          required
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        addContact
      </button>
    </form>
  );
};
