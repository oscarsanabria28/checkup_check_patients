/***********************
Nombre funcion:
	searchPatient()
Entradas:
	@origen -> nos dice que tipo de busqueda va a haber:
			   1) por nombre ->1
			   2) por teléfono ->2
			   3) por fecha de nacimiento ->3

Salidas:
	@strJson -> string donde se guardan los resultados de la busqueda en el archivo Json
************************/

function searchPatient(origen) {
			//recibimos el valor del input
            var input= document.getElementById("input_patient").value;
            //checamos que no este vacio el input
            if(input==""){
            	alert("Introduce un dato valido");
            }else{
            	//si no esta vacio abrimos el archivo Json con los datos de los pacientes 
            	//metemos estos datos a la variable datos.
            	$.getJSON("json_doc/patients.json", function(datos) {
                //Declaramos la variable de strJson1 y le damos el valor de la tabla y el <thead>
                var strJson1 = '<table class="table table-hover table_content">'
                strJson1= strJson1+'<thead><tr><td>Nombre</td><td>Teléfono</td><td>Fecha de Nacimiento</td></tr></thead>';
                //creamos la variable encontrado -> variable de control para ver si se encontro algún dato con respecto 
                //al input
                var encontrado=0, strJson="";
                for(i=0;i<datos.length;i++)
                {
                    //origen 1 -> buscamos a partir del nombre 


                    if(origen==1){
                    	if(datos[i].first_name==input){
                    		//llenamos la variable strJson con lo encontrado en el archivo
                    		strJson = strJson+'<tr>';
		                    strJson= strJson+'<td><a data-toggle="modal" data-target="#myModal" onclick="searchById('+datos[i].id+')">'+datos[i].first_name+' '+ datos[i].last_name +'</aa></td>';
		                    strJson= strJson+"<td>"+datos[i].phone_number+"</td>";
		                    strJson= strJson+'<td>'+datos[i].date_of_birth+'</td>';
		                    strJson = strJson+"</tr>";
		                    encontrado=1;
                    	}
                    }
                    //origen 2 -> buscamos a partir del teléfono
                    if(origen==2){
                    	if(datos[i].phone_number==input){
                    		//llenamos la variable strJson con lo encontrado en el archivo
                    		strJson = strJson+'<tr>';
		                    strJson= strJson+'<td><a data-toggle="modal" data-target="#myModal" onclick="searchById('+datos[i].id+')">'+datos[i].first_name+' '+ datos[i].last_name +'</a></td>';
		                    strJson= strJson+"<td>"+datos[i].phone_number+"</td>";
		                    strJson= strJson+'<td>'+datos[i].date_of_birth+'</td>';
		                    strJson = strJson+"</tr>";
		                    encontrado=1;
                    	}
                    }
                    //origen 3 -> buscamos a partir de la fecha de nacimiento
                    if(origen==3){
                    	if(datos[i].date_of_birth==input){
                    		//llenamos la variable strJson con lo encontrado en el archivo
                    		strJson = strJson+'<tr>';
		                    strJson= strJson+'<td><a data-toggle="modal" data-target="#myModal" onclick="searchById('+datos[i].id+')">'+datos[i].first_name+' '+ datos[i].last_name +'</a></td>';
		                    strJson= strJson+"<td>"+datos[i].phone_number+"</td>";
		                    strJson= strJson+'<td>'+datos[i].date_of_birth+'</td>';
		                    strJson = strJson+"</tr>";
		                    encontrado=1;
		                }
                    }

                }
                //si la variable encontrado es 1 significa que si encontramos coincidencia entre el input del 
                // usuario y algún paciente del archivo
                if(encontrado==1){
                	strJson = strJson1+strJson+"</table>";
                }else{
                	//si no encontramos coincidencias
                	//llenamos la variable strJson con el mensaje de error
                	strJson='<div class="row message_error"><div class="col-md-5 col-md-offset-2"><h1 class="content_title" >Lo sentimos.</h1>';
                	strJson=strJson+'<p class="content_description" >No encontramos ninguna coincidencia con los parametros introducidos.</p></div>';
                	strJson=strJson+'<div class="col-md-2"><img src="img/sick.png" class="img_error"></div></div>';
                
                }
                
      			//desplegamos el resultado de strJson en el div con id "content"
                document.getElementById("content").innerHTML=strJson;
            });
            }
}

/***********************
Nombre funcion:
	searchById()
Descripción:
	Nos permite buscar un paciente en especifico dentro del archivo
	con el numero de id que le corresponda
Entradas:
	@id -> es el identificador unico del paciente a buscar

Salidas:
	@datos Personales del paciente:
		1) Nombre
		2) Email 
		3) Género
		4) Teléfono
		5) Fecha de Nacimiento
************************/
function searchById(id){
	//abrimos el archivo Json para buscar el paciente con el id correcto
	$.getJSON("json_doc/patients.json", function(datos) {
                //recorremos todos los datos del archivo
                for(i=0;i<datos.length;i++)
                {
                    //hacemos la comparacion entre los id del arreglo datos y con el id que recibe la función
                    	if(datos[i].id==id){
                    		//si coinciden llenamos el modal con los datos correctos del paciente
                    		document.getElementById("user_name").innerHTML=datos[i].first_name+' '+datos[i].last_name;
                    		document.getElementById("user_mail").innerHTML=datos[i].email;
                    		document.getElementById("user_gender").innerHTML=datos[i].gender;
                    		document.getElementById("user_phone").innerHTML=datos[i].phone_number;
                    		document.getElementById("user_birth").innerHTML=datos[i].date_of_birth;
		                   
                    	}
                }
            });
}









