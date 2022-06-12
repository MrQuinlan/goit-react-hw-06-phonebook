import { createReducer } from '@reduxjs/toolkit';

import { addContact } from './ContactForm-actions';
import { removeContact } from './ContactForm-actions';

export const items = createReducer(
    [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    {
        [addContact]: (state, { payload }) => [...state, payload],

        [removeContact]: (state, { payload }) =>
            state.filter(({ id }) => id !== payload),
    }
);
