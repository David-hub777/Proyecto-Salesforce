({
    activarGrabacion : function(component, event, helper) {
        console.log("Inicializando Eventos...");
        var evento = $A.get("e.c:comenzarGrabar");
        // var grabar = evento.getParam("grabar");
        var grabar = event.getParam("grabar");
        console.log('grabando1: ' + component.get("v.egrabar"));
        console.log('grabando2: ' + grabar);
        component.set("v.egrabar", grabar);
        console.log('grabando1: ' + component.get("v.egrabar"));
        component.set("v.secuencia", "");
        // var prueba = event.getParam("grabar");
        // console.log('grabar: ' + prueba);
        
        // var grabar = evt.getParam("grabando");
        // console.log('grabando: ' + grabar);
    },
    manejarEvento0 : function(component, event, helper) {
        var grabar = component.get("v.egrabar");
        console.log('grabando2: ' + grabar);
        var evt = $A.get("e.c:Evento");
        var valorExistente = component.get("v.secuencia");
        var valorNuevo = valorExistente + "0";
        component.set("v.secuencia", valorNuevo);
        if(grabar){
            console.log("evt: " + evt);
            evt.setParams({
                "pasar": valorNuevo
            });
            evt.fire();
        }
        console.log('valor: ' + evt.getParam('pasar'));
        
        // event.set("v.valorEvento", valorPasado);
    },
    manejarEvento1 : function(component, event, helper) {
        var grabar = component.get("v.egrabar");
        console.log('grabando2: ' + grabar);
        var evt = $A.get("e.c:Evento");
        var valorExistente = component.get("v.secuencia");
        var valorNuevo = valorExistente + "1";
        component.set("v.secuencia", valorNuevo);
        if(grabar){
            console.log("evt: " + evt);
            evt.setParams({
                "pasar": valorNuevo
            });
            evt.fire();
        }
        console.log('valor: ' + evt.getParam('pasar'));
    }
})
