<template>
    <div class="Show">
      <div>
        {{title}}
      </div>
      <div>
        {{date}}
      </div>
      <div>
        {{description}}
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



</style>