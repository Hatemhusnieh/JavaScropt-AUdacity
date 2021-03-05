/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
let facebookProfile ={
    name: "Hatem Ghazi",
    friends: 405,
    messages: ["Hi!!!","Hey! How r u!?","Fine thnx how r u 2?"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
       facebookProfile.messages.splice(index,1);
    },
    addFriend: function(){
       ++facebookProfile.friends;
    },
    removeFriend: function(){
        --facebookProfile.friends;
    }
};
facebookProfile.postMessage("how are ur mom bitch");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
