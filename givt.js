
	$(document).ready(function() {
			$("#elprof-sign-2").slideDown(3000);
		
		$("#elprof-esc").click(function() {
			
			$("#mohamed").slideUp(1500);
			
		});
	});
		


		function nameAndPass() {
			
			var name = document.getElementById("name").value,
			pass = document.getElementById("pass").value,
			bttn = document.getElementById("btn-sign"),
			msg  = document.getElementById("msg"),	
			help = document.getElementById("help");	
			
			if (name == "elprof" && pass == "elprof877") {
                location.href='http://www.th3littleprofessor.com';
				document.getElementById("msg").innerHTML = "أهلا بك فى صفحة الهدايا";
		     	document.getElementById("msg").style.display = "block";
				msg.style.border = "#1fdc3c 2px solid";
				msg.style.animation = "slideInRight 1s 1";
				help.style.top = "0";
				help.style.marginTop = "2px";

                $(document).ready(function() {
					$("#mohamed").fadeOut(2000, function(){
						
					});
				});

	
				
			}else {
				
					document.getElementById("msg").innerHTML = "البيانات خاطئة";
		     	document.getElementById("msg").style.display = "block";
				msg.style.border = "#ff0000 2px solid";
				msg.style.animation = "slideInRight 1s 1";
				help.style.top = "0";
				help.style.marginTop = "2px";
				
			};
			
			
			if (name === "" && pass === "" ) {
					document.getElementById("msg").innerHTML = "يجب أن تملأ الخانات";
		     	document.getElementById("msg").style.display = "block";
				msg.style.border = "#ffc300 2px solid";
				msg.style.animation = "slideInRight 1s 1";
				help.style.top = "0";
				help.style.marginTop = "2px";
			};
			
				if (pass === "" ) {
				document.getElementById("msg").innerHTML = "يجب أن تملأ الخانات";
		     	document.getElementById("msg").style.display = "block";
				msg.style.border = "#ffc300 2px solid";
				msg.style.animation = "slideInRight 1s 1";  
			    help.style.top = "0";
				help.style.marginTop = "2px";
			};
			
				if (name === "") {
				document.getElementById("msg").innerHTML = "يجب أن تملأ الخانات";
		     	document.getElementById("msg").style.display = "block";
				msg.style.border = "#ffc300 2px solid";
				msg.style.animation = "slideInRight 1s 1"; 
					help.style.top = "0";
				help.style.marginTop = "2px";
			};
			
		};
	
