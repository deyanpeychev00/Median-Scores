function round(num) {
    return (num >= 0 || -1) * Math.round(Math.abs(num));
}

function calculateMedian(sortedScoresArray) {
    if(sortedScoresArray.length % 2 === 0){
        // returns the average of the two-middle elements
        return round((sortedScoresArray[Math.floor((sortedScoresArray.length - 1) / 2)] + sortedScoresArray[Math.floor((sortedScoresArray.length) / 2)]) / 2);
    }else{
        // returns the middle element
        return round(sortedScoresArray[Math.floor((sortedScoresArray.length - 1) / 2)]);
    }
}

function medianScores(scores){
    let medianScoreArray = [];
    let sortedScoresArray = [];

    for (let markIndex = 0; markIndex < scores.length; markIndex++) {
        sortedScoresArray.push(Number(scores[markIndex]));
        medianScoreArray.push(calculateMedian(sortedScoresArray.sort((a,b) => a-b)));
    }

    return medianScoreArray;
}

console.log(medianScores([100, 20, 50, 70, 45])); // [100, 60, 50, 60, 50]
console.log(medianScores(['100', 20, '50', 70, 45])); // [100, 60, 50, 60, 50]
console.log(medianScores([])); // []
console.log(medianScores([100,45,0,0])); // [100, 72.5, 45, 22.5]
console.log(medianScores([-5,0,0,0])); // [-5, -2.5, 0, 0]
console.log(medianScores([-100,-20,-50,-70,-45])); // [-100. -60, -50, -60, -50]
