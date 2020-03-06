import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import filter from 'lodash/fp/filter';
import identity from 'lodash/fp/identity';
import cloneDeep from 'lodash/cloneDeep';
import deepEqual from 'deep-equal';

import {
  eitherOr,
  placeBetween,
  crossWith,
} from '../../../../modules/utilities/helpers';

import { ObserverMixin } from '../../../../modules/utilities';

class Model {
  constructor(options = {}) {
    this._options = {
      boundaries: [0, 5],
      value: 0,
    };

    this.setOptions(options);
  }

  getOptions() {
    return cloneDeep(this._options);
  }

  setOptions(options) {
    if (deepEqual(this._options, options)) return;

    Object.keys(this._options).forEach((key) => {
      const keyFirstLetter = key[0];
      const isKeyPrivate = keyFirstLetter === '_';

      if (isKeyPrivate) return;

      const capitalizedKey = keyFirstLetter.toUpperCase() + key.slice(1);
      const keySetterName = `_set${capitalizedKey}`;
      const value = options[key];

      this[keySetterName](value);
    });

    this.triggerSubscribers('update', this.getOptions());

    return this;
  }

  _setBoundaries(values) {
    const currentValue = this._options.boundaries;
    const newValues = [].concat(values);

    const validate = flow(
      sortBy(identity),
      map(parseFloat),
      filter(Number.isFinite),
      crossWith(currentValue),
    );

    this._options.boundaries = validate(newValues);
  }

  _setValue(value) {
    const [min, max] = this._options.boundaries;
    const currentValue = this._options.value;

    const validate = flow(
      parseFloat,
      eitherOr(currentValue),
      placeBetween(min, max),
    );

    this._options.value = validate(value);
  }
}

Object.assign(Model.prototype, ObserverMixin);

export default Model;
