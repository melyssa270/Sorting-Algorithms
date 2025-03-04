# MergeSort
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Sorting Algorithm](https://img.shields.io/badge/Algorithm-Merge%20Sort-blue)
![Optimized](https://img.shields.io/badge/Memory%20Efficient-%E2%9C%85-green)

This example implements the **Merge Sort** algorithm in JavaScript using a recursive approach. Merge Sort is a **divide-and-conquer** algorithm that sorts an array by dividing it into smaller subarrays, sorting each subarray, and merging them back into a final sorted array. The time complexity of this algorithm is **O(n log n)**.

---

### How it Works?
The implementation consists of three main components:

***1.*** **Arrow Function `sortVector`**:
   The entry point function that concatenates two arrays and triggers the sorting process.

***2.*** **Recursive Function `mergeSort(arr, start, end)`**:
   This function recursively splits the array into smaller subarrays until the base case is reached (arrays with one or zero elements).

***3.*** **Helper Function `merge(left, right)`**:
   This function merges two sorted arrays into a single sorted array while optimizing memory usage.


### Why Use Indexes Instead of `.slice()`?
In the recursive function, `.slice()` is typically used to divide the array into smaller parts. However, slicing creates **new arrays** and consumes extra memory (`O(n)`).

By using **indexes (start and end)**, we pass references to the original array without creating additional copies. This method improves the algorithm's **space complexity** and makes it more **memory-efficient**.


### How to Run the Code
***1.*** Clone this repository:
```bash
git clone https://github.com/your-username/merge-sort-js.git
cd merge-sort-js
```

***2.*** Run the code:
```bash
node index.js
```

