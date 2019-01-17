$("#myDropdown").prop("selectedIndex", -1);
(function () {
    emailjs.init("user_Xpszn67FpzD9BnvBUckQl");
})();


$("#myForm").on("submit", function (event) {
    event.preventDefault();
    $('#loading-message').text('Loading... Please wait.')
    $('#submit').attr("disabled", "disabled")

    var data = {
        service_id: 'gmail',
        template_id: 'template_K3WYCxiN',
        user_id: 'user_Xpszn67FpzD9BnvBUckQl',
        template_params: {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'country': $('#country').val(),
            'message': $('#message').val()
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $('#loading-message').text('Sent!')
        $('#name').val('')
        $('#email').val('')
        $('#country').val('')
        $('#message').val('')
        $('#submit').removeAttr("disabled")
    }).fail(function (error) {
        $('#loading-message').text('An error occurred, please try again.')
        $('#submit').removeAttr("disabled")
    });
});