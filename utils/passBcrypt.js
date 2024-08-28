// npm install bcrypt
const bcrypt = require('bcrypt');

// 1. Create a hashPassword function that takes a password and returns a hashed password
    async function hashPassword(plaintext){
        const salt =await bcrypt.genSalt(10); // returns a promise
        // console.log("salt: ", salt);
        const hashedPassword  = await bcrypt.hash(plaintext, salt); // returns a promise
        // console.log("hashedPassword is ", hashedPassword);
        return hashedPassword;
        

        //* or just write it in one line
        //* return bcrypt.hash(plaintext, salt); in place of line 8 and 10

    }
    let hashpwd;
    hashPassword('password123') // hashpwd is a promise
    .then((data) => {
        hashpwd = data;
        console.log("hashpwd is ", data);
        console.log("hashpwd type is",typeof data);
    }).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("hashpwd type ", typeof(hashpwd));
// 1.1 Use bcrypt.genSalt(10) to generate a salt // returns a promise
// 1.2 Use bcrypt.hash(password, salt) to generate a hashed password // returns a promise
// 1.3 Return the hashed password

// 2. Create a comparePassword function that takes a plain password and a hashed password and returns a boolean

    async function comparePassword(plainPassword, hashedPassword){
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword); // returns a promise
        console.log("isMatch is ", isMatch);
        // return isMatch;
    }
    // comparePassword('password123', hashpwd);
    comparePassword('password123', '$2b$10$7TGrhVeG43ENGOZVERByw.aZ2yco6yu5AewKdLjWLzptrmsOm8sx6');
// 2.1 Use bcrypt.compare() to compare the plain password with the hashed password // returns a promise
// 2.2 Return the boolean result

// Add metrics to print the time taken to hash the password and compare the password






































































/*

async function hashPassword(password) {
    const startTime = new Date().getTime();
    const salt = await bcrypt.genSalt(10);
    console.log("salt: ", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    const endTime = new Date().getTime();
    console.log("Time taken to hash the password in seconds: ", (endTime - startTime) / 1000);
    return hashedPassword;
}

async function comparePassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

hashPassword('password123')
    .then((hashedPassword) => {
        console.log("hashedPassword: ", hashedPassword);
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

const hashedPassword = '$2b$10$meYINbPUjbmD/yVDTvfptepeZHa/GrIE9jXnFjuGVkXaMcbJ/rppO'
comparePassword('password123', hashedPassword)
    .then((isMatch) => {
        console.log("isMatch: ", isMatch);
    })
    .catch((err) => {
        console.log("Error: ", err);
    });












const passBcrypt = {
    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    },
    comparePassword: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    }
}

module.exports = passBcrypt;
*/
