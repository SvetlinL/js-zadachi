function createCar(requirements) {
    const car = {
        model: requirements.model,
        engine: {},
        carriage: { type: requirements.carriage, color: requirements.color },
        wheels: []
    };

    if (requirements.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (requirements.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else {
        car.engine.power = 200;
        car.engine.volume = 3500;
    }

    let size = requirements.wheelsize;
    if (requirements.wheelsize % 2 == 0) {
        size = requirements.wheelsize - 1;
    }

    car.wheels = [size, size, size, size];

    return car;

}


createCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

createCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});