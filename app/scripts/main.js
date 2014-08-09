$(function() {
    $('.menu .item').click(function (e) {
        console.log('show tab', this);
        e.preventDefault();
        $(this).tab('show')
    });
});

