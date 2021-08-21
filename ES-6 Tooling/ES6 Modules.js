// Implementation details
const _radius = new WeakMap();

import {Circle} from './Modules.js'

// Public Interface
export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this))
    }
}

const c = new Circle(760);
c.draw();