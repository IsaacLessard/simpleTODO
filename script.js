$(document).ready(function(){
    $('#submit').click(function(){
        var toAdd = document.getElementById('input').value;
        $('#list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click','.item',function(){
        $(this).remove();
    });
});
