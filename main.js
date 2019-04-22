(function ( $ ) {
    $.tab = function() {
        $(document).on('click','.tabs-title a',function() {
            var dataTab = $(this).data('tab');
            // Remove current class active
            $('.tabs-title a').removeClass('active');
            $('.tab-content').removeClass('active');
            // Add class active for selected tabs
            $(this).addClass('active');
            $("#tab_content0"+dataTab).addClass('active');
        });

        return this;
    }

    $.openDropdown = function(icon, dataDropdown) {
        $(icon).addClass('active');
        $('#'+dataDropdown).addClass('active');
        $('#'+dataDropdown).show('slow');

        return false;
    }

    $.closeDropdown = function(dataDropdown, dropdown) {
        if(dataDropdown) {
            $(this).removeClass('active');
            $('#'+dataDropdown).removeClass('active');
            $('#'+dataDropdown).hide('slow');
        }

        if(dropdown) {
            $('.dropdown-icon').removeClass('active');
            $(dropdown).removeClass('active');
            $(dropdown).hide('slow');
        }
    }

    $.dropdownAction = function(icon, content, wrapper) {
        $(document).on('click',icon , function() {
            var dataDropdown = $(this).data('dropdown');

            console.log(dataDropdown);

            if($(this).hasClass('active')) {
                $.closeDropdown(dataDropdown, '');
            } else {
                $.openDropdown(icon, dataDropdown);
            }
        });

        $(document).on('click', 'body', function() {
            $.closeDropdown('', content);
        });

        $(document).on('click', wrapper, function(e) {
            e.stopPropagation();
        });
    }

    $.slider = function() {
        $(document).on('click', '.slider-nav .prev', function() {
            var current = $('.slider-content li.active');
            if(current.prev().length == 1) {
                current.prev().addClass('active');
                current.removeClass('active');                
                return;
            } else {
                current.removeClass('active');
                $('.slider-content').children().last().addClass('active');
            }
        });

        $(document).on('click', '.slider-nav .next', function() {
            var current = $('.slider-content li.active');
            if(current.next().length == 1) {
                current.next().addClass('active');
                current.removeClass('active');                
                return;
            } else {
                current.removeClass('active');
                $('.slider-content').children().first().addClass('active');
            }
        });
    }

    //Ajax
    $.login = function() {
        $(document).on('click', '#submit', function () {
            console.log('click');
            $.ajax({
                type: 'POST',
                url: 'login/login.php',
                data: {
                    email: $('#email').val(),
                    pass: $('#pass').val()
                },
                success:function (result) {
                    $('#result').html(result);
                },
                error:function () {
                    alert('Have problem in login process, please try again!');
                }
            });
        });
    }
}(jQuery));