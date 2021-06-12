import React from "react";

const ContactList = ({contactList}) =>(

            <>
            <ul>
      {contactList.map(contant => <li>{contant.name}: {contant.number}</li>)}
      </ul>
</>

)

export default ContactList;