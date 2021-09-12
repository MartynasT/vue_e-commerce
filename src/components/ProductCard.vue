<template>
  <div class="product" >
    <div class="product-info" @click="seeProduct(product.id)">
      <img :src="product.image" alt="">
      <h2>{{product.title}}</h2>
      <p>{{product.price}} $</p>
    </div>

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

      <button @click="addToWishlist(product)">

        <svg :class="[wishList.includes(product.id) ? 'active': '']"  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart(product){
      this.$store.dispatch('addToCart', product)
    },
    addToWishlist(product){
      this.$store.dispatch('addToWishlist', product)
    },
    seeProduct(id){
      this.$router.push(`/product/${id}`)
    }
  },
  computed:{
    wishList(){
      const wishListItems = [...this.$store.state.wishList];

      let wishListIds = wishListItems.map(item=>{
        return item.id
      })

      return wishListIds
    }
  }
}
</script>

<style scoped lang="scss">

.product{

  border: 1px solid black;
  width: 33.33%;

  .product-info{
    padding: 60px 60px 20px;
    //border-bottom: 1px solid black;
    cursor: pointer;

    h2{
      text-align: center;
      margin-bottom: 12px;
    }
    p{
      text-align: center;
    }
  }
  
  img{
    width: 100%;
    display: block;
    margin-bottom: 24px;
  }

  .actions{
    display: flex;
    justify-content: space-between;
    padding:60px ;

    button{
      z-index: 999;
    }
  }
}

svg.active{
  fill: #CE0038FF;
  stroke:#CE0038FF;
}
</style>