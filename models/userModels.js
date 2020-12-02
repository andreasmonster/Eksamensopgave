const express = require('express');
const router = express.Router();


class User{

constructor(firstname, lastname, age, email, password, gender, interest,like,dislike){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.interest = interest;
    this.like = like;
    this.dislike = dislike;
    }
}



module.exports = User;
