function createWorker(worker) {
    let hydration = worker.weight * worker.experience * 0.1;
    if (worker.dizziness === true) {
        worker.levelOfHydrated += hydration;
        worker.dizziness = false;
    }


    return worker;
}


createWorker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});

createWorker({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});

createWorker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});