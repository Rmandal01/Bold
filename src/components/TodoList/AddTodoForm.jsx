import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   placeholder-gray-400 dark:placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg
                   hover:bg-green-700 dark:hover:bg-green-600 transition-colors font-medium"
      >
        Add
      </button>
    </form>
  );
}
