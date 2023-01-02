'use strict'

/** Variable globales
 *  Usamos estas variables para completar la validación
 */

let validacion_name = false
let validacion_email = false
let validacion_clave = false
let validacion_confirm = false


/* INPUT NAME */
 
let name_form = document.querySelector('.name')
    name_form.addEventListener('keyup', function(){

        validacion_name = false

        /* Seleccionamos el input que queremos modificar, recortamos los espacios en blanco y probamos el regex */
        let name = get_trim('.name')
        let prueba = test_patron(/[\d]/ , name )

        /* Dependiendo del estado de "prueba" hacemos lo siguiente: */
        if(prueba || name.length <= 0){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_name').classList.remove('correct');
            document.querySelector('.input_group_name').classList.add('wrong')

            /* Si hay error mostramos el error */
            document.querySelector('.error_name').style.display = 'block';
            document.querySelector('.error_name').innerHTML = 'Este campo es requerido';

            /* Si hay error mostramos el logo wrong y escondemos el correcto */
            document.querySelector('.logo_wrong_name').style.display = 'flex'
            document.querySelector('.logo_correct_name').style.display = 'none'

        }else{
            
            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_name').classList.remove('wrong');
            document.querySelector('.input_group_name').classList.add('correct')
            
            /* Si no hay error, escondemos error */
            document.querySelector('.error_name').style.display = 'none';

            
            /* Si no hay error mostramos el logo correct y escondemos el wrong */
            document.querySelector('.logo_wrong_name').style.display = 'none'
            document.querySelector('.logo_correct_name').style.display = 'flex'
            
            /* Si esta todo bien, cambiamos el estado de validación name */
            validacion_name = true
        }

        /* Comprobamos si todas las variables están en true o no */
        valid_btn()

    })


/* INPUT EMAIL */    

let email_form = document.querySelector('.email')
    email_form.addEventListener('keyup', function(){

        validacion_email = false

        /* Seleccionamos el input que queremos modificar, recortamos los espacios en blanco y probamos el regex */
        let email = get_trim('.email')
        let prueba = test_patron(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , email )

        /* Dependiendo del estado de "prueba" hacemos lo siguiente: */
        if(!prueba && email.length > 0){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_email').classList.remove('correct');
            document.querySelector('.input_group_email').classList.add('wrong');

            /* Si hay error mostramos el error */
            document.querySelector('.error_email').innerHTML = 'Este campo es incorrecto';
            document.querySelector('.error_email').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correcto */
            document.querySelector('.logo_wrong_email').style.display = 'flex'
            document.querySelector('.logo_correct_email').style.display = 'none'


        }else if(email.length === 0){

            /* Si hay error mostramos el error en concreto */
            document.querySelector('.error_email').innerHTML = 'Este campo es requerido';
            document.querySelector('.error_email').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correcto */
            document.querySelector('.logo_wrong_email').style.display = 'flex'
            document.querySelector('.logo_correct_email').style.display = 'none'

        }else{

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_email').classList.remove('wrong');
            document.querySelector('.input_group_email').classList.add('correct')
            
            /* Si no hay error no mostramos el error */
            document.querySelector('.error_email').style.display = 'none';

            /* Si no hay error mostramos el logo correcto y escondemos el wrong */
            document.querySelector('.logo_wrong_email').style.display = 'none'
            document.querySelector('.logo_correct_email').style.display = 'flex'

            /* Si esta todo bien, cambiamos el estado de validación name */
            validacion_email = true
        }

        /* Comprobamos si todas las variables están en true o no */
        valid_btn()

    })


/* INPUT CLAVE */    

let clave_form = document.querySelector('.clave')
    clave_form.addEventListener('keyup', function(){

        validacion_clave = false
        let clave = get_trim('.clave')

        /* Dependiendo de la longitud de "clave" hacemos lo siguiente: */
        
        if(clave.length > 8 ){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_clave').classList.remove('correct');
            document.querySelector('.input_group_clave').classList.add('wrong');

            /* Si hay error mostramos el error en concreto */
            document.querySelector('.error_clave').innerHTML = 'No debe tener más de 8 caracteres';
            document.querySelector('.error_clave').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correct */
            document.querySelector('.logo_wrong_clave').style.display = 'flex'
            document.querySelector('.logo_correct_clave').style.display = 'none'



        }else if( clave.length <= 0){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_clave').classList.remove('correct');
            document.querySelector('.input_group_clave').classList.add('wrong');

            /* Si hay error mostramos el error en concreto */
            document.querySelector('.error_clave').innerHTML = 'Este campo es requerido';
            document.querySelector('.error_clave').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correct */
            document.querySelector('.logo_wrong_clave').style.display = 'flex'
            document.querySelector('.logo_correct_clave').style.display = 'none'

        }else{
            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_clave').classList.remove('wrong');
            document.querySelector('.input_group_clave').classList.add('correct')
            
            /* Si hay error mostramos el error en concreto */
            document.querySelector('.error_clave').style.display = 'none';

            /* Si no hay error mostramos el logo correcto y escondemos el wrong */
            document.querySelector('.logo_wrong_clave').style.display = 'none'
            document.querySelector('.logo_correct_clave').style.display = 'flex'

            /* Si esta todo bien, cambiamos el estado de validación name */
            validacion_clave = true
        }

        /* Comprobamos si todas las variables están en true o no */
        valid_btn()

    })

