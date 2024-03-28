// Assignment-7: Password Checker

class User {
    #username;
    #password;

    constructor(user) {
        this.#username = user;
        console.log("User Name: ", this.#username);
    }

    set setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this.#password = newPassword;
            console.log("Password set successfully");
        } else {
            console.log("Password: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter");
        }
    }

    get getPassword() {
        if (this.#password === undefined) {
            console.log("Password not set!!!");
        } else {
            console.log("Password: ", '*'.repeat(this.#password.length));
        }
    }

    isValidPassword(password){
        return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
    }

}
const user2 = new User("niraj");
user2.setPassword = "nitukumari";
user2.getPassword;

const user1 = new User("niraj");
user1.setPassword = "Nirajkumar333";
user1.getPassword;

/**
 * :::OUTPUT-1:::
 * User Name:  niraj
 * Password set successfully
 * Password:  ************
 * 
 * :::OUTPUT-2:::
 * User Name:  niraj
 * Password: Error: Password must be at least 8 characters long and contain at least 
 * one number and one uppercase letter
 * Password not set!!!
 */

