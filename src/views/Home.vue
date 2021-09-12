<template>
  <div class="home">
    <ProductsList />
  </div>
</template>

<script>
// @ is an alias to /src

import ProductsList from '@/components/ProductsList'
export default {
  name: 'Home',
  components: {
    ProductsList,

  }
}
</script>
