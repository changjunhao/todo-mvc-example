import { computed, ref, watch } from 'vue';

// localStorage persistence
const STORAGE_KEY = 'todos-vuejs-3.0';
const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach((todo, index) => {
      // eslint-disable-next-line no-param-reassign
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

// visibility filters
const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  completed(todos) {
    return todos.filter((todo) => todo.completed);
  },
};

export default function useTodos({ visibility }) {
  const todos = ref(todoStorage.fetch());

  const filteredTodos = computed(() => filters[visibility.value](todos.value));
  const remaining = computed(() => filters.active(todos.value).length);
  const allDone = computed({
    get: () => remaining.value === 0,
    set: (value) => {
      todos.value.forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        todo.completed = value;
      });
    },
  });
  const pushTodo = (value) => {
    todos.value.push({
      // eslint-disable-next-line no-plusplus
      id: todoStorage.uid++,
      title: value,
      completed: false,
    });
  };
  const removeTodo = (todo) => {
    todos.value.splice(todos.value.indexOf(todo), 1);
  };
  const removeCompleted = () => {
    todos.value = filters.active(todos.value);
  };

  watch(
    todos,
    (val) => {
      todoStorage.save(val);
    },
    { deep: true },
  );

  return {
    todos,
    filteredTodos,
    allDone,
    remaining,
    pushTodo,
    removeTodo,
    removeCompleted,
  };
}
