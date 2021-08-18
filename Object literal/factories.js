const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        consnole.log('draw');
    }
};
const circle2 = {
    radius: 2,
    location: {
        x: 2,
        y: 2
    },
    draw: function() {
        consnole.log('draw');
    }
};

// In both the objects draw method is common to both of them 
// Due to presence of the same code fragments code become heavier
// Therefore instead of deffining the same function for two times what we can do is just declare the function at the top and then to call seperately in both the Objects.
// This method is called the factory method. This also makes the code lighter elegant and easier

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

let circle3 = createCircle(1);
console.log(circle3.draw());