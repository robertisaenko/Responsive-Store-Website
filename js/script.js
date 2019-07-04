$(document).ready(function() {
    $(".lang__button").change(function() {
        $(".lang__button").each(function() {
            if ($(this).is(':checked')) {
                $(this).parents('.topper__switchers-item').addClass('button__item_checked');
            } else {
                $(this).parents('.topper__switchers-item').removeClass('button__item_checked');
            }
        });
    });
});

$(document).ready(function() {
    $(".currency__button").change(function() {
        $(".currency__button").each(function() {
            if ($(this).is(':checked')) {
                $(this).parents('.topper__switchers-item').addClass('button__item_checked');
            } else {
                $(this).parents('.topper__switchers-item').removeClass('button__item_checked');
            }
        });
    });
});

$(document).ready(function() {
    $('.topper__login-button').click(function() {
        $("#myForm").css("display", "block");
    })
});
$(document).ready(function() {
    $('.topper__form-container-cancel').click(function() {
        $("#myForm").css("display", "none");
    })
});
$(document).ready(function() {
    $('.topper__create-account').click(function() {
        $("#myForm").css("display", "block");
    })
});
$(document).ready(function() {
    $('.nav__element_on-hover').hover(function() {
        $(".nav__pop-up").toggleClass('display_block')
    })
});
$(document).ready(function() {
    $('.header__cart').click(function() {
        $('.header__cart-pop-up').toggleClass('display_block');
        $(this).toggleClass('header__cart_onclick')
        if ($(this).hasClass('header__cart_onclick')) {
            $('.header__cart-img').attr('src', 'img/cart_hover.png');
        } else {
            $('.header__cart-img').attr('src', 'img/cart.png');
        }
    })
});