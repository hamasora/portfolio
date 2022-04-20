<template>
  <div>
    <Top />
    <Profile />
    <Service />
    <Skills />
    <Works />
    <Blog />
    <Contact />
  </div>
</template>

<script>
  import Top from '../components/Top.vue'
  import Profile from '../components/Profile.vue'
  import Service from '../components/Service.vue'
  import Skills from '../components/Skills.vue'
  import Works from '../components/Works.vue'
  import Blog from '../components/Blog.vue'
  import Contact from '../components/Contact.vue'

  export default {
    name: 'Home',

    components: {
      Top,
      Profile,
      Service,
      Skills,
      Works,
      Blog,
      Contact,
    },
  }
</script>
