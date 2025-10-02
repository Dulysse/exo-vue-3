<template>
  <div class="min-h-screen bg-gray-100">
    <TodoHeader 
      :todos="sortedTodos" 
      :isSortedByLength="isSortedByLength"
      @toggle-sort="toggleSortByLength"
    />
    
    <div class="container mx-auto px-4">
      <!-- Add Todo Form -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Add New Todo</h2>
        <div class="flex gap-2">
          <input 
            v-model="newTodoText"
            @keyup.enter="addTodo"
            type="text" 
            placeholder="Enter a todo item..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button 
            @click="addTodo"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
          >
            Add
          </button>
        </div>
      </div>

      <!-- Todo List -->
      <div class="space-y-4">
        <TodoItem 
          v-for="todo in sortedTodos" 
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo(todo.id)"
        />
        
        <p v-if="sortedTodos.length === 0" class="text-center text-gray-500 py-8">
          No todos yet. Add one above!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import TodoHeader from '../src/components/TodoHeader.vue'
import TodoItem from '../src/components/TodoItem.vue'

// State using ref() and reactive()
const newTodoText = ref('')
const isSortedByLength = ref(false)
const todos = reactive([])
let nextId = 1

// Computed property to sort todos
const sortedTodos = computed(() => {
  if (isSortedByLength.value) {
    return [...todos].sort((a, b) => b.text.length - a.text.length)
  }
  return todos
})

// Methods
const addTodo = () => {
  if (newTodoText.value.trim()) {
    todos.push({
      id: nextId++,
      text: newTodoText.value.trim()
    })
    newTodoText.value = ''
  }
}

const removeTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id)
  if (index > -1) {
    todos.splice(index, 1)
  }
}

const toggleSortByLength = () => {
  isSortedByLength.value = !isSortedByLength.value
}

// Initialize with some sample todos on component mount
onMounted(() => {
  todos.push(
    { id: nextId++, text: 'Learn Vue 3 Composition API' },
    { id: nextId++, text: 'Setup Pinia store' },
    { id: nextId++, text: 'Install and configure Tailwind CSS for styling' },
    { id: nextId++, text: 'Build a todo list app' }
  )
})
</script>
