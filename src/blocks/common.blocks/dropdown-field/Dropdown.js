import Model from './Model';
import ViewController from './ViewController';

/**
 * This class represents API for Dropdown.
 * All interactions with Dropdown must happen only through it.
 */
class Dropdown {
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
   * Create Dropdown instance.
   *
   * @param {HTMLElement} anchorElement An element the Dropdown instance to be inserted in.
   * @param {Object} options Options for Dropdown instance.
   *
   * @returns {Dropdown} the Dropdown instance.
   */
  static create(anchorElement, options) {
    return new this(anchorElement, options);
  }

  /**
   * Returns Dropdown instance's current options copy. Non-primitive values are references.
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   *
   * @returns {Object} Current options of the Dropdown instance.
   */
  static getOptions(dropdownElement) {
    return this._anchorElementsMap.get(dropdownElement).getOptions();
  }

  /**
   * Set Dropdown instance's options.
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   * @param {Object} options Options to be set to the Dropdown instance.
   */
  static setOptions(dropdownElement, options) {
    this._anchorElementsMap.get(dropdownElement).setOptions(options);
  }

  /**
   * Set Dropdown instance's value of “values” option at index position.
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   * @param {number} index An index of “values” option's value to change.
   * @param {number} value A value to set.
   */
  static setValueAt(dropdownElement, index, value) {
    this._anchorElementsMap.get(dropdownElement).setValueAt(index, value);
  }

  /**
   * Subscribe to event, usage:
   *   menu.addSubscriber( "select", function(item) { ... } ),
   *   menu.addSubscriber( "select", obj.method(item) { ... }.bind(obj) )
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   * @param {string} eventName A name of an event to listen to.
   * @param {function} subscriber The subscriber to be triggered on the event.
   */
  static addSubscriber(dropdownElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(dropdownElement)
      .addSubscriber(eventName, subscriber);
  }

  /**
   * Cancel the subscription, usage:
   *   menu.removeSubscriber("select", subscriber)
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   * @param {string} eventName The name of the event to which subscriber listens to.
   * @param {function} subscriber The subscriber to be removed from the list.
   */
  static removeSubscriber(dropdownElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(dropdownElement)
      .removeSubscriber(eventName, subscriber);
  }

  /**
   * Generate an event with the given name and data, usage:
   *   this.triggerSubscribers("select", data1, data2);
   *
   * @param {HTMLElement} dropdownElement An element the Dropdown instance was inserted in.
   * @param {string} eventName The name of the event to trigger.
   * @param {any} arg1...args A data to be passed to subscribers.
   */
  static triggerSubscribers(dropdownElement, eventName, ...args) {
    this._anchorElementsMap
      .get(dropdownElement)
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

Dropdown._anchorElementsMap = new WeakMap();

export default Dropdown;
