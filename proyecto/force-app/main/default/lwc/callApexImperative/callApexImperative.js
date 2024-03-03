import { LightningElement, api, wire } from 'lwc';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';
export default class CallApexImperative extends LightningElement {
    @api minBirthDate;
    handleButtonClick() {
        getContactsBornAfter({ // LLama a la Clase Apex llamada ContactController
            birthDate: this.minBirthDate
        })
            .then(contacts => {
                // se ejecuta si devuelve codigo 200
            })
            .catch(error => {
                this.errors = reduceErrors(error);
                //Se ejecuta si devuelve codigo de error
            });
    }
}