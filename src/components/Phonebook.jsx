import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import s from './Phonebook.module.css'

class Phonebook extends Component {
    state = {
        name: '',
        number: '',  
    }

    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddContact(this.state.name, this.state.number)
        this.formReset()
    }

    formReset = () => {
        this.setState({name:'' , number:''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={s.div}>
                    <label className={s.label}>Name</label>
                    <input className={s.input}
                        id={uuid()}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInput}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                    <label className={s.label}>Phone</label>
                    <input className={s.input}
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleInput}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                    <button type= "submit" className={s.button}> Add contact </button>
                </div>
            </form>
        );
    }
}
 
export default Phonebook;

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}