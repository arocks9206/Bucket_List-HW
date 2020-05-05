<template lang="html">
  <div id="favourite_countries">
    <h2>Bucket List</h2>
    <ul>
      <li v-for="country in bucketList">{{country.name}} <img class="small-flag" :src="country.flag"/> <button v-on:click="updateList">Visit!</button></li>
    </ul>
  </div>
</template>

<script>
import BucketService from '@/services/BucketService';
import {eventBus} from '@/main.js';

export default {
  name: 'bucket-list',
  props: ['bucketList'],
  methods: {
    updateList(){
      const updatedCountry = {
        name: country.name,
        flag: country.flag,
        visited: true
      }
      BucketService.updateCountry(country._id, updatedCountry)
      .then(country => eventBus.$emit('country-updated', country))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
