(function ($) {
    'use strict';
    $(function () {
        function randomFill(num) {
            "use strict";
            var intArr = [];
            for (var i = 0; i < num; i++) {
                intArr.push(Math.floor(Math.random() * 1000000));
            }
            return intArr;

        }

        function testSortAlgo(name, func, nums) {
            "use strict";
            var filledIntArr = randomFill(nums);
            var t0 = performance.now();
            func(filledIntArr);
            var t1 = performance.now();
            printMeasuredTime(name, (t1 - t0).toFixed(3));
        }

        function printMeasuredTime(name, time) {
            "use strict";
            $("#measureResult").append("<tr><td>" + name + "</td><td>" + time + "ms</td></tr>");
        }

        function bubbleSort(intArr) {
            "use strict";
            var changesDone = true;
            for (var i = 0; i < intArr.length && changesDone; i++) {
                changesDone = false;
                for (var k = 0; k < intArr.length - 1 - i; k++) {
                    if (intArr[k] > intArr[k + 1]) {
                        var temp = intArr[k];
                        intArr[k] = intArr[k + 1];
                        intArr[k + 1] = temp;
                        changesDone = true;
                    }
                }
            }
            return intArr;
        }

        function insertionSort(intArr) {
            "use strict";
            for (var i = 1; i < intArr.length; i++) {
                var valueToSort = intArr[i];
                var k = i;
                while (k > 0 && intArr[k - 1] > valueToSort) {
                    intArr[k] = intArr[k - 1];
                    k--;
                }
                intArr[k] = valueToSort;
            }
            return intArr;
        }

        function quickSort(intArr) {
            "use strict";
            _quickSort(0, intArr.length - 1, intArr)

            return intArr;
            function _quickSort(leftIndex, rightIndex, intArr) {
                if (leftIndex >= rightIndex) {
                    return;
                }
                var i = leftIndex;
                var k = rightIndex - 1;
                var pivot = intArr[rightIndex];

                do {
                    while (intArr[i] <= pivot && i < rightIndex) {
                        i++;
                    }
                    while (intArr[k] >= pivot && k > leftIndex) {
                        k--;
                    }
                    if (i < k) {
                        var tmp = intArr[i];
                        intArr[i] = intArr[k];
                        intArr[k] = tmp;
                    }
                } while (i < k);

                if (intArr[i] > pivot) {
                    var temp = intArr[i];
                    intArr[i] = intArr[rightIndex];
                    intArr[rightIndex] = temp;
                }

                _quickSort(leftIndex, i - 1, intArr);
                _quickSort(i + 1, rightIndex, intArr);
            }
        }

        function selectionSort(arr) {
            var minIdx, temp,
                len = arr.length;
            for (var i = 0; i < len; i++) {
                minIdx = i;
                for (var j = i + 1; j < len; j++) {
                    if (arr[j] < arr[minIdx]) {
                        minIdx = j;
                    }
                }
                temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
            return arr;
        }

        function mergeSort(arr) {
            var len = arr.length;
            if (len < 2)
                return arr;
            var mid = Math.floor(len / 2),
                left = arr.slice(0, mid),
                right = arr.slice(mid);
            //send left and right to the mergeSort to broke it down into pieces
            //then merge those
            return _merge(mergeSort(left), mergeSort(right));

            function _merge(left, right) {
                var result = [],
                    lLen = left.length,
                    rLen = right.length,
                    l = 0,
                    r = 0;
                while (l < lLen && r < rLen) {
                    if (left[l] < right[r]) {
                        result.push(left[l++]);
                    }
                    else {
                        result.push(right[r++]);
                    }
                }
                //remaining part needs to be addred to the result
                return result.concat(left.slice(l)).concat(right.slice(r));
            }
        }

        function heapSort(arr) {
            var len = arr.length,
                end = len - 1;

            heapify(arr, len);

            while (end > 0) {
                swap(arr, end--, 0);
                siftDown(arr, 0, end);
            }
            return arr;

            function heapify(arr, len) {
                // break the array into root + two sides, to create tree (heap)
                var mid = Math.floor((len - 2) / 2);
                while (mid >= 0) {
                    siftDown(arr, mid--, len - 1);
                }
            }
            function siftDown(arr, start, end) {
                var root = start,
                    child = root * 2 + 1,
                    toSwap = root;
                while (child <= end) {
                    if (arr[toSwap] < arr[child]) {
                        swap(arr, toSwap, child);
                    }
                    if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
                        swap(arr, toSwap, child + 1)
                    }
                    if (toSwap != root) {
                        swap(arr, root, toSwap);
                        root = toSwap;
                    }
                    else {
                        return;
                    }
                    toSwap = root;
                    child = root * 2 + 1
                }
            }
            function swap(arr, i, j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        function doTests(elements) {
            var filledIntArr = randomFill(elements);
            var t0 = performance.now();
            filledIntArr.sort();
            var t1 = performance.now();
            printMeasuredTime("Standard JS Sort", (t1 - t0).toFixed(3));


            testSortAlgo("Bubble Sort", bubbleSort, elements);
            testSortAlgo("Insertion Sort", insertionSort, elements);
            testSortAlgo("Quick Sort", quickSort, elements);
            testSortAlgo("Heap Sort", heapSort, elements);
            testSortAlgo("Selection Sort", selectionSort, elements);
            testSortAlgo("Merge Sort", mergeSort, elements);
        }

        $("#doTest").click(function(){
            $("#measureResult").html("<tr><th>Sorting Algo</th><th>Time</th></tr>");
            doTests($("#elements").val());
        })
    });
})(jQuery);