<template>
   <div id="exchangario">
    <!-- NAVBAR -->
  
    <!-- NAVBAR END -->

    <!-- HERO START -->
    <HeroPage  :onSearch="filterExchanges" />
    <!-- HERO END -->

    <!-- POST LIST START -->
    <ExchangeList
    :exchanges="exchanges"/>
    <!-- POST LIST END -->
    
    <!-- PAGINATION START -->
    <PaginationPage/>
    <!-- PAGINATION END -->
    <FooterComponentVue/>
  </div>
  </template>
  .
  <script>

import HeroPage from "../components/HeroPage.vue";
import ExchangeList from "../components/ExchangeList.vue";
import PaginationPage from "../components/PaginationPage.vue";

import FooterComponentVue from '../components/FooterComponent.vue';

  export default {
   
    components: {
        HeroPage,ExchangeList,PaginationPage,FooterComponentVue
  }, 
  methods: {
    filterExchanges(searchValue) {
      console.log(searchValue);
    },

  },
  
  computed: {
    exchanges() {
      return this.$store.state.exchange.items;
    }
  },
  created() {
    this.$store.dispatch("exchange/getExchanges");
  }
    
  }
  </script>
  <style scoped>
  .counter-container {
    padding: 200px;
    font-size: 60px;
  }
 </style>