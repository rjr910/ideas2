(function ($) {
    'use strict';
    $(function () {
        /**
         * Generates a Roman Number String from given number
         *
         * @param {any} num
         * @returns
         */
        function generateRomanNumber(num) {
            if (isNaN(num)) { return 'Bitte nur Zahlen eingeben'; }
            num = parseInt(num);
            var index = {
                'M': 1000,
                'CM': 900,
                'D': 500,
                'CD': 400,
                'C': 100,
                'XC': 90,
                'L': 50,
                'XL': 40,
                'X': 10,
                'IX': 9,
                'V': 5,
                'IV': 4,
                'I': 1,
            };
            var result = '';
            for (var i in index) {
                while (num >= index[i]) {
                    result += i;
                    num -= index[i];
                }
            }
            return result;
        }

        $('#number').on('keyup change', function () {
            $('#romanNumber').html(
                generateRomanNumber(Number($('#number').val()))
            );
        });
    });
})(jQuery);