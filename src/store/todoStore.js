import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref([])
  let nextId = 1

  // Getters
  const todoCount = computed(() => todos.value.length)
  const sortedByLength = computed(() => {
    return [...todos.value].sort((a, b) => b.text.length - a.text.length)
  })

  // Actions
  function addTodo(text) {
    todos.value.push({
      id: nextId++,
      text: text.trim()
    })
  }

  function removeTodo(id) {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  return {
    todos,
    todoCount,
    sortedByLength,
    addTodo,
    removeTodo
  }
})
