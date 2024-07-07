const getMinMax = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min, max)
}


const arr1 = [3, 2, 1, 56, 10000, 167];
const arr2 = [1, 345, 234, 21, 56789];
const arr3 = [56789]

getMinMax(arr1);
getMinMax(arr2);
getMinMax(arr3);
