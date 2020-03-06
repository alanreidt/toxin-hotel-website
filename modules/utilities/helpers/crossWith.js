import { cross } from '..';

/**
 * Wrapper on cross utility function.
 */
const crossWith = function crossWithFromHelpers(baseArray) {
  return (crossingArray) => cross(baseArray, crossingArray);
};

export default crossWith;
