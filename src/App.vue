<script setup>
import ItemList from './components/ItemList.vue'
import CreateItem from './components/CreateItem.vue'

</script>

<template>
  <h1>First App</h1>
  <CreateItem />
  <ItemList />
</template>

<style scoped>
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
</style>