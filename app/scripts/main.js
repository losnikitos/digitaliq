$(function () {
    $('.menu .item').click(function (e) {
        console.log('show tab', this);
        e.preventDefault();
        $(this).tab('show')
    });


    $("form").submit(function (e) {
        e.preventDefault();
        var $this = $(this);
        $.post(
            $this.attr("action"),
            $this.serialize(),
            function (data) {
                alert('Thanks! We will get back to you soon');
                $('.modal').modal('hide');
            },
            "json"
        ).done(function () {
                alert('Thanks! We will get back to you soon');
                $('.modal').modal('hide');
            }).fail(function () {
                alert('Thanks! We will get back to you soon');
                $('.modal').modal('hide');
            })
    });
});



