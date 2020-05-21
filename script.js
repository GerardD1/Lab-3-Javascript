const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];

function addSubmission(array, newName, newScore, newDate){
    let newObject = {name: newName, score: newScore, date: newDate};
    if (newScore >= 60){
        newObject.passed = true;
    } else {
        newObject.passed = false;
    }
    array.push(newObject);
}
addSubmission(submissions, "Gerard", 100, "1988-01-30")
console.log(submissions)

function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 1)
console.log(submissions)

function deleteSubmissionByName(array, name){
    let nameIndex = array.findIndex((item) => item.name === name);
    array.splice(nameIndex, 1);
}
deleteSubmissionByName(submissions, "Jane")
console.log(submissions)

function editSubmission(array, index, score){
    array[index].score = score;
    array[index].passed = score >= 60;
}
editSubmission(submissions, 2, 35)
console.log(submissions)

function findSubmissionByName(array, name){
    let person = array.find((people) => people.name === name);
    return person;
}
findSubmissionByName(submissions, "Gerard")
console.log(findSubmissionByName(submissions, "Gerard"))

function findLowestScore(array){
    let lowestScore = array[0];
    array.forEach((item) => {
        if (item.score < lowestScore.score) {
            lowestScore = item;
        }
    });
    return lowestScore;
}
console.log(findLowestScore(submissions))

function findAverageScore(array){
    let total = 0;
    for (let item of array) {
        total += item.score;
    }
    return total / array.length;
}
console.log(findAverageScore(submissions))

function filterPassing(array){
    let passing = array.filter((item) => item.passed);
    return passing;
}
console.log(filterPassing(submissions))

function filter90AndAbove(array){
    let above90 = array.filter((item) => item.score >= 90);
    return above90;
}
console.log(filter90AndAbove(submissions))