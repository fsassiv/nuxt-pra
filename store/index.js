import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "Post one",
                previewText: "Post one text",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
              },
              {
                id: "2",
                title: "Post two",
                previewText: "Post two text",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
              }
            ]);
            resolve();
          }, 1000);
          // reject(new Error())
        }).then(data => {});
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
