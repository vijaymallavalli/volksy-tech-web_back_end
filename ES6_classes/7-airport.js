export default class Airport {
  constructor(name, code) {
    // Create objs
    this._name = name;
    this._code = code;
  }

  // Methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // Setters

  // Getters
}
