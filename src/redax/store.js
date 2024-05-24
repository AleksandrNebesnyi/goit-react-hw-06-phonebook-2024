import { configureStore } from '@reduxjs/toolkit'; // Импорт функции создания хранилища и прослойки
import logger from 'redux-logger';
import {contactsReducer} from './contacts/contacts-slice';
import {filterReducer} from './contacts/filter-slice';
import { persistStore, persistReducer} from 'redux-persist'; // Импорт функции персистеров 
import storage from 'redux-persist/lib/storage'; // Импорт локального хранилища из библиотеки персиста
// Конфиг персиста для контактов с блеклистом
// const contactsPersistConfig = {
//   key:  'contacts',
//   storage,
//   blacklist: ['filter'],
  
// };

// Создание хранилища (корневой редюсер + прослойки + тулзы только для разработки)
// export const store = configureStore({
//     reducer: {
//       contacts: persistReducer(contactsPersistConfig, contactsReducer),
//       filter:filterReducer
//     },
//     middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware(), logger],
//     devTools: process.env.NODE_ENV === 'development',
//   });
  export const store = configureStore({
    reducer: {
      contacts:  contactsReducer,
      filter:filterReducer
    },
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV === 'development',
  });
  

  // Обёртка хранилища в персистор
  // export const persistor = persistStore(store);
