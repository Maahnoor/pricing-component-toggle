$(document).ready(function(){
    $('input[type="checkbox"]').click( function () {
        if ($('input[type="checkbox"]').is(":checked")) {
            console.log('checked')
            $('.monthly').show();
            $('.yearly').hide();
            } else {
                $('.monthly').hide();
                $('.yearly').show();
      }
    });

});
