import { useMemo } from 'react';
import { generateGraphData } from '../utils/contributionHelpers';

export const useContributions = (todos, year = null) => {
  // Memoize graph data to avoid recalculating on every render
  const graphData = useMemo(() => {
    return generateGraphData(todos, year);
  }, [todos, year]);

  return graphData;
};
