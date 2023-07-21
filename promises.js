


const posts = [

    { title : "Post One", body : "This is post one"},
    { title : "Post Two", body : "This is post Two"}

];

function getPosts(){

    setTimeout(() => {
        let output = '';

        // getting the posts form the server
        posts.forEach((post, index) =>{

            output += `
                <li>${post.title} : ${post.body}</li> 
                
            `;

        });

        document.body.innerHTML = output;
        
    }, 3000);


}

function createPost(post){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);
    
            const error = false;
    
            if(!error){
                resolve();
            }
            else{
                reject('Error : Something went wrong!!');
            }

        }, 3000);


        
    });

}

// createPost({title:'Arjun', body:'Software Developer' })
// .then(getPosts)
// .catch(err => console.log(err));


// async /await

// async function init(){

//     await createPost({title:'Arjun', body:'Software Developer' });

//     getPosts();
// }
// init();



// Async /Await/Fetch

async function fetchUsers(){

    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await users.json();
    console.log(data);
}

fetchUsers(); 


// // promise all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Good Bye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values=>console.log(values));













