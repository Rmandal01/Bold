import { formatDate, addDays, getPreviousSunday } from './dateHelpers';

// Count completed todos for a specific date
export const getCompletionsForDate = (dateString, todos) => {
  return todos.filter(todo => {
    if (!todo.completed || !todo.completedAt) return false;
    // Parse the ISO string and format in local timezone
    const completedDate = new Date(todo.completedAt);
    const localDate = formatDate(completedDate);
    return localDate === dateString;
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

// Generate year grid data structure (like GitHub)
export const generateGraphData = (todos, year = null) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get current year or use provided year
  const currentYear = year || today.getFullYear();

  // Start from January 1 of current year
  const yearStart = new Date(currentYear, 0, 1);
  yearStart.setHours(0, 0, 0, 0);

  // Find the Sunday before or on January 1
  const startDay = yearStart.getDay();
  const startDate = addDays(yearStart, -startDay);

  // End at December 31 of current year
  const yearEnd = new Date(currentYear, 11, 31);
  yearEnd.setHours(0, 0, 0, 0);

  // Find the Saturday after or on December 31
  const endDay = yearEnd.getDay();
  const daysToSaturday = endDay === 6 ? 0 : 6 - endDay;
  const endDate = addDays(yearEnd, daysToSaturday);

  const weeks = [];
  let currentDate = new Date(startDate);

  // Generate weeks until we reach the end date
  while (currentDate <= endDate) {
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

// Get month labels for the graph (GitHub style)
export const getMonthLabels = (weeks, year = null) => {
  const labels = [];
  const addedMonths = new Set();
  const targetYear = year || new Date().getFullYear();

  weeks.forEach((week, weekIndex) => {
    // Skip the very first week to avoid partial month label
    if (weekIndex === 0) {
      const firstDay = new Date(week[0].date);
      const monthKey = `${firstDay.getFullYear()}-${firstDay.getMonth()}`;
      addedMonths.add(monthKey);
      return;
    }

    // Check all days in the week to find new months
    week.forEach((day) => {
      const dayDate = new Date(day.date);
      const monthKey = `${dayDate.getFullYear()}-${dayDate.getMonth()}`;

      // Only add label if this is a new month we haven't seen AND it's in the target year
      if (!addedMonths.has(monthKey) && dayDate.getFullYear() === targetYear) {
        const monthName = dayDate.toLocaleDateString('en-US', { month: 'short' });
        labels.push({
          index: weekIndex,
          month: monthName
        });
        addedMonths.add(monthKey);
      }
    });
  });

  return labels;
};
