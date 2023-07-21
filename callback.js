

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

function createPost(post, callback){

    setTimeout(() => {
        posts.push(post);

        // after pushing post to server call the callback function
        callback();
    }, 3000);

}

// getPosts();

// using the callback function passing without parantheses
createPost({title:'Arjun', body : 'Software Developer'}, getPosts);


















