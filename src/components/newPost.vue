<template>
  <div class="newPost">
    <h1>Add Post</h1>
    <div class = "row">
      <form class="addPost">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="date" placeholder="DATE" v-model="date">
        </div>
        <div>
          <input type="text" name="picture" placeholder="PICTURE" v-model="picture">
        </div>
        <div>
          <textarea class="materialize-textarea" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="waves-effect waves-light btn-small"><a href="/" @click="addPost">Add</a></button>
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
      picture:'',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        date: this.date,
        picture: this.picture,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>

<style scoped>
a{
  color: white;
}

.btn-small{
  background-color: #C62D28;
}
.addPost{
  margin: 0px 40px;
}

textarea{
  height: 100px;
}
</style>