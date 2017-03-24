(function ($) {
    'use strict';
    $(function () {
        function randomFill() {
            "use strict";

            var intArr = [];
            for (var i = 0; i < 10000; i++) {
                intArr.push(Math.floor(Math.random() * 10000));
            }
            return intArr;

        }


        

        function bubbleSort(intArr){
            "use strict";
            if(!Object.prototype.toString.call(intArr) === '[object Array]'){
                throw new Error("Not an array");
            }
            var changesDone = true;
            for(var i = 0; i<intArr.length && changesDone;i++){
                changesDone = false;
                for(var k = 0; k < intArr.length - 1 - i; k++){
                    if(intArr[k] > intArr[k+1]){
                        var temp = intArr[k];
                        intArr[k] = intArr[k+1];
                        intArr[k+1] = temp;
                        changesDone = true;
                    }
                }
            }
            return intArr;
        }

        function insertionSort(intArr) {
            "use strict";
            if (!Object.prototype.toString.call(intArr) === '[object Array]') {
                throw new Error("Not an array");
            }
            for(var i = 1; i < intArr.length; i++){
                var valueToSort = intArr[i];
                var k = i;
                while(k > 0 && intArr[k-1] > valueToSort){
                    intArr[k] = intArr[k-1];
                    k--;
                }
                intArr[k] = valueToSort;
            }
            return intArr;
        }

        function quickSort(intArr) {
            "use strict";
            
        }


        var filledIntArr = randomFill();
        console.time('testSortbyJS');
        console.log(filledIntArr.sort());
        console.timeEnd('testSortbyJS');
        
        filledIntArr = randomFill();
        console.time('testBubble');
        console.log(bubbleSort(filledIntArr));
        console.timeEnd('testBubble');

        filledIntArr = randomFill();
        console.time('testInsertion');        
        console.log(insertionSort(filledIntArr));
        console.timeEnd('testInsertion');
        
    });
})(jQuery);