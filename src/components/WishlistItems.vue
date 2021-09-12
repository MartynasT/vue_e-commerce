<template>
  <div>
    <h1 class="title">Wishlist</h1>
    <section class="products">
      <ProductCard  v-for="(product) in wishList" :key="product.id" :product="product"/>
    </section>
  </div>
</template>

<script>

import ProductCard from '@/components/ProductCard'
export default {
  name: 'WishlistItems',
  components: { ProductCard },
  computed:{
    wishList () {
      return this.$store.state.wishList
    }
  }
}
</script>

<style scoped>

.products{
  display: flex;
}

.title{
  padding: 40px 60px;
}

</style>