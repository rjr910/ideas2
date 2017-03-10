(function ($) {
	$(function() {
        var $happyNumbers = $('#happyNumbers');
        var arr = [];
        for(var i = 1; i<=100; i++){
            var res = getHappyNumber(i, i, []);
            if(res > 0){
                arr.push(res);
            }
        }
        $happyNumbers.html(arr.join());
	});	

    function getHappyNumber(num, init, tmpArray){
        tmpArray.push(num);
        var arr = [];
        var result = 0;
        while(num > 0){
            result += (num % 10)*(num % 10)
            num = parseInt(num / 10);
        }

        if(result == 1){
            return init;
        }else if(existInArray(result,tmpArray)){
            return -1;
        }else{
            return getHappyNumber(result, init, tmpArray);
            
        }
        
    }

    function existInArray(num, tmpArray){
        for(var i = 0; i < tmpArray.length; i++){
            if(num == tmpArray[i]){
                return true;
            }
        }
        return false;
    }
})(jQuery);