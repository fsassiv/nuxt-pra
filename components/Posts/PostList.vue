<template>
  <section class="featured-posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :is-admin="isAdmin"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
  </section>
</template>
<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    PostPreview
  }
};
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
