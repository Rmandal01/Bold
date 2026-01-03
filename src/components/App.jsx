import { useTodos } from '../hooks/useTodos';
import { useDarkMode } from '../hooks/useDarkMode';
import Header from './Header';
import ContributionGraph from './ContributionGraph/ContributionGraph';
import TodoList from './TodoList/TodoList';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <ContributionGraph todos={todos} />
        <TodoList
          todos={todos}
          onAdd={addTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
