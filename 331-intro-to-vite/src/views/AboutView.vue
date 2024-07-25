<script setup lang="ts">
import StudentService from '@/services/StudentService';
import StudentCard from '../components/StudentCard.vue'
import Student from '@/types/Student'
import {ref,onMounted} from 'vue'


const students = ref<Student[]>(null)

onMounted(()=>{
  StudentService.getStudent()
  .then((response)=>{
    console.log(response.data)
    students.value = response.data

  })
  .catch((error)=>{
    console.error('There was an error!',error)
  })
 
})
</script>
<template>
  <div class="about">
    <h1>A site for events to better the world</h1>
    <StudentCard v-for="student in students" :key="student.id" :student ="student"/> 
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
