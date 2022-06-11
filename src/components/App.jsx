import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './App.module.css';

const App = () => {
    const [contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);

    const [filter, setFilter] = useState('');
    const componentDidMount = useRef(true);

    useEffect(() => {
        const newContacts = JSON.parse(localStorage.getItem('contacts'));
        newContacts && setContacts(newContacts);
    }, []);

    useEffect(() => {
        const newContacts = JSON.stringify(contacts);

        if (componentDidMount.current) {
            componentDidMount.current = false;
            return;
        }

        localStorage.setItem('contacts', newContacts);
    }, [contacts]);

    const addContact = (name, number) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        const isContact = contacts.find(({ query }) => query === name);

        isContact
            ? alert(`${name} is already in contacts`)
            : setContacts([...contacts, newContact]);
    };

    const handleFilter = e => {
        setFilter(e.currentTarget.value);
    };

    const filteredContacts = () => {
        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(({ name }) => {
            return name.toLowerCase().includes(normalizeFilter);
        });
    };

    const remove = delId => {
        setContacts(contacts.filter(({ id }) => id !== delId));
    };

    return (
        <div>
            <Container>
                <h1 className={s.title}>Phonebook</h1>

                <ContactForm onSubmit={addContact} />

                <h2 className={s.title}>Contacts</h2>

                <Filter data={filter} handleFilter={handleFilter} />

                <ContactList contacts={filteredContacts()} remove={remove} />
            </Container>
        </div>
    );
};

export default App;

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import Container from './Container';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
// import s from './App.module.css';

// class App extends Component {
//     state = {
//         contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//     };

//     componentDidMount() {
//         const newContacts = JSON.parse(localStorage.getItem('contacts'));
//         newContacts && this.setState({ contacts: newContacts });
//     }

//     componentDidUpdate(prevState) {
//         const prevContacts = prevState.contacts;
//         const contacts = JSON.stringify(this.state.contacts);

//         if (prevContacts !== contacts) {
//             localStorage.setItem('contacts', contacts);
//         }
//     }

//     addContact = ({ name, number }) => {
//         const contacts = this.state.contacts;
//         const newContact = {
//             id: nanoid(),
//             name,
//             number,
//         };

//         const isContact = contacts.find(({ name }) => name === newContact.name);

//         isContact
//             ? alert(`${name} is already in contacts`)
//             : this.setState(({ contacts }) => ({
//                   contacts: [...contacts, newContact],
//               }));
//     };

//     handleFilter = e => {
//         this.setState({ filter: e.currentTarget.value });
//     };

//     filteredContacts = () => {
//         const { filter, contacts } = this.state;
//         const normalizFilter = filter.toLowerCase();

//         return contacts.filter(({ name }) =>
//             name.toLowerCase().includes(normalizFilter)
//         );
//     };

//     remove = delId => {
//         this.setState(({ contacts }) => ({
//             contacts: contacts.filter(({ id }) => id !== delId),
//         }));
//     };

//     render() {
//         return (
//             <div>
//                 <Container>
//                     <h1 className={s.title}>Phonebook</h1>

//                     <ContactForm onSubmit={this.addContact} />

//                     <h2 className={s.title}>Contacts</h2>

//                     <Filter
//                         data={this.state.filter}
//                         handleFilter={this.handleFilter}
//                     />

//                     <ContactList
//                         contacts={this.filteredContacts()}
//                         remove={this.remove}
//                     />
//                 </Container>
//             </div>
//         );
//     }
// }

// export default App;
