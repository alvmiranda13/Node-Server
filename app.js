const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
//it will look for the views folder
//tell express by using app.set('views','new-folder-name');


// creates an instance of an express app

//listen for requests
app.listen(3000);
/// does not need the localhost

//pages
// homepage
app.get('/', (req, res) =>{
    // does not need the header
   // res.send('<p>home page</p>'); 
    
    const blogs= [
        {title: 'this is one', snippet: 'nfjsnfjkdsnfaklnfjaklsdnfkdlasnkflkndjsklnf'},
        {title: 'this is two', snippet: 'nfjsnfjkdsnfaklnfjaklsdnfkdlasnkflkndjsklnf'},
        {title: 'this is three', snippet: 'nfjsnfjkdsnfaklnfjaklsdnfkdlasnkflkndjsklnf',},
    ];
    res.render('index', { title: 'home', blogs});

});

//about page
app.get('/about', (req, res) =>{
    // does not need the header
    //res.send('<p>about page</p>'); 
    res.render('about', {title: 'about'});
});


app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create a new blog'});
})


//404 page MUST Be on the bottom of the code. 
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})