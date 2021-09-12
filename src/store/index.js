import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registeredUsers: [],
    currentUser: {},
    products:[
      {
        userName:'Jurek' ,
        title:'Air shoes' ,
        description: 'I\'m baby heirloom butcher pug lumbersexual wolf yr vaporware mlkshk tote bag williamsburg pour-over hella. Microdosing austin occupy, authentic kickstarter poutine chia YOLO butcher.',
        price: 100,
        image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440103680_44'
      },
      {
        userName:'Ismaele' ,
        title:'Sunglasses Gentle Monster' ,
        description: 'Live-edge try-hard tbh fingerstache, direct trade selfies ethical celiac poutine mlkshk.',
        price: 50.99,
        image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440128797_88'
      },
      {
        userName:'Yaser' ,
        title:'Toy car' ,
        description: 'Bitters narwhal church-key pitchfork, echo park single-origin coffee kitsch asymmetrical health goth next level +1 fanny pack. Artisan seitan listicle shaman.',
        price: 20,
        image:'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440271505_31'
      },
      {
        userName:'Dylan' ,
        title:'Yellow Gameboy' ,
        description: 'Pabst quinoa mustache franzen viral air plant. Keytar direct trade vape, 3 wolf moon migas lo-fi la croix cronut slow-carb four loko. Butcher humblebrag locavore, crucifix readymade pinterest asymmetrical gochujang fashion axe poutine.',
        price: 999.99,
        image:'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440278418_93'
      },
      {
        userName:'Tytus' ,
        title:'Cocacola original' ,
        description: 'Kinfolk ugh copper mug unicorn palo santo, trust fund vaporware schlitz +1 cardigan tousled. Cardigan pok pok swag gastropub put a bird on it banjo.',
        price: 1.99,
        image:'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440291813_69'
      },
      {
        userName:'Klara' ,
        title:'Black iPhone' ,
        description: 'IPhone typewriter iceland tbh pitchfork helvetica. Umami street art iPhone, palo santo yuccie photo booth brooklyn you probably haven\'t heard of them tacos squid lumbersexual cliche keytar williamsburg shabby chic.',
        price: 600,
        image:'https://images.unsplash.com/photo-1506757144316-2ff47151133b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' ,
        id: '1631440297269_25'
      },
      {
        userName:'Parry' ,
        title:'Old school vinyl' ,
        description: 'Intelligentsia tilde hexagon umami, williamsburg ramps gochujang bitters activated charcoal selfies readymade.',
        price: 88.98,
        image:'https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80' ,
        id: '1631440302402_13'
      }
    ],
    cart: [],
    wishList: [],
    activeUser: false
  },
  mutations: {

    addNewUser(state, payload){
      state.registeredUsers = [...state.registeredUsers, payload]
    },

    loginUser(state, payload){
      state.currentUser = payload
      state.activeUser = true
    },

    logOut(state){
      state.currentUser = '';
      state.activeUser = false
      state.cart = []
      state.wishList = []
    },

    uploadProduct(state, payload) {

      state.products = [...state.products, payload]
    },

    deleteProduct(state, payload) {
      state.products = JSON.parse(JSON.stringify(payload));
    },

    addToCart(state, payload) {

      let i = state.cart.findIndex(item => (item.id === payload.id));
      if (i <= -1) {
        payload.amount = 1
        return state.cart = [...state.cart, payload]
      }
      else {

        // let arr = state.cart
        state.cart[i].amount++

      }
    },

    removeFromCart(state, payload){
      let i = state.cart.findIndex(item => (item.id === payload.id));
      if(state.cart[i].amount === 1){
        state.cart.splice(i, 1)
      }else{
        state.cart[i].amount --
      }
      const newArray = state.cart.map(obj => ({...obj}));

      return state.cart = newArray
    },

    addToWishlist(state, payload){

      let array = state.wishList

      let i = array.findIndex(item => (item.id === payload.id));
      if (i <= -1){
        return state.wishList = [...state.wishList, payload]
      } else{
        array.splice(i, 1)

        return state.wishList = JSON.parse(JSON.stringify(array));
      }
    },

    updateProduct(state, payload){
      const productsAll = payload
      state.products = productsAll;
    }

  },
  actions: {

    addNewUser({commit}, payload){
      commit('addNewUser', payload)
    },

    loginUser({state, commit}, payload){

      let isCorrectUser = false;
      state.registeredUsers.forEach(user => {
        if (user.name === payload.name && user.password === payload.password){
          isCorrectUser = true
        }
      })

      if (isCorrectUser){
        commit('loginUser', payload)
        router.push('/');
      }else{
        alert('nope')
      }

    },

    logOut({commit}){
      commit('logOut')
    },

    uploadProduct({commit}, payload){

      commit('uploadProduct', payload)
    },

    deleteProduct({commit, state}, payload){
      const products = [...state.products]
      let i = products.findIndex(product=> (product.id === payload.id))

      if (i !== -1) {
        products.splice(i, 1)

        commit('deleteProduct', products);
        router.push('/');
      }
    },

    updateProduct({commit, state}, payload){
      const products = JSON.parse(JSON.stringify(state.products));
      let i = products.findIndex(product=> (product.id === payload.id))

      console.log(i)

      if (i !== -1) {
        products[i].title = payload.title
        products[i].description = payload.description
        products[i].price = payload.price
        products[i].image = payload.image
      }

      commit('updateProduct', products)

    },

    addToCart({commit}, payload){
      const product = JSON.parse(JSON.stringify(payload));

      commit('addToCart', product)
    },

    removeFromCart({commit}, payload){
      const product = JSON.parse(JSON.stringify(payload));

      commit('removeFromCart', product)
    },

    addToWishlist({commit}, payload){
      const product = JSON.parse(JSON.stringify(payload));

      commit('addToWishlist', product)
    },
  },
  modules: {
  }
})
