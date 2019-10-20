<template>
  <div class="home">
      ........................
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    alert(0)
  },
  mounted(){
    alert(1)
  }
}
</script>
