const bcrypt = require('bcrypt');

// re write bcrypt function without using async await

function hashPassword(plaintext){
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(plaintext, salt);
    return hashedPassword;
}

let hashpwd = hashPassword("password123");

// lets now write the compare function

function comparePassword(plaintext, hashedPassword){
    const isMatch = bcrypt.compareSync(plaintext, hashedPassword);
    return isMatch;
}

let isCorrect = comparePassword("password123", hashpwd);
