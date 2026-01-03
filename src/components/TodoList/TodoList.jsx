import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export default function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <AddTodoForm onAdd={onAdd} />

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
          Active Tasks ({activeTodos.length})
        </h3>
        {activeTodos.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-500 text-center py-4">No active tasks. Add one above!</p>
        ) : (
          activeTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </div>

      {completedTodos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
            Completed ({completedTodos.length})
          </h3>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
