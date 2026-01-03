export default function GraphTooltip({ date, count, position }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const taskText = count === 1 ? 'task' : 'tasks';

  return (
    <div
      className="absolute z-10 bg-gray-900 dark:bg-gray-800 text-white text-xs
                 rounded px-2 py-1 whitespace-nowrap pointer-events-none
                 shadow-lg border border-gray-700 dark:border-gray-600"
      style={{
        left: `${position.x}px`,
        top: `${position.y - 40}px`
      }}
    >
      <div>{count} {taskText} on {formatDate(date)}</div>
    </div>
  );
}
