//
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan')

app = express()

//requiring post 
var Post = require("./models/posts")

//Connection to DB
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});
mongoose.connect('mongodb://localhost:27017/posts');

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json())
app.use(cors())


//Show all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title date description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})


// Creates new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var date = req.body.date;
  var description = req.body.description;
  var newPost = new Post({
    title: title,
    date: date,
    description: description
  })
// Saves new post to DB
  newPost.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})



app.listen(process.env.PORT || 8081)