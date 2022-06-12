import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactForm/ContactForm-actions';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const contacts = useSelector(state => state.persistedReducer.items);

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        }

        if (name === 'number') {
            setNumber(value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const isContact = contacts.find(contact => contact.name === name);

        if (isContact) {
            alert(`${name} is already in contacts`);
            return;
        }

        dispatch(addContact(name, number));

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                <span className={s.title}>name</span>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className={s.label}>
                <span className={s.title}>number</span>
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    required
                />
            </label>

            <button className={s.btn}>Add contact</button>
        </form>
    );
};

export default ContactForm;
