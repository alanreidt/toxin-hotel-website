import Counter from '../counter/Counter'

class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this._createComponents(this.model.getOptions());
    this._handleCounterUpdate();
    this._synchronizeModels();
  }

  setElements() {}

  _assignElements() {
    this.counters = this.anchorElement.querySelectorAll('.js-counter');
  }

  _createComponents(optionsSet) {
    optionsSet.forEach((options, index) => {
      Counter.create(this.counters[index], options);
    });
  }

  _handleCounterUpdate() {
    this.counters.forEach((counter, index) => {
      Counter.addSubscriber(counter, 'update', (options) => {
        this.model.setOptionsAt(index, options);
      })
    });
  }

  _synchronizeModels() {
    this.counters.forEach((counter) => {
      Counter.triggerSubscribers(counter, 'update', Counter.getOptions(counter));
    });
  }
}

export default ViewController;
