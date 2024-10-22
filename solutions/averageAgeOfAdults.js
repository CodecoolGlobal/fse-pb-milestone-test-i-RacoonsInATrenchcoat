/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

function averageAgeOfAdults(users) {
  let sumAge = 0;
  let numOfAdults = 0;
  let averageAge = 0;

  for (let i = 0; i < users.length; i++) {

    if (users[i].age >= 18) { //if they are 18 or above
      sumAge += users[i].age; // add the ages together into one big array
      numOfAdults++; //count the number of adults
    } else if (numOfAdults.length === 0) { //if all underage, return Nan?
      return Nan
    } else { //they are under 18 and ignore

    }
  }
  averageAge = (sumAge / numOfAdults)
  //console.log("Average value: ", averageAge)
  return averageAge;

}

module.exports = averageAgeOfAdults;
