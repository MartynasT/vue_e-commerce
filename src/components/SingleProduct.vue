<template>
  <div class="product-wrapper">
    <div class="single-product">
      <div class="title">
        <h1>{{product.title}}</h1>
        <p>Seller: {{product.userName}}</p>
      </div>

      <div class="product-info">

        <div v-if="userProduct" class="user-actions">
          <button @click="deleteProduct" class="danger">
            <span>Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>

          <button @click="editProduct">
            <span>Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </button>
        </div>

        <div class="product-image">
          <img :src="product.image" alt="">
        </div>

        <div class="product-information">
          <h2>{{product.title}}</h2>
          <p>{{product.description}}</p>

          <h4>Price: {{product.price}} $</h4>

          <div class="actions">
            <button @click="addToCart(product)">
              <span>Add to cart</span>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                <path d="M15 6h6m-3 -3v6" />
              </svg>
            </button>

            <button>
              <span>Add to wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>

    <div class="editModal" v-if="editModalStatus">
      <div>
        <div class="input">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="productTitle">
        </div>
        <div class="input">
          <label for="description">description</label>
          <textarea type="text" id="description" v-model="productDescription"> </textarea>
        </div>
        <div class="input">
          <label for="price">price</label>
          <input type="text" id="price" v-model="productPrice">
        </div>
        <div class="input">
          <label for="image">image</label>
          <input type="text" id="image" v-model="productImage">
        </div>
      </div>

      <div class="actions">
        <button class="confirm" @click="updateProduct(product.id)">
          <span>Update</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
        </button>

        <button class="danger" @click="editProduct  ">
          <span>Cancel</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  data(){
    return{
      editModalStatus: false,
      productTitle: '',
      productDescription:'',
      productPrice: '',
      productImage: ''
    }
  },
  computed:{
    product(){
      const productId = this.$route.params.id;
      const allProducts = this.$store.state.products
      let currentProduct = allProducts.find(product => product.id === productId)

      console.log(currentProduct)

      return currentProduct
    },

    userProduct(){
      const user = this.$store.state.currentUser.name;
      const productCreator = this.product.userName

      if (user === productCreator){
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    deleteProduct(){

      this.$store.dispatch('deleteProduct', this.product)
    },

    editProduct(){
      this.editModalStatus = !this.editModalStatus
    },

    updateProduct(id){
      let data = {
            title: this.productTitle ,
            description: this.productDescription,
            price: this.productPrice,
            image: this.productImage ,
            id: id
          }

      this.$store.dispatch('updateProduct', data)
    },
    addToCart(product){
      this.$store.dispatch('addToCart', product)
    },
  },
  mounted () {
    const productId = this.$route.params.id;
    const allProducts = this.$store.state.products
    let currentProduct = allProducts.find(product => product.id === productId)

    this.productTitle = currentProduct.title
    this.productDescription = currentProduct.description
    this.productPrice = currentProduct.price
    this.productImage = currentProduct.image
  }
}
</script>

<style scoped lang="scss">
  .product-wrapper{
    position: relative;
  }

  .single-product{
    border: 1px solid black;

    .title{
      padding: 24px 80px;
      border-bottom: 1px solid black;

      h1{
        margin-bottom: 24px;
      }
    }
  }

  .product-info{
    display: flex;
    position: relative;

    .product-image,
    .product-information{
      width: 50%;
      padding: 80px;
    }

    .product-image {
      border-right: 1px solid black;
      img{
        width: 50%;
        display: block;
        margin: 0 auto;
        border: 1px solid black;
      }
    }
    .actions{
      display: flex;
      justify-content: space-between;
      padding: 24px 0;

      button{
        z-index: 999;
      }
    }
  }

  .user-actions{
    display: flex;
    position: absolute;
    right: 60px;
    top: -1px;

  }

  .editModal{
    z-index: 999;
    width: 60%;
    position: fixed;
    background-color: #fff;
    border: 1px solid black;
    padding: 60px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>