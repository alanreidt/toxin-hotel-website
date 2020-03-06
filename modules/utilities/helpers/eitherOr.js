import { either } from '..';

/**
 * Wrapper on either utility function.
 */
const eitherOr = function eitherOrFromHelpers(fallback) {
  return (origin) => either(origin, fallback);
};

export default eitherOr;
