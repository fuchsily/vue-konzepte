<template>
    <div>
      <h2>Willkommen zu Hause!</h2>
      <p>{{ message }}</p>

      <div>
        <h2>Hier sind einige Blogposts</h2>
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
        ></BlogPost>
      </div>
    </div>
  </template>
  
  <script>
  // Blogposts importieren
  import BlogPost from '@/components/blog/BlogComponent.vue';

  export default {
    components: {
      BlogPost
    },
    data() {
      return {
        message: "Hallo, Vue.js!",
        // Inahlt, der in Blogpost Layout gerendert wird
        posts: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
        ]
      };
    },
  };
  </script>
  