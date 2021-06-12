import { Component } from "react";
import shortid from 'shortid';


class ContactForm extends Component{
    state = {
        contacts: [],
        name: '',
        number: ''
      };

      addList = (name, number) =>{

      const contact = {
        id: shortid.generate(),
        name,
        number,
   }

   this.setState(prevState =>({
    contacts: [contact, ...prevState.contacts]
   }))
}

      loginInputId = shortid.generate();


      handleInputChange = evt =>{
   
    
        const {name, value} = evt.currentTarget;
      this.setState({
                   id: shortid.generate(),
                   [name]: value});
      }
      
      handleSubmit = evt =>{
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      }

      reset =() =>{
          this.setState({name: '',
          number: ''});
      };

      render(){
          return(
          <>
          <form onSubmit={this.handleSubmit}>
        <label   id={this.loginInputId}>
            Name
<input
  type="text"
  name="name"
  value={this.state.name}
  onChange ={this.handleInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/>
</label>
<label   id={this.loginInputId}>
    Number
<input
  type="tel"
  name="number"
  value={this.state.number}
  onChange ={this.handleInputChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
/>
</label>

<button type="submit">Add conract</button>
</form>
          </>
          );
      }

}
export default ContactForm;