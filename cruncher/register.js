$('#register_form').on('submit', function (e) {
	e.stopPropagation();
	e.preventDefault();
	$.ajax('rest.php/user',
	       {type: 'POST',
		data: $(this).serialize(),
		cache: false,
		success: function () {
		    alert('Registeration Successful'); },
		error: function () {
		    alert('Registeration Failed');}
	       });
    });