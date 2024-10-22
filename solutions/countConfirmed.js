/*
Fill the function countConfirmed(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "username": "steve.simon",
  "email": "steve.simon12@gmail.com",
  "phone": "+44701231231",
  "isConfirmed": true
}
Count the users where the isConfirmed key's value is true and return the amount as a number.
If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1.
*/

function countConfirmed(users) {

  let amountOfConfirmedUsers = 0;
  for (let i = 0; i < users.length; i++)
    if (users[i].isConfirmed == true) {  //if the isConfirmed is true then return the amount (sum of users?)
      amountOfConfirmedUsers++
    }
  else { //just ignore
    
  }

if (amountOfConfirmedUsers == 1) { // "If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1."
  return 1;
} else {
  return amountOfConfirmedUsers;
}
}

module.exports = countConfirmed;

/*
const user1 = {
  id: 3242342,
  username: 'belakovacs12',
  email: 'bela@gmail.com',
  phone: '701231231',
  isConfirmed: true,
};
*/