<template>
    <div class="Home">
    <h1>Kick-Review</h1>
    This file will list all the posts.

    <div v-for="post in posts">
      <p>
        <router-link v-bind:to="{ name: 'Show', params: { id: post._id } }"><span><b>{{ post.title }}</b></span><br /></router-link>
        <span>{{ post.date }}</span> <br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      var response = await PostsService.fetchPosts()
      console.log(this.posts = response.data.posts)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
