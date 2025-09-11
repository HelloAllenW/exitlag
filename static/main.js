/** Active header class */
$(window).on('load', function () {
    var $win = $(window);
    var winH = $win.height();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#header').addClass('active');
            $('#header-faq').addClass('active')
        } else {
            $('#header').removeClass('active');
            $('#header-faq').removeClass('active');
        }
    });
    if ($(this).scrollTop() >= 50) {
        $('#header').addClass('active');
        $('#header-faq').addClass('active')
    }

    $('.dropdown_language .dropdown-item').on('click', function (e) {
        e.preventDefault();
        const dropdown_language = $('.dropdown_language');
        dropdown_language.find('input[name="language"]').val($(this).data('value'));
        dropdown_language.find('form').submit();
    });

});

function initializeFormValidation(formSelector) {

    const registerForm = document.querySelector(formSelector);
    
    if (!registerForm) return;

    const submitButton = registerForm.querySelector('button[type="submit"]');
    const requiredFields = registerForm.querySelectorAll('input[required]');

    function checkRequiredFields() {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) allFilled = false;
        });
        submitButton.disabled = !allFilled;
    }

    requiredFields.forEach(field => {
        field.addEventListener('input', checkRequiredFields);
    });

    checkRequiredFields();
}

function scrollToID(id) {
    const element = $(`#${id}`);
    const header =  $('#header');
    const scrollTop = element.offset().top - header.outerHeight() - 55 >= 0 ? element.offset().top - header.outerHeight() - 55 : 0;
    $('html,body').animate({ scrollTop }, 'slow');
}

/** Password Toggle */
function togglePasswordVisibility(toggleButtonId, passwordInputId) {
    
    const toggleButton = document.getElementById(toggleButtonId);
    const passwordInput = document.getElementById(passwordInputId);

    toggleButton.addEventListener('click', function (e) {
        e.preventDefault();

        const icon = this.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
}