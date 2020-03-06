import Model from './Model';
import ViewController from './ViewController';

/**
 * This class represents API for Counter.
 * All interactions with Counter must happen only through it.
 */
class Counter {
  constructor(anchorElement, options) {
    this._model = new Model(options);
    this._viewController = new ViewController(anchorElement, this._model);

    const viewControllerSetElementsBound = this._viewController.setElements.bind(
      this._viewController,
    );

    this._model.addSubscriber('update', viewControllerSetElementsBound);

    this.constructor._anchorElementsMap.set(anchorElement, this);
  }

  /**
   * Create Counter instance.
   *
   * @param {HTMLElement} anchorElement An element the Counter instance to be inserted in.
   * @param {Object} options Options for Counter instance.
   *
   * @returns {Counter} the Counter instance.
   */
  static create(anchorElement, options) {
    return new this(anchorElement, options);
  }

  /**
   * Returns Counter instance's current options copy. Non-primitive values are references.
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   *
   * @returns {Object} Current options of the Counter instance.
   */
  static getOptions(counterElement) {
    return this._anchorElementsMap.get(counterElement).getOptions();
  }

  /**
   * Set Counter instance's options.
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   * @param {Object} options Options to be set to the Counter instance.
   */
  static setOptions(counterElement, options) {
    this._anchorElementsMap.get(counterElement).setOptions(options);
  }

  /**
   * Set Counter instance's value of “values” option at index position.
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   * @param {number} index An index of “values” option's value to change.
   * @param {number} value A value to set.
   */
  static setValueAt(counterElement, index, value) {
    this._anchorElementsMap.get(counterElement).setValueAt(index, value);
  }

  /**
   * Subscribe to event, usage:
   *   menu.addSubscriber( "select", function(item) { ... } ),
   *   menu.addSubscriber( "select", obj.method(item) { ... }.bind(obj) )
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   * @param {string} eventName A name of an event to listen to.
   * @param {function} subscriber The subscriber to be triggered on the event.
   */
  static addSubscriber(counterElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(counterElement)
      .addSubscriber(eventName, subscriber);
  }

  /**
   * Cancel the subscription, usage:
   *   menu.removeSubscriber("select", subscriber)
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   * @param {string} eventName The name of the event to which subscriber listens to.
   * @param {function} subscriber The subscriber to be removed from the list.
   */
  static removeSubscriber(counterElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(counterElement)
      .removeSubscriber(eventName, subscriber);
  }

  /**
   * Generate an event with the given name and data, usage:
   *   this.triggerSubscribers("select", data1, data2);
   *
   * @param {HTMLElement} counterElement An element the Counter instance was inserted in.
   * @param {string} eventName The name of the event to trigger.
   * @param {any} arg1...args A data to be passed to subscribers.
   */
  static triggerSubscribers(counterElement, eventName, ...args) {
    this._anchorElementsMap
      .get(counterElement)
      .triggerSubscribers(eventName, ...args);
  }

  /**
   * Returns current options copy. Non-primitive values are references.
   *
   * @returns {Object} Current options.
   */
  getOptions() {
    return this._model.getOptions();
  }

  /**
   * Set options.
   *
   * @param {Object} options Options to be set.
   */
  setOptions(options) {
    this._model.setOptions(options);
  }

  /**
   * Set value of “values” option at index position.
   *
   * @param {number} index An index of “values” option's value to change.
   * @param {number} value A value to set.
   */
  setValueAt(index, value) {
    this._model.setValueAt(index, value);
  }

  /**
   * Subscribe to event, usage:
   *   menu.addSubscriber( "select", function(item) { ... } ),
   *   menu.addSubscriber( "select", obj.method(item) { ... }.bind(obj) )
   *
   * @param {string} eventName A name of an event to listen to.
   * @param {function} subscriber The subscriber to be triggered on the event.
   */
  addSubscriber(eventName, subscriber) {
    this._model.addSubscriber(eventName, subscriber);
  }

  /**
   * Cancel the subscription, usage:
   *   menu.removeSubscriber("select", subscriber)
   *
   * @param {string} eventName The name of the event to which subscriber listens to.
   * @param {function} subscriber The subscriber to be removed from the list.
   */
  removeSubscriber(eventName, subscriber) {
    this._model.removeSubscriber(eventName, subscriber);
  }

  /**
   * Generate an event with the given name and data, usage:
   *   this.triggerSubscribers("select", data1, data2);
   *
   * @param {string} eventName The name of the event to trigger.
   * @param {any} arg1...args A data to be passed to subscribers.
   */
  triggerSubscribers(eventName, ...args) {
    this._model.triggerSubscribers(eventName, ...args);
  }
}

Counter._anchorElementsMap = new WeakMap();

export default Counter;
