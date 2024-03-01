({
    myAction : function(component, event, helper) {

    },
    comenzarGrabar : function(component, event, helper) {
        // var evt = $A.get("e.c:Evento");
        // var grabando = evt.getParam("grabando");
        // evt.setParams({
        //     "grabando": true
        // });

        var evento = $A.get("e.c:comenzarGrabar");
        evento.setParams({
            "grabar": true
        });
        evento.fire();


        var grabar = evento.getParam("grabar");
        console.log('grabar2: ' + grabar);
        alert("Comenzar a grabar");
    },
    pararGrabar: function(component, event, helper) {
        var evento = $A.get("e.c:comenzarGrabar");
        evento.setParams({
            "grabar": false,
            "pasar": ""
        });
        evento.fire();
        // event.setParams();
        var secuenciasActuales = component.get("v.cadenaGrabacion");
        secuenciasActuales.push(component.get("v.cadenadelaGrabacion")+",");
        component.set("v.cadenaGrabacion", secuenciasActuales);
        component.set("v.cadenadelaGrabacion", "");
    },
    grabacion: function(component, event, helper) {
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        var indice = 0;
        function temporizador() {
            if (indice < cadenaGrabacion.length) {
                console.log(cadenaGrabacion[indice]);
                indice++;
                setTimeout(temporizador, 1000); 
            }
        }
        temporizador();
    },
    guardar: function(component, event, helper) {
        var insertCadenaApex = component.get("c.insertCadena"); 
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        var indice = 0;

        function realizarLlamada() {
            if (indice < cadenaGrabacion.length) {
                insertCadenaApex.setParams({
                    "cadena": cadenaGrabacion[indice]
                });
                insertCadenaApex.setCallback(this, function(response) {
                    var state = response.getState();
                    if (state === "SUCCESS") {
                        indice++;
                        setTimeout(realizarLlamada, 500); // Ajusta el tiempo de espera según sea necesario
                    } else {
                        console.error("Error al insertar cadena");
                    }
                });
                $A.enqueueAction(insertCadenaApex);
            } else {
                alert("Exito al guardar");
            }
        }

        // Listar lo base de datos
        var getListCadenas = component.get("c.getListCadenas");

        getListCadenas.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var accounts = response.getReturnValue();
                component.set("v.cadenaInicial", accounts);
                alert("Success loading WebPage")
            }
        });

        $A.enqueueAction(getListCadenas);
        
    },
    borrarPantalla: function(component, event, helper) {
        var cadenaGrabacion = component.get("v.cadenaGrabacion");
        cadenaGrabacion.splice(0, cadenaGrabacion.length);
        component.set("v.cadenaGrabacion", cadenaGrabacion);
    },
    manejarEvento: function(component, event, helper) {
        var valorPasar = event.getParam("pasar");
        var secuenciasActuales = component.get("v.cadenaGrabacion");
        // if (event.getParam("v.grabar")) {
            // secuenciasActuales.push(valorPasar);
            // component.set("v.cadenaGrabacion", secuenciasActuales);
            component.set("v.cadenadelaGrabacion", valorPasar);
        // }
        console.log('valorPasar: ' + valorPasar);
    },
    doInit: function(component) {
    
        var getListCadenas = component.get("c.getListCadenas");

        getListCadenas.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var accounts = response.getReturnValue();
                component.set("v.cadenaInicial", accounts);
                alert("Success loading WebPage")
            }
        });

        $A.enqueueAction(getListCadenas);

    }

})
