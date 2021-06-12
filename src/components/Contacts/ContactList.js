import React from "react";

import styles from "./Contacts.module.css";

const ContactList = ({ contactList, onDeleteContact }) => (
  <>
    <ul className={styles.contactsBlock}>
      {contactList.map(({ name, number, id }) => (
        <li className={styles.contactItem}>
          {name}: {number}{" "}
          <button
            onClick={() => onDeleteContact(id)}
            className={styles.buttonDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default ContactList;
