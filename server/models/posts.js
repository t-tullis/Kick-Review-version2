var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  date: String,
  picture: String,
  angle1: String,
  angle2: String,
  angle3: String,
  description: String,
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;