console.log(timeAdder({}, [], false, "minutes"));
console.log(timeAdder(false, [], false, 123));
console.log(timeAdder("minutes", 10, "seconds", 2));
console.log(timeAdder(1, "minute", 2, "minutes"));
console.log(timeAdder(10, "minute", 2, "minutes"));
console.log(timeAdder(1, "day", 2, "minutes"));
console.log(timeAdder(1, "hour", 2, "seconds"));


function numberOfElement(element) {
    if (element === 1) return 'Singular';
    else if (element > 1) return 'Plural'
    switch (element) {
        case "second":
            return 'Singular';
        case "minute":
            return 'Singular';
        case "hour":
            return 'Singular';
        case "day":
            return 'Singular';
        default:
            return 'Plural';
    }
}

function timeAdder(value1, label1, value2, label2) {

    let answer = [];
    if (typeof (value1) === "number" && typeof (value2) === "number" && typeof (label1) === "string" && typeof (label2) === "string") {
        if (numberOfElement(value1) === numberOfElement(label1) && numberOfElement(value2) === numberOfElement(label2)) {
            switch (label1) {
                case 'day':
                case 'days':
                    if (label2 === 'day' || label2 === 'days') {
                        answer.push(value1 + value2);
                        answer.push('days');
                    }
                    else if (label2 === 'hour' || label2 === 'hours') {
                        answer.push(value1 * 24 + value2);
                        answer.push('hours');
                    }
                    else if (label2 === 'minute' || label2 === 'minutes') {
                        answer.push(value1 * 24 * 60 + value2);
                        answer.push("minutes");
                    }
                    else {
                        answer.push(value1 * 24 * 60 * 60 + value2);
                        answer.push("seconds");
                    }
                    break;
                case 'hour':
                case 'hours':
                    if (label2 === 'hour' || label2 === 'hours') {
                        answer.push(value1 + value2);
                        answer.push('hours');
                    }
                    else if (label2 === 'minute' || label2 === 'minutes') {
                        answer.push(value1 * 60 + value2);
                        answer.push("minutes");
                    }
                    else {
                        answer.push(value1 * 60 * 60 + value2);
                        answer.push("seconds");
                    }
                    break;
                case 'minute':
                case 'minutes':
                    if (label2 === 'minute' || label2 === 'minutes') {
                        answer.push(value1 + value2);
                        answer.push('minutes');
                    }
                    else {
                        answer.push(value1 * 60 + value2);
                        answer.push("seconds");
                    }
                    break;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
    return answer;
}
