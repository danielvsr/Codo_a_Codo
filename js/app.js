/*FUNCION DE BOOTSTRAP PARA VALIDACIÓN DE FORMULARIO*/
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();
  
/*VARIABLES DE LOS CAMPOS DEL FORMULARIO */
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
/*FUNCION BOTON RESUMEN*/
(function (){
    if (nombre.value == "" || nombre.value == isNaN || 
        apellido.value == "" || apeliido.value == isNaN || 
        correo.value == ""){
            
    } else {
        document.getElementById('cantidad').innerHTML=`
        <select class="form-select" id="cantidad" aria-label="cantidad" required>`
        document.getElementById('categoria').innerHTML=`
        <select class="form-select" id="categoria" aria-label="categoria" required>`
    }
})();

function resumen(){
    let monto = 200;
    let descuento=0;
    let total = 0;
    /*if(nombre.value == "" || apellido.value == "" || correo.value == ""){
        alert("Favor de ingresar sus datos personales");
        } else{
        */if(cantidad.value == 1 || cantidad.value == 2 || cantidad.value == 3 || cantidad.value == 4 ||cantidad.value == 5){        
            if(categoria.value === "Estudiante"){
                descuento = (80 / 100) * monto;
                total = cantidad.value * (monto - descuento);
            } else if (categoria.value === "Trainee"){
                descuento = (50 / 100) * monto;
                total = cantidad.value * (monto - descuento);
            } else if (categoria.value === "Junior"){
                descuento = (15 / 100) * monto;
                total = cantidad.value * (monto - descuento);
            }
            document.getElementById('pago').innerHTML = `<span class="total">${formatoMoneda(total)}</span>`
            document.getElementById('resumen').innerHTML=`
                <div class="d-grid gap-2">
                    <button class="btn btn-success col-12" type="button" onclick="resumen();" disabled>Resumen</button>        
                </div>
            `
            document.getElementById('btn-pagar').innerHTML=`
                <div class="d-grid gap-2">
                    <button class="btn btn-success col-12" type="button" 
                    data-bs-toggle="modal" data-bs-target="#ventanaModal">Ir a Pagar</button>        
                </div>
            ` 
        }/* else{
            alert("Favor de ingresar la cantidad de tickets deseada");
        }*/
/*    }*/
}
/*FUNCION BOTON BORRAR*/
function limpiar(){
    document.getElementById('form').reset();
    document.getElementById('pago').innerHTML = `<span class="total"></span>`
    document.getElementById('resumen').innerHTML=`
        <div class="d-grid gap-2">
            <button class="btn btn-success col-12" type="button" onclick="resumen();" >Resumen</button>        
        </div>
    `
    document.getElementById('btn-pagar').innerHTML=``

}
/*FUNCION FORMATO DE MONEDA*/
const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-AR', {style:'currency', currency:'ARS', minimumFractionDigits:2})
}
/*FUNCION DENTRO DEL MODAL PARA SELECCIONAR EL METODO DE PAGO*/
function seleccionMetodo(){
    let metodo = document.getElementById('metodo');
    if(metodo.value === "TarjetaDebito"){
        document.getElementById('banco-emisor').innerHTML=`
        <select class="form-select" id="banco" aria-label="banco" required>
            <option selected disabled value>Seleccione banco</option>
            <option value="nacion">Banco Nación</option>
            <option value="cuidad">Banco Ciudad</option>
            <option value="provincia">Banco Provincia</option>
            <option value="bbva">BBVA</option>
            <option value="santander">Santander</option>
            <option value="supervielle">Supervielle</option>
            <option value="galicia">Galicia</option>
            <option value="credicoop">Credicoop</option>
            <option value="hsbc">HSBC</option>
            <option value="ibc">IBC</option>
            <option value="itau">Itaú</option>
            <option value="macro">Macro</option>
            <option value="hipotecario">Hipotecario</option>
        </select>`
        document.getElementById('numero').innerHTML=`
            <input type="number" class="form-control" id="numero" placeholder="XXXX-XXXX-XXXX-XXXX" aria-label="numeroTarjeta" required>
        `
        document.getElementById('codigo').innerHTML=`
        <input type="number" class="form-control" id="codigo" placeholder="XXX" aria-label="codigo" required>
        `
        document.getElementById('cuotas').innerHTML=``
        document.getElementById('mp').innerHTML=``
    }else if(metodo.value === "TarjetaCredito"){
        document.getElementById('banco-emisor').innerHTML=`
        <select class="form-select" id="banco" aria-label="banco" required>
            <option selected disabled value>Seleccione banco</option>
            <option value="nacion">Banco Nación</option>
            <option value="cuidad">Banco Ciudad</option>
            <option value="provincia">Banco Provincia</option>
            <option value="bbva">BBVA</option>
            <option value="santander">Santander</option>
            <option value="supervielle">Supervielle</option>
            <option value="galicia">Galicia</option>
            <option value="credicoop">Credicoop</option>
            <option value="hsbc">HSBC</option>
            <option value="ibc">IBC</option>
            <option value="itau">Itaú</option>
            <option value="macro">Macro</option>
            <option value="hipotecario">Hipotecario</option>
        </select>`
        document.getElementById('cuotas').innerHTML=`
            <select class="form-select" id="cuotas" aria-label="cuotas" required>
                <option selected disabled value>Selccione las cuotas</option>
                <option value="1">1 cuotas</option>
                <option value="3">3 cuotas</option>
                <option value="6">6 cuotas</option>
                <option value="9">9 cuotas</option>
                <option value="12">12 cuotas</option>
            </select>
        `
        document.getElementById('codigo').innerHTML=`
            <input type="number" class="form-control" id="codigo" placeholder="XXX" aria-label="codigo" required>
        `
        document.getElementById('numero').innerHTML=`
        <input type="number" class="form-control" id="numero" placeholder="XXXX-XXXX-XXXX-XXXX" aria-label="numeroTarjeta" required>
        `
        document.getElementById('mp').innerHTML=``
    } else if (metodo.value === "MercadoPago") {
        document.getElementById('mp').innerHTML=`
        <h5>Enviar deposito a:<span class="text-uppercase"> cobranzas@confbsas.gob.ar</span></h6>
        <h6>1- Colocar en el asunto correo electronico </h6>
        <h6>2- Enviar un correo con los datos del solicitante y la captura del pago realizado</h6>
        `
        document.getElementById('banco-emisor').innerHTML=``
        document.getElementById('numero').innerHTML=``
        document.getElementById('cuotas').innerHTML=``
        document.getElementById('codigo').innerHTML=``
    }
}
/*FUNCION PARA LIMPIAR EL CONTENIDO DEL MODAL*/
function limpiarModal(){    
    document.getElementById('banco-emisor').innerHTML=``
    document.getElementById('numero').innerHTML=``
    document.getElementById('cuotas').innerHTML=``
    document.getElementById('codigo').innerHTML=``
    document.getElementById('mp').innerHTML=``
}