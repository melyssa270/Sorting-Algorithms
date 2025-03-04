const sortVector = (vector2) => {
    const vector1 = [1, 9, 5, 3, 12, 3, 200, 8.9];
    const vector3 = vector1.concat(vector2);
  
    function mergeSort(arr, start, end) {
      if (end - start <= 1) return arr.slice(start, end);
  
      const mid = Math.floor((start + end) / 2);
      const left = mergeSort(arr, start, mid);
      const right = mergeSort(arr, mid, end);
  
      return merge(left, right);
    }
  
    function merge(left, right) {
      let result = [];
      let i = 0, j = 0;
  
      while (i < left.length && j < right.length) {
        left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);
      }
  
      return [...result, ...left.slice(i), ...right.slice(j)];
    }
  
    return mergeSort(vector3, 0, vector3.length);
  };
  
  console.log(sortVector([4, 0, 2, 6, 7, 10, 90, 31, 56, -1]));
/*   [
    -1,  0,  1,   2,  3,  3,  4,
     5,  6,  7, 8.9,  9, 10, 11,
    12, 31, 32,  54, 56, 89, 90,
   200
 ] */