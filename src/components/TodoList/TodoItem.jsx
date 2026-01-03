export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg mb-2
                    ${todo.completed ? 'bg-gray-100' : 'bg-white'}
                    border border-gray-200 shadow-sm`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded cursor-pointer accent-green-600"
      />

      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded hover:bg-red-50 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
