export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg mb-2
                    ${todo.completed
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : 'bg-white dark:bg-gray-800'}
                    border border-gray-200 dark:border-gray-600 shadow-sm transition-colors`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded cursor-pointer accent-green-600 dark:accent-green-500"
      />

      <span className={`flex-1 text-gray-900 dark:text-gray-100 ${
        todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
      }`}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300
                   text-sm px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
