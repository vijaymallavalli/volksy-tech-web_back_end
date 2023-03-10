export default function car() {
constructor (brand,motor,color) {
	this._brand = brand;
	this._motor = motor;
	this._color = color;

// Methods
  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }
}
}

