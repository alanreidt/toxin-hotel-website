import { restrictNumberByNeighbors } from '..';

/**
 * A wrapper on restrictNumberByNeighbors utility function
 */
const restrictByNeighbors = function restrictByNeighborsFromHelpers(
  prevNeighbor,
  nextNeighbor,
) {
  return (number) =>
    restrictNumberByNeighbors(number, prevNeighbor, nextNeighbor);
};

export default restrictByNeighbors;
