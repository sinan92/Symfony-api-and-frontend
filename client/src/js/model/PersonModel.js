"use strict";

export default class PersonModel {
    constructor(url) {
        this.url = url;
    }

    findPersons() {
        let promise = new Promise((resolve, reject) => {
            fetch(this.url, {method: "GET"})
                .then((response) => {
                    if (response.ok) {
                        resolve(response.json());
                    } else {
                        reject("rejected:" + response.status);
                    }
                }).catch(exception => {
                reject("exception: " + exception);
            });
        });
        return promise;
    }

    addPersonByIdAndName(id, name) {
        let promise = new Promise((resolve, reject) => {
            if (!(typeof id == 'string' && /^[0-9]+$/.test(id) && parseInt(id) > 0 )) {
                reject("id moet een string zijn met een getal > 0");
            }

            if (!(typeof name == 'string' && name.length >= 2 )) {
                reject("name moet een string met minstens 2 karakters zijn");
            }

            let person = {name: name};
            fetch(this.url + id, {method: "PUT", body: JSON.stringify(person)})
                .then((response) => {
                    if (response.ok) {
                        resolve(response.json());
                    } else {
                        reject("rejected:" + response.status);
                    }
                }).catch(exception => {
                reject("exception: " + exception);
            });
        });

        return promise;
    }
}

