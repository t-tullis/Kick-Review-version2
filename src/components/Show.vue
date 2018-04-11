<template>
    <div class="Show">
      <div class= 'title'>
        <h1>{{title}}</h1>
      </div>
      <div>
        <h5>{{date}}</h5>
      </div>
      <div class= 'description'>
        <p>{{description}}</p>
      </div>      
  </div>
</template>



<script>

import PostsService from '@/services/PostsService'
export default {
  name: 'Show',
  data () {
    return {
      title: '',
      date: '',
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
      this.description = response.data.description
    },
  }
}

</script>

<style scoped>
.Show{
  margin-top: 5%;
}  

.description{
  margin: 0px 300px;
}

</style>