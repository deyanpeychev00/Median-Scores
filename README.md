# Median Scores
## JavaScript algorithmic task for manipulating arrays.

> To run the file, open Commant Prompt in the file directory and type `node median-score.js`


## How does it work?

> For `scores = [100, 20, 50, 70, 45]` the output should be `medianScores(scores) = [100, 60, 50, 60, 50]`

The program gets the input array and iterates through its items.

```javascript
for (let markIndex = 0; markIndex < scores.length; markIndex++)
```

On each iteration, the current element of the array is added to a new, sorted array

```javascript
sortedScoresArray.push(Number(scores[markIndex]));
```
> Please note that `sortedScoresArray` is currently not sorted. It is being sorted when it's passed to the function below:

The sorted array is passed to another function which finds its median

```javascript
calculateMedian(sortedScoresArray.sort((a,b) => a-b));
```

The new function finds the median of the sorted array by following this statement: 
> The median of an `N`-element sequence is defined as follows: If `N` is odd, the median is the element which stands in the middle of the sequence after it is sorted. If `N` is even, the median is the average (mean) of the two "middle" elements of the sequence after it is sorted.

After the median of the current array is found, it is pushed in the final result array: 
```javascript
medianScoreArray.push(calculateMedian(sortedScoresArray.sort((a,b) => a-b)));
```