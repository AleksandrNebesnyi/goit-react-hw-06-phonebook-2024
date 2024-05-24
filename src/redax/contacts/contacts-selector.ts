
interface IContact {
  id: string;
  name: string;
  number: string;
}

interface IState{
  contacts:IContact[];
  filter:string;
}
type TGetContacts =(state:IState)=>IContact[];
type TGetFilter =(state:IState)=>string;


// селектор получения части стейта массива контактов
export const getContacts: TGetContacts = state => state.contacts;
// селектор получения части стейта хранящего значение фильтра

export const getFilter:TGetFilter = state => state.filter;
//Составной селектор для получения отфильтрованных контактов
export const getfilteredContacts:TGetContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  if (filter !== '') {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  } else {
    return contacts;
  }
};