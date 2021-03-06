function guardarDato(){
    var nombre=document.getElementById("nombre").value;
    var dni=document.getElementById("dni").value;
    var movil=document.getElementById("movil").value;
    var email=document.getElementById("email").value;
    var direccion=document.getElementById("direccion").value;
    
    const datos={
        'dni':dni,
        'movil': movil,
        'email': email,
        'direccion': direccion,
    }

    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value="";
    document.getElementById("dni").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    document.getElementById("direccion").value="";
    actualizarDatos();
}
function recuperarDato(){    
    var nombre=document.getElementById("nombre").value;
    localStorage.getItem(nombre); 

    let datos=localStorage.getItem(nombre);
    datos=JSON.parse(datos);

    document.getElementById("dni").value=datos.dni;
    document.getElementById("movil").value=datos.movil;
    document.getElementById("email").value=datos.email;
    document.getElementById("direccion").value=datos.direccion;
}
function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}
function actualizarDatos(){
    var registro="";
    if(localStorage.length==0){
        registro +='<li class="vacio"><br>Vacio</li>';
    } 
    else{ 
        console.log(localStorage);      
        for(var i=0; i<=localStorage.length -1; i++){
            var key=localStorage.key(i);
            let datos=localStorage.getItem(key);
            datos=JSON.parse(datos);
            registro+=`<li>
            <span class="nom"> ${key} </span>
            <span class="nom"> ${datos.dni} </span>  
            <span class="nom"> ${datos.movil} </span>  
            <span class="nom2"> ${datos.email} </span> 
            <span class="nom3"> ${datos.direccion} </span> 
            </li><br>`; 
}   
    }
    document.getElementById('contactos').innerHTML=registro;
}