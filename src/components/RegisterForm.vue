<template>
  <div>
    <form class="register" action="">
      <h1>Register</h1>

      <label for="name">Name</label>
      <input id="name" type="text" v-model="userName" :class="userName.length !== 0 ? userNameLength : ''">


      <label for="pass1">Password</label>
      <input id="pass1" type="password" v-model="password1" :class="password1.length !== 0 ? password1Length : ''">

      <label for="pass2">Repeat Password</label>
      <input id="pass2" type="password" v-model="password2" :class="password2.length !== 0 ? password2Length : ''">


      <button v-if="allowRegistration" @click.prevent="register">
        <span>Register</span>
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
  name: 'RegisterForm',
  data(){
    return{
      userName: '',
      password1: '',
      password2: '',
    }
  },
  methods: {
    register(){

        let data = {
          name: this.userName,
          password: this.password1
        }
        this.$store.dispatch('addNewUser', data)
        this.$router.push('/login')
    }
  },
  computed: {
    userNameLength(){
      if (this.userName.length >= 3 && this.userName.length <= 30){
        return 'good'
      }else{
        return 'bad'
      }
    },
    password1Length(){
      if (this.password1.length >= 5 && this.password1.length <= 20){
        return 'good'
      }else{
        return 'bad'
      }
    },
    password2Length(){
      if (this.password2.length >= 5 && this.password2.length <= 20){
        return 'good'
      }else{
        return 'bad'
      }
    },

    allowRegistration(){
      if (
          (this.userName.length >= 3 && this.userName.length <= 30) &&
          (this.password1.length >= 5 && this.password1.length <= 20) &&
          (this.password2.length >= 5 && this.password2.length <= 20) &&
          this.password1 === this.password2
      ){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .register{
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