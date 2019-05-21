var numSteps = 20.0;

var boxElement;
var prevRatio = 0.0;
var increasingColor = "rgba(00, 00, 00, ratio)";
var decreasingColor = "rgba(ff, ff, ff, ratio)";

// Set things up.

window.addEventListener("load", function (event) {
    boxElement = document.querySelector(".section-1");

    createObserver();
}, false);

function createObserver() {
    var observer;

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
    });
}

//Section 2

window.addEventListener("load", function (event) {
    boxElement = document.querySelector(".section-2");

    createObserver();
}, false);

function createObserver() {
    var observer;

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
    });
}

//Section 3

window.addEventListener("load", function (event) {
    boxElement = document.querySelector(".section-3");

    createObserver();
}, false);

function createObserver() {
    var observer;

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
    });
}

//Section 4

window.addEventListener("load", function (event) {
    boxElement = document.querySelector(".section-4");

    createObserver();
}, false);

function createObserver() {
    var observer;

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
    });
}

//Section 5

window.addEventListener("load", function (event) {
    boxElement = document.querySelector(".section-5");

    createObserver();
}, false);

function createObserver() {
    var observer;

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1.0; i <= numSteps; i++) {
        var ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        } else {
            entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
    });
}