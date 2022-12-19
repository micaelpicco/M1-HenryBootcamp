var objetito = {
  nombre: 'Objeto',
  log: function () {
    this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
    console.log(this); // obj
    nombre;
    var cambia = function (str) {
      this.nombre = str; // Uno esperaria que this sea `obj`
        console.log(this)
    };

    cambia('Hoola!!');
    console.log(this);
  },
};
console.log(objetito.nombre);
objetito.log();
console.log(objetito.nombre);