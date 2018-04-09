<template>
  <div class="posts">
    <h1>Add Post</h1>
    <div class = "row">
      <form class="col s5">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="date" placeholder="DATE" v-model="date">
        </div>
        <div>
          <textarea class="materialize-textarea" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="waves-effect waves-light btn-small" @click="addPost">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      date:'',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        date: this.date,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>