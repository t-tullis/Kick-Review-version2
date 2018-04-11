<template>
    <div class="Home">

      <div v-for="post in posts">
        <div class='post'>
          <router-link v-bind:to="{ name: 'Show', params: { id: post._id } }">
            <h5>{{ post.title }}</h5>
          </router-link>
            <p>{{ post.date }}</p>
      </div>
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
  color: black;
}

a :hover{
  color: #C62D28;
}

.Home{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px 200px;
}

.post{
  margin-top: 60px;
}

</style>
