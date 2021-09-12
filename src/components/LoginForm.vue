<template>
  <div>
    <form action="" class="login">
      <h1>Login</h1>


      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">

      <label for="pass">Password</label>
      <input type="password" id="pass" v-model="password">

      <button @click.prevent="login">
        <span>Login</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data(){
    return{
      name: '',
      password: ''
    }
  },
  methods: {
    login(){

      let data = {
        name: this.name,
        password: this.password
      }

      this.$store.dispatch('loginUser', data)
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  width: 500px;
  margin: 0 auto;
  padding:40px 60px 60px 60px;
  border: 1px solid black;

  input, label{
    width: 100%;
    max-width: 500px;
  }

  input{
    &.good{
      border-color: #19A33A;
    }
    &.bad{
      border-color: #C60A2CFF;
    }
  }

  h1{
    margin-bottom: 16px;

  }
}
</style>