import React, { Component } from 'react'
import shortid from 'shortid';
import Pagination from './pagination/Pagination';


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const pagination = {


// }







class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  // handleChange = (e) => {
  //   // const key = e.target.name;
  //   const key = e.target.dataset.input;
  //   const value = e.target.value;
  //   this.setState({ [key]: value })

  // }
  // submitData = (e) => {
  //   e.preventDefault();
  //   const { name, number } = this.state
  //   this.setState((prevState) => ({ contacts: [...prevState.contacts, { name, number, id: shortid.generate() }], name: '', number: '' }));
  // }

  // filter = () => {
  //   const { contacts, filter } = this.state;
  //   return (filter) ? contacts.filter(contact => contact.name.toLowerCase().includes(filter) || contact.number.includes(filter)) : contacts
  // }

  // delete = (e) => {
  //   const id = e.target.id
  //   this.setState((prevState) => ({ contacts: [...prevState.contacts.filter(contact => contact.id !== id)] }))
  // }

  render() {
    const { name, number, contacts } = this.state
    return (
      <>
        <Pagination />
        {/* <form onSubmit={this.submitData}>
          <label>NAME:
          <input type="text" onChange={this.handleChange} name="name" data-input="name" value={name} />
          </label>
          <label>NUMBER:
          <input type="text" onChange={this.handleChange} name="number" data-input="number" value={number} />
          </label>
          <button type="submit"> Add new contact</button>
        </form>

        <label> FILTER:
          <input type="text" data-input="filter" onChange={this.handleChange} />
        </label>

        <ul>
          {this.filter().map(contact => {
            return <li key={contact.id}>
              <span>NAME: {contact.name}, </span>
              <span>NUMBER: {contact.number} </span>
              <button type="button" id={contact.id} onClick={this.delete}>DELETE</button>
            </li>
          })}
        </ul> */}








      </>



    );
  }
}

export default App;
