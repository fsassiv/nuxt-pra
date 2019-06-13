<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{LoadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">{{LoadedPost.updatedDate}}</div>
        <div class="post-detail">{{LoadedPost.author}}</div>
      </div>
      <p class="post-content">{{LoadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:feedback@my-awesome-domain.com"
        >feedback@my-awesome-domain.com</a>.
      </p>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ params }, callback) {
    await setTimeout(() => {
      callback(null, {
        LoadedPost: {
          id: "2",
          title: "Post " + params.id,
          previewText: "Post two text",
          author: "Sinner",
          updatedDate: new Date(),
          content: "Some dummy text...",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
