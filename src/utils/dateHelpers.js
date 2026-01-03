// Get date string in YYYY-MM-DD format
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Add days to a date
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Get the Sunday before or on a given date
export const getPreviousSunday = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 0 : day;
  return addDays(d, -diff);
};

// Get array of dates for last 52 weeks
export const getLast52Weeks = () => {
  const today = new Date();
  const endDate = today;
  const startDate = addDays(today, -364); // 52 weeks
  const startSunday = getPreviousSunday(startDate);

  return { startDate: startSunday, endDate };
};

// Check if two dates are the same day
export const isSameDay = (date1, date2) => {
  return formatDate(date1) === formatDate(date2);
};

// Get month name from date
export const getMonthName = (date) => {
  return date.toLocaleDateString('en-US', { month: 'short' });
};
