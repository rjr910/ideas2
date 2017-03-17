(function ($) {
    'use strict';
    $(function () {
        $('#output').click(function () {
            e.preventDefault();
            getHappyNumbersComplete(
                Number($('#from').val()),
                Number($('#to').val()),
            );
        });

        /**
         * Receive start and end number for calculation of happy numbers
         *
         * @param {any} start
         * @param {any} end
         */
        function getHappyNumbersComplete(start, end) {
            const $happyNumbers = $('#happyNumbers');
            const arr = [];
            for (let i = start; i <= end; i++) {
                const res = getHappyNumber(i, i, []);
                if (res > 0) {
                    arr.push(res);
                }
            }

            $happyNumbers.html(buildHtml(arr));
            $('.h-number').each(function (id) {
                const stopFor = 300 * parseInt(id);
                $(this).delay(stopFor).animate({ opacity: '1' }, 'slow');
            });
        }

        function getHappyNumber(num, init, tmpArray) {
            tmpArray.push(num);
            let arr = [];
            let result = 0;
            while (num > 0) {
                result += (num % 10) * (num % 10);
                num = parseInt(num / 10);
            }

            if (result == 1) {
                return init;
            } else if (existInArray(result, tmpArray)) {
                return -1;
            }
            return getHappyNumber(result, init, tmpArray);
        }

        function existInArray(num, tmpArray) {
            for (let i = 0; i < tmpArray.length; i++) {
                if (num == tmpArray[i]) {
                    return true;
                }
            }
            return false;
        }

        function buildHtml(arr) {
            let result = '';
            for (let i = 0; i < arr.length; i++) {
                result += `<div style='opacity:0' class='col-md-1 h-number' ><span>${arr[i]}</span></div>`;
            }
            result += '';
            return result;
        }
    });
}(jQuery));
