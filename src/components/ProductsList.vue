<template>
  <div>
    <h1 class="title">Products</h1>
    <section class="products">
      <ProductCard  v-for="(product) in allProducts" :key="product.id" :product="product"/>
    </section>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'ProductsList',
  components: { ProductCard },
  computed: {
    allProducts(){
      return this.$store.state.products;
    }
  }
}
</script>

<style scoped>
.title{
  margin-bottom: 24px;
  padding: 22px 60px;
}
  .products{
    display: flex;
    flex-wrap: wrap;
  }
</style>