import React from "react"

const ContactCard = ({contact}) => 
    <div className="contact-card">
        <img src={contact.imgUrl} alt={contact.name} />
        <h3>{contact.name}</h3>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
    </div>

export default ContactCard