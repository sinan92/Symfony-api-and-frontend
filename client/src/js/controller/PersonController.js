"use strict";

export default class PersonController {
    constructor(personModel, personView, personsView, exceptionView) {
        this.personModel = personModel;
        this.personView = personView;
        this.personsView = personsView;
        this.exceptionView = exceptionView;
    }

    findPersons() {
        let promise = this.personModel.findPersons();
        promise.then(persons => {
            let data = {};
            data.persons = persons;
            this.personsView.show(data);
        }).catch(exception => {
            let data = {exception:exception};
            this.exceptionView.show(data);
        });
    }


    addPersonByIdAndName(id, name) {
        let promise = this.personModel.addPersonByIdAndName(id, name);
        promise.then(person => {
            let data = {person:person};
            this.personView.show(data);
        }).catch(exception => {
            let data = {exception:exception};
            this.exceptionView.show(data);
        });
    }
}
