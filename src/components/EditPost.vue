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
            <input type="text" name="angle1" placeholder="ANGLE1" v-model="angle1">
          </div>
          <div>
            <input type="text" name="angle2" placeholder="ANGLE2" v-model="angle2">
          </div>
          <div>
            <input type="text" name="angle3" placeholder="ANGLE3" v-model="angle3">
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
      angle1: '',
      angle2: '',
      angle3: '',
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
      this.angle1 = response.data.angle1
      this.angle2 = response.data.angle2
      this.angle3 = response.data.angle3
      this.description = response.data.description
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        date: this.date,
        picture: this.picture,
        angle1: this.angle1,
        angle2: this.angle2,
        angle3: this.angle3,
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