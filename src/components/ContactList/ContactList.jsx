import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/ContactForm/ContactForm-actions';
import s from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();

    function filteredContacts(state) {
        const filter = state.persistedReducer.filter;
        const items = state.persistedReducer.items;

        if (!filter) {
            return items;
        }

        return items.filter(({ name }) => {
            return name.toLowerCase().includes(filter);
        });
    }

    const items = useSelector(state => {
        return filteredContacts(state);
    });

    return (
        <ul className={s.list}>
            {items.map(contact => {
                const { id, name, number } = contact;

                return (
                    <li className={s.item} key={id}>
                        <span className={s.span}>
                            {name}: {number}
                        </span>

                        <button
                            id={id}
                            type="button"
                            className={s.btn}
                            onClick={() => dispatch(removeContact(id))}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactList;
