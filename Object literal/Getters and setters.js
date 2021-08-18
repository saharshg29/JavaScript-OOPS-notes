function Circle() {
    this.draw = function() {
        console.log('draw')
    };

    Object.defineProperty(this, 'defaultLocation', {
        // Getter method
        get: function() {
            return defaultLocation;
        },

        // Setter method
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid Location.');

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw()