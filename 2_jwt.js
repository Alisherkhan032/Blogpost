// npm i jsonwebtoken

const jwt = require('jsonwebtoken');

// 1. create a secret
const secret = `aVeryComplexSecret`;
// 2 create a payload
const payload = {
    id : 1234567890,
    email : 'ali@gmail.com'
};
// 3. create a token
const token = jwt.sign(payload,secret, {expiresIn: '5m'}); // expiresIn is optional
console.log(`token is ${token}`);

//4.verify the token
jwt.verify(token,secret,(err,decodedToken)=>{
    if(err){
        console.log('verification failed');
        console.log(`Error is ${err}`);
    }else{
        console.log('verification success');
        console.log(decodedToken); // backtick me likhenge to [object objrct] ayega kyunki decodedToken.id se id ayegi
    }
});

/**
 {
  id: 1234567890,
  email: 'ali@gmail.com',
  iat: 1723716085, //* issued at
  exp: 1723802485
}
 */