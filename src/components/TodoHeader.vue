<template>
  <header class="bg-blue-600 text-white p-4 shadow-md mb-6">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-2">Todo List</h1>
      <div class="flex items-center gap-4">
        <p class="text-sm">Total items: {{ itemCount }}</p>
        <button 
          @click="toggleSort" 
          class="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm"
        >
          {{ isSortedByLength ? 'Sort: Length' : 'Sort: Default' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true
  },
  isSortedByLength: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-sort'])

const itemCount = computed(() => props.todos.length)

const toggleSort = () => {
  emit('toggle-sort')
}
</script>
