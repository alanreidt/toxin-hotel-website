import Model from './Model';
import ViewController from './ViewController';

/**
 * This class represents API for DropdownMenu.
 * All interactions with DropdownMenu must happen only through it.
 */
class DropdownMenu {
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
   * Create DropdownMenu instance.
   *
   * @param {HTMLElement} anchorElement An element the DropdownMenu instance to be inserted in.
   * @param {Object} options Options for DropdownMenu instance.
   *
   * @returns {DropdownMenu} the DropdownMenu instance.
   */
  static create(anchorElement, options) {
    return new this(anchorElement, options);
  }

  /**
   * Returns DropdownMenu instance's current options copy. Non-primitive values are references.
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   *
   * @returns {Object} Current options of the DropdownMenu instance.
   */
  static getOptions(dropdownMenuElement) {
    return this._anchorElementsMap.get(dropdownMenuElement).getOptions();
  }

  /**
   * Set DropdownMenu instance's options.
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   * @param {Object} options Options to be set to the DropdownMenu instance.
   */
  static setOptions(dropdownMenuElement, options) {
    this._anchorElementsMap.get(dropdownMenuElement).setOptions(options);
  }

  /**
   * Set DropdownMenu instance's value of “values” option at index position.
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   * @param {number} index An index of “values” option's value to change.
   * @param {number} value A value to set.
   */
  static setValueAt(dropdownMenuElement, index, value) {
    this._anchorElementsMap.get(dropdownMenuElement).setValueAt(index, value);
  }

  /**
   * Subscribe to event, usage:
   *   menu.addSubscriber( "select", function(item) { ... } ),
   *   menu.addSubscriber( "select", obj.method(item) { ... }.bind(obj) )
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   * @param {string} eventName A name of an event to listen to.
   * @param {function} subscriber The subscriber to be triggered on the event.
   */
  static addSubscriber(dropdownMenuElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(dropdownMenuElement)
      .addSubscriber(eventName, subscriber);
  }

  /**
   * Cancel the subscription, usage:
   *   menu.removeSubscriber("select", subscriber)
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   * @param {string} eventName The name of the event to which subscriber listens to.
   * @param {function} subscriber The subscriber to be removed from the list.
   */
  static removeSubscriber(dropdownMenuElement, eventName, subscriber) {
    this._anchorElementsMap
      .get(dropdownMenuElement)
      .removeSubscriber(eventName, subscriber);
  }

  /**
   * Generate an event with the given name and data, usage:
   *   this.triggerSubscribers("select", data1, data2);
   *
   * @param {HTMLElement} dropdownMenuElement An element the DropdownMenu instance was inserted in.
   * @param {string} eventName The name of the event to trigger.
   * @param {any} arg1...args A data to be passed to subscribers.
   */
  static triggerSubscribers(dropdownMenuElement, eventName, ...args) {
    this._anchorElementsMap
      .get(dropdownMenuElement)
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

DropdownMenu._anchorElementsMap = new WeakMap();

export default DropdownMenu;
