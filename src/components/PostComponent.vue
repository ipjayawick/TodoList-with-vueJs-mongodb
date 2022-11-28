<template>
  <div>
    <nav class="navbar navbar-dark bg-dark text-center py-2">
      <div class="container-fluid">
        <span class="navbar-brand ms-4">
          <h3 class="mb-0">Todo App</h3>
        </span>
      </div>
    </nav>
    <div class="background"></div>

    <div class="app d-flex justify-content-around py-5">
      <div class="card bg-light card-fluid p-4 lead">
        <div class="title text-center">
          <h3>Todo List</h3>
        </div>
        <div class="card-body my-3">
              <form>
            <div class="input-group input-group-lg mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your todo"
                id="input-text"
                name="todo_item"
                v-model="text"
              />
              <button v-on:click="createPost" class="btn btn-secondary" type="submit" id="add-button">
                Add
              </button>
            </div>
              </form>
   
          <ul class="list-group list-group-flush py-3" id="todo-list">
            <div v-for="post in posts" v-bind:item="post" v-bind:key="post">
              <li class="list-group-item py-0">
                <div class="d-flex my-0 py-0 align-items-center">
                  <p class="lead m-0">{{post.item}}</p>
                    <button v-on:click="deletePost(post.item)" class="btn ms-auto del-btn btn-lg" type="submit">
                      <fa icon="trash"/>
                    </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import PostService from "../PostService";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    this.posts=await PostService.getPosts()
  },

  methods:{
    async createPost(){
      await PostService.createPost(this.text)
      this.posts=await PostService.getPosts()
      this.text=''
    },
    async deletePost(id){
      await PostService.deletePost(id)
      this.posts=await PostService.getPosts()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/styles.css";
</style>