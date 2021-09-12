<template>
  <nav class="navigation">
    <div class="logo">
      <div class="logo-main">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="7 10 12 4 17 10" />
          <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
          <circle cx="12" cy="15" r="2" />
        </svg>
        <h3>Random stuff shop</h3>
      </div>
    </div>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="!isUserLogIn" to="/register">Register</router-link>
      <router-link v-if="!isUserLogIn" to="/login">Login</router-link>
      <router-link v-if="isUserLogIn" to="/upload">Upload product</router-link>
      <router-link  to="/wishlist">WishList</router-link>
      <router-link  to="/cart">Cart</router-link>
      <button v-if="isUserLogIn" @click="logout">Log out</button>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    logout(){
      this.$store.dispatch('logOut')
    }
  },
  computed: {
    isUserLogIn(){
      return this.$store.state.activeUser
    }
  }
}
</script>

<style scoped lang="scss">
.navigation{
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 32px;

  .logo,
  .nav{
    width: 50%;
  }

  .logo{
    background-color: #ed672c;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-main{
    display: flex;
    align-items: center;
    svg{
      margin-right: 16px;
    }
    h3{
      color: black;
    }
  }
}


#nav {
  padding: 16px;
  display: flex;

a {
  color: #2c3e50;
  margin: 4px;
  padding: 0 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

&.router-link-exact-active {
   color: #ed672c;
 }
}
}
</style>