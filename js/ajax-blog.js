"use strict"
const blogPosts = document.querySelector('#posts')
$.ajax('data/blog.json').done((response)=>{
    console.log(`getting blog posts`);
    console.log(response);
    renderBlogPosts(response);
})

function renderBlogPosts(posts){
    console.log('rendering blog posts...')
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i].categories);
        blogPosts.innerHTML += (`
        <div class="card product-card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${posts[i].title}</h5>
                    <p class="card-text">${posts[i].content}</p>
                    <p class="card-text"><p>Categories: ${posts[i].categories.join(', ')}</p><p>Date Posted: ${posts[i].date}</p></p>
                   
                    </div>
                </div>
        `)
    }
}