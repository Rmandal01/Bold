# Consistency Tracker

A GitHub-style contribution graph todo list application that helps you track your daily task completion and visualize your productivity consistency over time.

## Features

- **GitHub-Style Contribution Graph**: Visual representation of your task completion over the last 52 weeks
- **Todo List Management**: Add, complete, and delete tasks
- **Persistent Storage**: All data is saved in your browser's localStorage
- **Color-Coded Activity**: 5 intensity levels based on daily task completion
  - Gray: 0 tasks
  - Light Green: 1-2 tasks
  - Medium Green: 3-4 tasks
  - Dark Green: 5-6 tasks
  - Darkest Green: 7+ tasks
- **Interactive Tooltips**: Hover over any day to see the exact count

## Tech Stack

- **React** with Vite
- **Tailwind CSS** for styling
- **localStorage** for data persistence

## Getting Started

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## How to Use

1. **Add Tasks**: Type a task description in the input field and click "Add"
2. **Complete Tasks**: Check the checkbox next to a task to mark it as complete
3. **Delete Tasks**: Click the "Delete" button to remove a task
4. **View Consistency**: The contribution graph shows your completion activity over the past year

## Data Storage

All tasks are stored in your browser's localStorage under the key `github-todo-todos`. Your data persists across browser sessions but is limited to the current browser/device.

## Project Structure

```
src/
├── components/
│   ├── App.jsx                    # Main application
│   ├── Header.jsx                 # App header
│   ├── TodoList/
│   │   ├── TodoList.jsx          # Todo list container
│   │   ├── TodoItem.jsx          # Individual todo item
│   │   └── AddTodoForm.jsx       # Form to add todos
│   └── ContributionGraph/
│       ├── ContributionGraph.jsx # Main graph component
│       ├── GraphCell.jsx         # Individual grid cell
│       └── GraphTooltip.jsx      # Hover tooltip
├── hooks/
│   ├── useLocalStorage.js        # localStorage hook
│   ├── useTodos.js               # Todo management hook
│   └── useContributions.js       # Graph data hook
├── utils/
│   ├── dateHelpers.js            # Date utilities
│   ├── contributionHelpers.js    # Graph calculation
│   └── storageHelpers.js         # localStorage utilities
└── constants/
    └── colors.js                 # Color scheme
```

## Future Enhancements

- Streak tracking (current and longest)
- Task categories/tags
- Export/import data
- Statistics panel
- Dark mode
- Custom color themes
