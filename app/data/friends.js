// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
    name: "Joe",
    photo: "https://www.liveaction.org/news/wp-content/uploads/2013/09/000friends.jpg",
    scores: ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5' ],
},
{
    name: "Sam",
    photo: "https://www.lovedignity.com/wp-content/uploads/2016/07/friendship.jpg",
    scores: ['5', '4', '3', '2', '1', '5', '4', '3', '2', '1'],
},
{
    name: "Lucy",
    photo: "https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg",
    scores: [ '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;

// Determines the user 's most compatible friend



// Convert each user 's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user 's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


// Example:


//     User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5





// Remember to use the absolute value of the differences.Put another way: no negative solutions!Your app should calculate both 5 - 3 and 3 - 5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you 've found the current user'
// s most compatible friend, display the result as a modal pop - up.


// The modal should display both the name and picture of the closest match.
