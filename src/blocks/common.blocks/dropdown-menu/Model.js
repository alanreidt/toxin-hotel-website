import deepEqual from 'deep-equal';
import cloneDeep from 'lodash/cloneDeep';

import { ObserverMixin } from '../../../../modules/utilities';

class Model {
  constructor(optionsSet) {
    this._optionsSet = [{}];

    this.setOptionsSet(optionsSet);
  }

  getOptions() {
    return cloneDeep(this._optionsSet);
  }

  setOptionsSet(optionsSet) {
    if (deepEqual(this._optionsSet, optionsSet)) return;

    this._optionsSet = optionsSet;

    this.triggerSubscribers('update', this.getOptions());
  }

  setOptionsAt(index, options) {
    const currentOptions = this._optionsSet[index];

    Object.keys(options).forEach((key) => {
      currentOptions[key] = options[key];
    });

    this.triggerSubscribers('update', this.getOptions());
  }
}

Object.assign(Model.prototype, ObserverMixin);

export default Model;
