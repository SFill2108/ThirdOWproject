$(".form__sendMessage").click(function(e) {
    e.preventDefault();
    var form = document.getElementById("form")
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = form.elements.email.value;
    if(reg.test(email) === false) {
        $(".invalidEmail").fadeIn("fast");
        $('.form__email').addClass('error');
        return false;
    }
    $(".form__field").fadeOut(100);
    $(".condition").fadeIn("slow");
});
$(".form__email").focus(function(){
    $('.form__email').removeClass('error');
    $(".invalidEmail").fadeOut("fast");
});