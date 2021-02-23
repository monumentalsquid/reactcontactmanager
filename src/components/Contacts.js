import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state =  {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Jones',
                email: 'karen@gmail.com',
                phone: '333-555-5552'
            },
            {
                id: 3,
                name: 'Bill Burr',
                email: 'bill@gmail.com',
                phone: '222-555-5553'
            }
        ]
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => 
                    <Contact 
                        key={contact.id}
                        contact={contact}
                    />
                )}
            </React.Fragment>
        )
    }
}

export default Contacts;