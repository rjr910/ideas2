(function ($) {
    $(function () {

        $('#output').click(function (e) {
            e.preventDefault();
            getHappyNumbersComplete(Number($('#from').val()), Number($('#to').val()));
        });
        function getHappyNumbersComplete(start, end) {
            var $happyNumbers = $('#happyNumbers');
            var arr = [];
            for (var i = start; i <= end; i++) {
                var res = getHappyNumber(i, i, []);
                if (res > 0) {
                    arr.push(res);
                }
            }

            $happyNumbers.html(buildHtml(arr));
            $(".h-number").each(function(id){
                var stopFor = 300 * parseInt(id);
                $(this).delay(stopFor).animate({'opacity': "1"}, "slow");
            });
        }

        function getHappyNumber(num, init, tmpArray) {
            tmpArray.push(num);
            var arr = [];
            var result = 0;
            while (num > 0) {
                result += (num % 10) * (num % 10)
                num = parseInt(num / 10);
            }

            if (result == 1) {
                return init;
            } else if (existInArray(result, tmpArray)) {
                return -1;
            } else {
                return getHappyNumber(result, init, tmpArray);

            }

        }

        function existInArray(num, tmpArray) {
            for (var i = 0; i < tmpArray.length; i++) {
                if (num == tmpArray[i]) {
                    return true;
                }
            }
            return false;
        }

        function buildHtml(arr) {
            var result = ""
            for (var i = 0; i < arr.length; i++) {
                result += "<div style='opacity:0' class='col-md-1 h-number' ><span>" + arr[i] + "</span></div>";
            }
            result += "";
            return result;
        }
    });
})(jQuery);