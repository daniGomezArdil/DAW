var nombres = ["pepe", "pepa", "superpepe", "dani"];
var contraseñas = ["pepe", "pepa", 12345, "dani"];
$(document).ready(function() {
  $("#dialog").dialog({
    autoOpen: false,
    width: 400,
    modal: true
  });
  $("#bt2").button();
});

function muestra() {
  if (!$("#dialog").dialog("isOpen")) {
    $("#dialog").dialog("open");
  }
}
$(document).ready(function() {
  $("#btn").click(function() {
    var nombre = $("#nombre").val();
    var pass = $("#pass").val();
    if ((nombre === "") || (pass === "")) {
      $("#nombre").effect("shake", {
        direction: "up",
        times: 3
      });
      $("#pass").effect("shake", {
        direction: "up",
        times: 3
      });
    } else {
      for (var i = 0; i < nombres.length; i++) {
          if ((nombre == nombres[i]) && (pass == contraseñas[i])) {
            alert("Bienvenido" + " " + nombre);
          } else {
            $("#nombre").effect("shake", {
              direction: "up",
              times: 3
            });
            $("#pass").effect("shake", {
              direction: "up",
              times: 3
            });
          }

      }
    }
  });
});
