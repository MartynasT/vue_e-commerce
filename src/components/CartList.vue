<template>
  <section  >
    <h1 class="title-cart">Cart</h1>

    <div v-if="productsInCart.length !== 0">

      <div>
        <div class="product" v-for="(product, index) in productsInCart" :key="index">
          <img :src="product.image" :alt='product.title'>
          <div class="info">
            <div class="title">
              <h3>{{product.title}}</h3>
              <p><span class="qty">QTY: {{product.amount}}</span></p>
            </div>

            <h3 class="price">{{product.price}} $ </h3>

            <div class="actions">
              <button class="danger" @click="removeFromCart(product)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                </svg>
              </button>

              <button class="confirm" @click="addToCart(product)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="total">
        <h2><span>Total:</span> {{total}}</h2>
      </div>
    </div>
    <div v-else class="empty-cart">
      <h3 >Your cart is empty</h3>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-sad" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
        <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
      </svg>
    </div>
  </section>



</template>

<script>
export default {
  name: 'CartList',
  computed: {
    productsInCart(){
      return this.$store.state.cart
    },
    total(){
      const products = this.$store.state.cart;

      let total = 0;

      products.forEach(product =>{
        let qty = Number(product.amount)
        total +=qty* Number(product.price)
      })

      return total;
    }
  },
  methods:{
    addToCart(product){
      this.$store.dispatch('addToCart', product)
    },
    removeFromCart(product){
      this.$store.dispatch('removeFromCart', product)
    },
  }
}
</script>

<style scoped lang="scss">

  h1.title-cart{
    padding:40px 60px;
  }

  .product{
    display: flex;
    padding: 32px 160px;
    border: 1px solid black;

    align-items: center;

    img{
      display: block;
      width: 100px;
      border: 1px solid black ;
      margin-right: 40px;
    }

    .info{
      display: flex;
      align-items: center;
      width: 80%;
      justify-content: space-between;

      .title{
        font-size: 24px;
        max-width: 50%;
        width: 50%;
        text-align: left;
      }

      .price{
        width: 20%;
        padding-left: 40px;


      }
    }
  }

  .qty{
    font-size: 14px;
    color: #585858FF;
  }

  .total{
    padding: 40px;

    h2{
      span{
        color: #ed672c;
      }
    }
  }

  .actions{
    display: flex;
  }

  .empty-cart{
    text-align: center;
    h3{
      margin-bottom: 24px;
    }
    svg{
      stroke: #ed672c;
    }
  }

</style>