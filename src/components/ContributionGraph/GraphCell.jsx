import { useState } from 'react';
import { CONTRIBUTION_COLORS } from '../../constants/colors';
import GraphTooltip from './GraphTooltip';

export default function GraphCell({ date, count, level }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2 - 70,
      y: rect.top
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const colorClass = CONTRIBUTION_COLORS[level]?.bg || 'bg-gray-100';

  return (
    <div className="relative">
      <div
        className={`w-[10px] h-[10px] rounded-sm ${colorClass}
                    border border-gray-200 cursor-pointer
                    hover:ring-1 hover:ring-gray-500 transition-all`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="gridcell"
        aria-label={`${count} tasks completed on ${date}`}
      />
      {showTooltip && (
        <GraphTooltip
          date={date}
          count={count}
          position={tooltipPosition}
        />
      )}
    </div>
  );
}
