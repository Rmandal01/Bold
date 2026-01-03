import { formatDate, addDays, getPreviousSunday } from './dateHelpers';

// Count completed todos for a specific date
export const getCompletionsForDate = (dateString, todos) => {
  return todos.filter(todo => {
    if (!todo.completed || !todo.completedAt) return false;
    const completedDate = formatDate(new Date(todo.completedAt));
    return completedDate === dateString;
  }).length;
};

// Calculate intensity level based on count
export const calculateLevel = (count) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
};

// Generate 52-week grid data structure (like GitHub)
export const generateGraphData = (todos) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // GitHub shows exactly 53 weeks (371 days) to ensure full year coverage
  // End on Saturday of current week
  const dayOfWeek = today.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  const endDate = addDays(today, daysUntilSaturday);

  // Start 52 weeks before the end date (52 * 7 = 364 days back)
  // Then go to the Sunday before that to align to week start
  const startDate = addDays(endDate, -(52 * 7));
  const startSunday = getPreviousSunday(startDate);

  const weeks = [];
  let currentDate = new Date(startSunday);

  // Generate exactly 53 weeks to show full year
  for (let weekNum = 0; weekNum < 53; weekNum++) {
    const weekDays = [];

    for (let dayNum = 0; dayNum < 7; dayNum++) {
      const dateString = formatDate(currentDate);
      const count = getCompletionsForDate(dateString, todos);
      const level = calculateLevel(count);

      weekDays.push({
        date: dateString,
        count,
        level
      });

      currentDate = addDays(currentDate, 1);
    }

    weeks.push(weekDays);
  }

  return weeks;
};

// Get month labels for the graph
export const getMonthLabels = (weeks) => {
  const labels = [];
  let lastMonth = null;

  weeks.forEach((week, index) => {
    const firstDay = new Date(week[0].date);
    const month = firstDay.getMonth();

    // Only add label if month changed and it's not the first week
    // (skip partial months at the start)
    if (month !== lastMonth && index > 0) {
      labels.push({
        index,
        month: firstDay.toLocaleDateString('en-US', { month: 'short' })
      });
      lastMonth = month;
    } else if (index === 0) {
      // Track the first month but don't display it
      lastMonth = month;
    }
  });

  return labels;
};
