// heavy labor coding for firebase
// const artworks = document.querySelector('#artworks');
const form = document.querySelector('#add-comment-form');
const comments = document.querySelector('#user-comments');
// const tops = document.querySelector('#top-three-arts');


// function renderArt(element) {
//     let li = document.createElement('li');
//     let artist = document.createElement('span');
//     let classification = document.createElement('span');
//     let medium = document.createElement('span');
//     let name = document.createElement('span');
//     let year = document.createElement('span');
//     let index = document.createElement('span');

//     li.setAttribute('data-id', element.id);
//     artist.textContent = 'Artist: ' + element.data().artist;
//     classification.textContent = 'Classification: ' + element.data().classification;
//     medium.textContent = 'Medium: ' + element.data().medium;
//     name.textContent = element.data().index + '. ' + element.data().name;
//     year.textContent = 'Year: ' +  element.data().year;

//     li.appendChild(name);
//     li.appendChild(artist);
//     li.appendChild(classification);
//     li.appendChild(medium);
//     li.appendChild(year);

//     artworks.appendChild(li);
// }

function renderComment(element) {
    let li = document.createElement('li');
    let comment = document.createElement('span');
    let index = document.createElement('span');
    let nickname = document.createElement('span');
    let rating = document.createElement('span');
    //delete comment
    let cross = document.createElement('div');

    li.setAttribute('data-id', element.id);
    nickname.textContent = element.data().nickname;
    index.textContent = 'Painting No.' + element.data().index;
    rating.textContent = 'Rating: ' + element.data().rating;
    comment.textContent = '"' + element.data().comment + '"';
    //delete commet
    cross.textContent = 'x';

    li.appendChild(nickname);
    li.appendChild(index);
    li.appendChild(rating);
    li.appendChild(comment);
    li.appendChild(cross);

    comments.appendChild(li);

    

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('comments').doc(id).delete();
    } )
}

// getting artworks data
// db.collection('portfolio').orderBy('index').get().then((snapshot) => {
//     snapshot.docs.forEach(element => {
//         // console.log(element.data()) 
//         renderArt(element);
//     });
// })

// not working yet
// function renderTops(element){
//     let li = document.createElement('li');
//     let index = document.createElement('span');
//     let rating = document.createElement('span');

//     li.setAttribute('data-id', element[0]);
//     index.textContent = 'Index ' + element[0];
//     rating.textContent = 'Average rating: ' + element[1];

//     li.appendChild(index);
//     li.appendChild(rating);

//     tops.appendChild(li)

// }

// helper
var myMap = {};
function ratingCalc(ind, rat){
    if (myMap.hasOwnProperty(ind)) {
        // console.log(ind)
        // console.log(Number(rat))
        // console.log(Number(myMap[ind]))
        temp = (Number(rat) + Number(myMap[ind])) / 2
        // console.log("temp="+temp)
        // 
        str = temp.toString()
        // console.log(str)
        myMap[ind] = str 
        // console.log("yay!")
    }
    else
    myMap[ind] = rat
    console.log("Here is the object array of the calculated ranking data:")
    console.log(myMap)
    // console.log()
}

var ranking = {}
// getting top 3 comments data
db.collection('comments').orderBy('index').get().then((snapshot) => {
    snapshot.docs.forEach(element => {
        let arr = [element.data().index, element.data().rating];
        console.log(arr)
        //  console.log("art" + arr[0])
        ratingCalc("art"+ arr[0], arr[1])
        // renderTops(ranking)
        // renderTops(arr)
        // renderComment(element)
        // console.log(element.data()) return every trunk of information
        // console.log(element.data().index) --get index and rating alternatively
        // console.log(element.data().rating)
    });
})

// saving data
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    db.collection('comments').add({
        nickname: form.name.value,
        rating: form.rating.value,
        index: form.index.value,
        comment: form.comment.value
    });
    form.name.value = '';
    form.rating.value = '';
    form.index.value = '';
    form.comment.value = '';
    
});

// getting real-time data by listener
db.collection('comments').orderBy('index').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderComment(change.doc);
        } else if (change.type == 'removed'){
            let li = comments.querySelector('[data-id=' + change.doc.id + ']');
            comments.removeChild(li);
        }
        // console.log(change.doc.data())
    })
})




// This is my first javascript code practice

// console.log("Hello World");
// let name = 'Gabby'; //String literal
// console.log(name);

// data types //
// let lastName = null;
// let firstName = undefined; 

// create a conflict, const should be undefineable
// const interestRate = 0.3;
// interestRate = 1; //Number literal
// console.log(interestRate);

// let isApproved = true; //Boolean literal
// let name = 'Gabby';
// let age = 23;

// let person = {
// 	name: 'Gabby', 
// 	age: 23
// };

// change attributes //
// person.name = 'Elle'; //change attribute

// person['name'] = 'Mary';

// let selection = 'name';
// person[selection] = 'Grace';

// console.log(person);

// Arrays //
// let selectedColors = ['red','blue'];
// selectedColors[2] = 21;
// console.log(selectedColors.length);

// Functions //
// function greet(firstName,lastName) {
// 	console.log('Hello, ' + firstName + ' ' + lastName + '!');
// }

// greet('Gabby','Zhou');
// greet('Jin');


// function square (number) {
// 	return number * number;
// }

// console.log(square(2));