/* INPUT CLAVE CONFIRM */    

let clave_confirm_form = document.querySelector('.confirmclave')
    clave_confirm_form.addEventListener('keyup', function(){

        validacion_confirm = false
        
        /* Seleccionamos ambos valores de los inputs */
        let clave = get_trim('.clave')
        let clave_confirm = get_trim('.confirmclave')
                
        /* Dependiendo si coinciden ambas, hacemos lo siguiente: */
        if( clave_confirm === clave ){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_confirm').classList.remove('wrong');
            document.querySelector('.input_group_confirm').classList.add('correct')
            
            /* Si hay error mostramos el error en concreto o lo escondemos */
            document.querySelector('.error_confirm').style.display = 'none';

            /* Si no hay error mostramos el logo correcto y escondemos el wrong */
            document.querySelector('.logo_wrong_confirm').style.display = 'none';
            document.querySelector('.logo_correct_confirm').style.display = 'flex';

            /* Si esta todo bien, cambiamos el estado de validación name */
            validacion_confirm = true

        }else if( clave_confirm.length <= 0){

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_confirm').classList.remove('correct');
            document.querySelector('.input_group_confirm').classList.add('wrong');

            /* Si hay error mostramos el error en concreto o lo escondemos */
            document.querySelector('.error_confirm').innerHTML = 'Este campo es requerido';
            document.querySelector('.error_confirm').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correct */
            document.querySelector('.logo_wrong_confirm').style.display = 'flex';
            document.querySelector('.logo_correct_confirm').style.display = 'none';


        }else{

            /* Añadimos al div que contiene el input la clase correcta/wrong para el borde */
            document.querySelector('.input_group_confirm').classList.remove('correct');
            document.querySelector('.input_group_confirm').classList.add('wrong');

            /* Si hay error mostramos el error en concreto o lo escondemos */
            document.querySelector('.error_confirm').innerHTML = 'Debe ser igual que la clave';
            document.querySelector('.error_confirm').style.display = 'block';

            /* Si hay error mostramos el logo wrong y escondemos el correct */
            document.querySelector('.logo_wrong_confirm').style.display = 'flex';
            document.querySelector('.logo_correct_confirm').style.display = 'none';

        }

        /* Comprobamos si todas las variables están en true o no */
        valid_btn()

    })

/* FUNCIÓN BOTÓN QUE GENERA LA ALERTA */

    let btn = document.querySelector('.section__btn')
    btn.addEventListener('click', function(){

        if( validacion_name && validacion_clave && validacion_confirm && validacion_email){
            alert('La inscripción ha sido correcta')
        }else{
            alert('Ha habido un error')
        }

    })

/* FUNCIONES DE RECURSOS */

/* FUNCIÓN QUE COMPRUEBA EL ESTADO DE LAS VALIDACIONES. Si todas son true, activamos el botón si no, no. */
function valid_btn(){
    if( validacion_name && validacion_clave && validacion_confirm && validacion_email){
        document.querySelector('.section__btn').classList.add('valid');
    }else{
        document.querySelector('.section__btn').classList.remove('valid');
    }
}

/* FUNCIÓN QUE SELECCIONA Y RECORTA. Sirve para seleccionar y no repetir tanto y quitar espacios en blanco */
function get_trim( selector ){
    let texto_input = document.querySelector(selector).value
    let texto_recortado = texto_input.trim()
    return texto_recortado
}

/* FUNCIÓN QUE SELECCIONA Y RECORTA. Sirve para comprobar si cumple el patron o no */
function test_patron( patron , texto){
    let regex = patron
    let prueba = regex.test(texto)
    if(prueba){
        return true
    }else{
        return false
    }
}





