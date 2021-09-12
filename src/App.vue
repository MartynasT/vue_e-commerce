<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: { Navigation },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}


svg{
  stroke: black;
}

button{
  background: none;
  border-radius: 0;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;

  border: 1px solid black;

  span{
    font-weight: 500;
  }

  span + svg{
    margin-left: 16px;
  }

  &:hover{
    background-color: black;
    color: #fff;
    svg{
      stroke: #fff;
    }
  }

  &.danger{
    &:hover{
      background-color: #C60A2CFF;
    }
  }

  &.confirm{
    &:hover{
      background-color: #19A33A;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #000000;
}


label{
  display: block;
  width: 100%;
  max-width: 300px;
  margin-bottom: 8px;
}

input, textarea{
  display: block;
  width: 100%;
  max-width: 300px;
  margin-bottom: 16px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 0;
  font-size: 16px;
  outline: none;
}


</style>
