<template>
    <div class="Show">
      <div class= 'title'>
      <div>
        <img class='mainpic' v-bind:src = 'picture'>
      </div>
        <h2>{{title}}</h2>
      </div>
      <div>
        <h5>{{date}}</h5>
      </div>
      <div class= 'description'>
        <p>{{description}}</p>
      </div>      
      <div>
        <img v-bind:src ='angle1'>
        <br />
        <img v-bind:src ='angle2'>
        <br />
        <img v-bind:src ='angle3'>
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

.mainpic{
  width: 1100px;
  height: 700px;
}

img{
  width: 800px;
  height: 500px;
  border-radius: 8px;
}

p{
  font-size: 17px;
}

</style>