<template>
  <div>
    <form action="" class="upload">
      <h1>Upload product</h1>


      <div class="input">
        <label for="title">Title</label>
        <input type="text" name="" id="title" v-model="productTitle">
      </div>

      <div class="input">
        <label for="price">Price</label>
        <input type="text" name="" id="price" v-model="productPrice">
      </div>

      <div class="input">
        <label for="description">description</label>
        <textarea name="" id="description" cols="30" rows="10" v-model="productDescription"></textarea>
      </div>

      <div class="input">
        <label for="image">Image (add url)</label>
        <input name="" id="image" v-model="productImage"/>
      </div>

      <button @click.prevent="uploadProduct">
        <span>Upload</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UploadProductForm',

  data(){
    return{
      productTitle: '',
      productPrice: '',
      productDescription: '',
      productImage: '',
    }
  },
  methods: {
    uploadProduct(){
      let userName   = this.$store.state.currentUser.name;
      const product = {
        userName: userName,
        title: this.productTitle,
        description: this.productDescription,
        price: this.productPrice,
        image: this.productImage,
        id: `${userName}_${new Date().getTime()}_${Math.floor(Math.random()*100)}`
      }

      this.$store.dispatch('uploadProduct', product)

    }
  }
}
</script>

<style scoped lang="scss">
.upload{
  width: 500px;
  margin: 0 auto;
  padding:40px 60px 60px 60px;
  border: 1px solid black;

  input, label, textarea{
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