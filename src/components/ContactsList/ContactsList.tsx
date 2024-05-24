import css from './ContactsList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch,useSelector } from 'react-redux';
import {getfilteredContacts} from '../../redax/contacts/contacts-selector';
import {deleteContact} from '../../redax/contacts/contacts-slice'


interface IContact {  
  id: string;
  name: string;
  number: string;
}

type typeOnDeleteContact= (id: string) => void;


export const ContactsList = () => {

const contacts:IContact[] = useSelector(getfilteredContacts);
const dispatch = useDispatch();

const onDeleteContact:typeOnDeleteContact = (id:string) => {


  dispatch(deleteContact(id));
};


  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
