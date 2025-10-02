# exo-vue-3
Technical test for Vue 3

A minimal Vue 3 todo list application with Pinia state management and Tailwind CSS styling.

## Features

- ✅ Vue 3 with Composition API (using `ref()` and `reactive()`)
- ✅ Pinia for state management
- ✅ Tailwind CSS for styling
- ✅ Todo list with add/delete functionality
- ✅ Header component with computed property showing item count
- ✅ Sort todos by phrase length
- ✅ Random cat images for each todo item

## Project Structure

```
├── pages/               # Page components
│   └── index.vue       # Main todo list page
├── src/
│   ├── components/     # Reusable components
│   │   ├── TodoHeader.vue
│   │   └── TodoItem.vue
│   ├── store/          # Pinia stores
│   │   └── todoStore.js
│   ├── App.vue         # Root component
│   ├── main.js         # Application entry point
│   └── style.css       # Global styles with Tailwind
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Build

Build for production:

```bash
npm run build
```

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend build tool
- **Pinia**: State management library for Vue
- **Tailwind CSS v4**: Utility-first CSS framework
- **Cat API**: Random cat images from cataas.com

## Implementation Details

### Vue 3 Composition API
The todo list uses Vue 3's Composition API with:
- `ref()` for simple reactive values (newTodoText, isSortedByLength)
- `reactive()` for the todos array
- `computed()` for the sorted todos list

### State Management
While the main component uses local state with `ref()`/`reactive()`, a Pinia store (`todoStore.js`) is also available in the `src/store/` folder for centralized state management if needed.

### Sorting Feature
The header component displays:
- Total number of todo items (using `computed()`)
- Toggle button to sort todos by phrase length (longest to shortest)

### Cat Images
Each todo item displays a random cat image from the Cat as a Service API (cataas.com) that is generated when the component loads.

