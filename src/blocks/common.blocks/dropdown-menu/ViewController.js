import Counter from '../counter/Counter'

class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this.setElements(this.model.getOptions());
    this._tieComponents();
  }

  setElements({ optionsSet }) {
    optionsSet.forEach((options, index) => {
      Counter.create(this.counters[index], options);
    });
  }

  _assignElements() {
    this.counters = this.anchorElement.querySelectorAll('.js-counter');
  }

  _tieComponents() {
    this.counters.forEach((counter, index) => {
      Counter.addSubscriber(counter, (options) => {
        this.model.setOptionsAt(index, options);
      })
    });
  }
}

export default ViewController;
