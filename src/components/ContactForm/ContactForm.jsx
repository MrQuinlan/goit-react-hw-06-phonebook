import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        onSubmit(name, number);
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

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return (
//             <form className={s.form} onSubmit={this.handleSubmit}>
//                 <label className={s.label}>
//                     <span className={s.title}>name</span>
//                     <input
//                         className={s.input}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         required
//                     />
//                 </label>

//                 <label className={s.label}>
//                     <span className={s.title}>number</span>
//                     <input
//                         className={s.input}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                         required
//                     />
//                 </label>

//                 <button className={s.btn}>Add contact</button>
//             </form>
//         );
//     }
// }

// export default ContactForm;

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };
