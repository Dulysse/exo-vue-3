<template>
  <div class="bg-white rounded-lg shadow-md p-4 flex gap-4 items-start">
    <img 
      :src="catImageUrl" 
      :alt="'Cat for ' + todo.text"
      class="w-24 h-24 object-cover rounded"
    />
    <div class="flex-1">
      <p class="text-lg">{{ todo.text }}</p>
      <p class="text-sm text-gray-500 mt-1">Length: {{ todo.text.length }} characters</p>
    </div>
    <button 
      @click="$emit('remove')"
      class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
    >
      Delete
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

defineEmits(['remove'])

// Generate a random cat image URL from TheCatAPI
const catImageUrl = `https://cataas.com/cat?${Math.random()}`
</script>
