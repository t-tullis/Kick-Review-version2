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

//Middleware
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json())
app.use(cors())

//Blog Post API 
app.get('/', (req, res) => {
  res.send('Kick-Review API')

})

// Creates new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var date = req.body.date;
  var picture = req.body.picture;
  var angle1 = req.body.angle1;
  var angle2 = req.body.angle2;
  var angle3 = req.body.angle3;
  var description = req.body.description;
  var newPost = new Post({
    title: title,
    date: date,
    picture: picture,
    angle1 : angle1,
    angle2 : angle2,
    angle3 : angle3,
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

// Show all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title date picture angle1 angle2 angle3 description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Get a single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title date picture angle1 angle2 angle3 description', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title date picture angle1 angle2 angle3 description', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.date = req.body.date
    post.picture = req.body.picture
    post.angle1 = req.body.angle1
    post.angle2 = req.body.angle2
    post.angle3 = req.body.angle3
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// D - Delete Post

// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})



app.listen(process.env.PORT || 8081)