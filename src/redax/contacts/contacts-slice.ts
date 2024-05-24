import { createSlice, nanoid,PayloadAction } from '@reduxjs/toolkit';

import { IContact } from '../../interfaces/contacts-interfaces';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [] as IContact[], // Пустий масив як початковий стан,
    reducers:{
        deleteContact(state:IContact[], action:PayloadAction<string>){
            return state.filter(({ id }) => id !== action.payload); 
        },
        addContact: {
            reducer(state:IContact[], action:PayloadAction<IContact>) {
              return  [action.payload, ...state]
            },
            prepare(name:string,number:string) {
              return {
                payload: {
                id: nanoid(),
                  name,
                  number,
                 
                },
              };
            },
          },


    }
   
  });
  export const contactsReducer = contactsSlice.reducer;
  export const {deleteContact,addContact} =  contactsSlice.actions;


