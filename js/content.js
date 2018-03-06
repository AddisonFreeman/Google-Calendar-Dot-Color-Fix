$(document).ready(function() {
    function dotChange() {
        //array of all calendars
        var calendars = [];

        $("#dws12b .DYTqTd").each(function() {
            var calName = $(this).find('.NI2kfb').attr('data-text');
            var calColor = $(this).find('.uVccjd').css('background-color');
            var obj = {};
            obj[calName] = calColor;
            calendars.push(obj);
        });

        $(".g3dbUc .ynRLnc").each(function(item) {
            var el = $(this);
            var itemText = $(this).text();
            Object.keys(calendars).forEach(function(cal, index) {
                Object.keys(calendars[cal]).forEach(function(key) {
                    if (itemText.includes("All day")) {
                        Object.keys(calendars[cal]).forEach(function(k) {
                            // $(el).parent().find('.yzifAd').css('color', calendars[cal][k]);
                        });
                    } else if(itemText.includes(key)) {
                        Object.keys(calendars[cal]).forEach(function(k) {
                            $(el).parent().find('.yzifAd').css('color', calendars[cal][k]);
                        });                            
                    }
                });
            });
        });

    }
    dotChange();
    $(document).on('click','span, div',function() {
        dotChange();
    })
});