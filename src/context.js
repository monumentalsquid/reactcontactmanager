import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;