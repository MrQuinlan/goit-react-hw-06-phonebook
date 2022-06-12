import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
    'contactForm/addContact',
    (name, number) => ({
        payload: {
            id: nanoid(),
            name,
            number,
        },
    })
);

export const removeContact = createAction('contactForm/removeContact');
