import { useContributions } from '../../hooks/useContributions';
import { getMonthLabels } from '../../utils/contributionHelpers';
import GraphCell from './GraphCell';

export default function ContributionGraph({ todos }) {
  const weeks = useContributions(todos);
  const monthLabels = getMonthLabels(weeks);

  const dayLabels = ['Mon', 'Wed', 'Fri'];
  const dayIndices = [1, 3, 5];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Your Consistency</h2>
        <p className="text-sm text-gray-600">Track your daily task completion over the last year</p>
      </div>

      <div className="overflow-x-auto pb-2">
        {/* Month labels */}
        <div className="relative ml-10 mb-2 h-4">
          {monthLabels.map((label) => {
            const cellWidth = 10;
            const gapWidth = 2;
            const weekWidth = cellWidth + gapWidth;
            const position = label.index * weekWidth;
            return (
              <div
                key={`${label.month}-${label.index}`}
                className="absolute text-[11px] text-gray-600"
                style={{
                  left: `${position}px`
                }}
              >
                {label.month}
              </div>
            );
          })}
        </div>

        {/* Graph grid */}
        <div className="flex gap-2">
          {/* Day labels */}
          <div className="flex flex-col gap-[2px] justify-start mr-0.5">
            {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
              <div key={dayIndex} className="h-[10px] flex items-center justify-end">
                {dayIndices.includes(dayIndex) && (
                  <span className="text-[9px] text-gray-500 w-6">
                    {dayLabels[dayIndices.indexOf(dayIndex)]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Week columns */}
          <div className="flex gap-[2px]">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px]">
                {week.map((day) => (
                  <GraphCell
                    key={day.date}
                    date={day.date}
                    count={day.count}
                    level={day.level}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-3 text-[11px] text-gray-600">
          <span>Less</span>
          <div className="flex gap-[2px]">
            <div className="w-[10px] h-[10px] rounded-sm bg-gray-100 border border-gray-200"></div>
            <div className="w-[10px] h-[10px] rounded-sm bg-green-200 border border-gray-200"></div>
            <div className="w-[10px] h-[10px] rounded-sm bg-green-400 border border-gray-200"></div>
            <div className="w-[10px] h-[10px] rounded-sm bg-green-600 border border-gray-200"></div>
            <div className="w-[10px] h-[10px] rounded-sm bg-green-800 border border-gray-200"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
