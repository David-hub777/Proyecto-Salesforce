import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
// @track da error si no añades import { track } from 'lwc';
   
         @track contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}