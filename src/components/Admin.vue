<template>
  <div class="posts">
    <h1>Admin Dashboard</h1>
    <div class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'newPost' }" class="waves-effect waves-light btn-small">Add Post</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="600">Description</td>
          <td width="100">Date</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>{{ post.date }} </td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
            <a href="/" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
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
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
  }
}

</script>

<style scoped>
table{
  margin-top: 20px;
}

.btn-small{
  background-color: #C62D28;
}


</style>