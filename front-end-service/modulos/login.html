<!DOCTYPE html>
<html lang="es">  
<head>
	<title>My Awesome Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<link rel="icon" type="image/x-icon" href="../img/logovet.png">
	<link rel="stylesheet" href="style.css">
</head>
<!--Coded with love by Mutiullah Samim-->
<body>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="img/logo-500x500.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">

					<form id="loginform" name="loginform">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>

							<!--USER-->
							<input type="text" name="username" id="username" class="form-control input_user" value="" placeholder="usuario">

						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>

							<!--PASSWORD-->
							<input type="password" name="password" id="password" class="form-control input_pass" value="" placeholder="password">

						</div>
						<div class="d-flex justify-content-center mt-3 login_container">

							<!--BOTON ENVIAR-->
				 			<button type="submit" name="enviar" id="enviar" class="btn btn-block login_btn">Ingresar</button>

				   		</div>
					</form>

				</div>
			</div>
		</div>
	</div>

	<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
    crossorigin="anonymous"></script>
	<script>

		$('#loginform').submit(function (event) {

			event.preventDefault();

			var data = { 'username': $('#username').val(), 'password': $('#password').val() };

			console.log(data)

			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "http://localhost:9000/api/auth/signin",
				data: JSON.stringify(data),
				dataType: 'json',
				cache: false,
				timeout: 600000,
				success: function (data) {
					var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
						+ JSON.stringify(data, null, 4) + "&lt;/pre&gt;";
					$('#feedback').html(json);

					console.log("SUCCESS : ", data);
					$("#btn-search").prop("disabled", false);
				},
				error: function (e) {
					var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
						+ e.responseText + "&lt;/pre&gt;";
					$('#feedback').html(json);

					console.log("ERROR : ", e);
					$("#btn-search").prop("disabled", false);
				}
			});


		});		

	</script>
</body>
</html>