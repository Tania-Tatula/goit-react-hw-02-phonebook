import React from "react";

const ContactList = ({contactList, onDeleteContact}) =>(

            <>
            <ul>
      {contactList.map(({name, number, id}) => <li>{name}: {number} <button onClick ={() => onDeleteContact(id)}>Delete</button></li>)}
      </ul>
</>

)

export default ContactList;