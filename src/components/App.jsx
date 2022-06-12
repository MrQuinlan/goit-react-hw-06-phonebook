import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './App.module.css';

const App = () => {
    return (
        <div>
            <Container>
                <h1 className={s.title}>Phonebook</h1>

                <ContactForm />

                <h2 className={s.title}>Contacts</h2>

                <Filter />
                <ContactList />
            </Container>
        </div>
    );
};

export default App;
