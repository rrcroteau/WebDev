"use strict";

//since this involves data and the possibility of protecting data we are creating a symbol object with a calculated name based on the key: "members"
const members = Symbol("members");

//class object to hold and manage tasks
const memberList = {

    //array of tasks - symbol with a key of "[tasks]"
    [members]: [],

    //load method that uses the storage library's retrieve method to load the array and return the object instance (itself)
    load() {
        this[members] = storage.retrieve();
        return this; //return reference to member list object, so we can chain methods
    },

    //save method that that stores the member list into a JSON file using the storage library's store method and returns the object instace
    save() {
        storage.store(this[members]);
        return this; //return reference to member list object, so we can chain methods
    },

    //sort method that puts tasks in order based on the last names. Returns the object instance.
    sort() {
        this[members].sort((member1, member2) => {

            if (member1.LastName[0] < member2.LastName[0]) {
                return -1;
            }

            else if (member1.LastName[0] > member2.LastName[0]) {
                return 1;

            }

            else {
                return 0;
            }

        });

        return this; //return reference to member list object, so we can chain methods
    },

    //add method to push a new task into the array
    add(member) {
        this[members].push(member);
        return this; //return reference to member list object, so we can chain methods
    },

    //delete method to remove a specified item # from the list
    delete(i) {
        this.sort();
        this[members].splice(i, 1); //i is start point and deletes 1 item (i.e. deletes i)
        return this; //return reference to member list object, so we can chain methods
    },

    //method to clear all items from the JSON file
    clear() {
        storage.clear();
        return this; //return reference to member list object, so we can chain methods
    },

    /* an iterator method that doesn't use a generator function
       
    [Symbol.iterator]() {
        return { //define the iterator object

            tasks: this[tasks],
            index: 0,
            next() {
                if (this.index == this.index.length) {
                    return {done : true};
                }
                else {
                    let value = this.tasks[this.index];
                    this.index++;
                    return {value, done: false};
                }
            }

        };

    },  */

    //iterator function with a generator function ('*'): Allows us to iterate or move through the array
    *[Symbol.iterator]() {
        for (let member of this[members]) {
            yield member;
        }
    }

}
