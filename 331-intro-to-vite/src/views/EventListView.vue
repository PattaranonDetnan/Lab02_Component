<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventCard2 from '@/components/EventCard2.vue';
import Event from '@/types/Event'
import {ref,onMounted} from 'vue'
import axios from 'axios'

const events = ref<Event[]>(null)

onMounted(()=>{
  axios
  .get('[https://my-json-server.typicode.com/PattaranonDetnan/MockServer/db]')
  .then((response)=>{
    console.log(response.data)
  })
  .catch((error)=>{
    console.error('There was an error!',error)
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event"/>  
      <EventCard2 v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: right;
}

</style>
