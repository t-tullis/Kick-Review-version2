<template>
  <div class="posts">
    <h1>Edit Post</h1>
      <div class = "row">
        <form class="editPost">
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
            <button class="waves-effect waves-light btn-small" @click="updatePost">Update</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data () {
    return {
      title: '',
      date: '',
      picture: '',
      description: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      var response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.date = response.data.date
      this.picture = response.data.picture
      this.description = response.data.description
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
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

.editPost{
  margin: 0px 40px;
}

.btn-small{
  background-color: #C62D28;
}

textarea{
  height: 100px
}

</style>