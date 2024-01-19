class Inversor {
    constructor(nombre, edad, capacidadAmortizacion, tienePortafolio, ciudad, interes, cantidadFracciones) {
      this.nombre = nombre;
      this.edad = edad;
      this.capacidadAmortizacion = capacidadAmortizacion;
      this.tienePortafolio = tienePortafolio;
      this.ciudad = ciudad;
      this.interes = interes;
      this.cantidadFracciones = cantidadFracciones;
    }
  
    invertir() {
      console.log(`${this.nombre} ha decidido invertir.`);
    }
  
    cancelarInversion() {
      console.log(`${this.nombre} ha cancelado su inversión.`);
    }
  
    comprarFraccionPropiedad() {
      console.log(`${this.nombre} ha comprado una fracción de la propiedad.`);
      this.cantidadFracciones++;
    }
  
    acompañamiento() {
      console.log(`${this.nombre} ha solicitado acompañamiento en sus inversiones.`);
    }
  
    educarseFrenteAInversiones() {
      console.log(`${this.nombre} está recibiendo educación en inversiones.`);
    }
  }
  
  
  const victor = new Inversor("Victor", 23, 2000000, true, "Bogotá", "Inversor", 2);
  const anaSofia = new Inversor("Ana Sofia", 20, 5000000, true, "Medellín", "Comprador", 0);
  const maria1 = new Inversor("Maria", 31, 4200000, false, "Bucaramanga", "Inversor", 0);
  const samuel = new Inversor("Samuel", 47, 221900000, true, "Cali", "Comprador", 3);
  const camila = new Inversor("Camila", 21, 400000, false, "Medellín", "Inversionista", 1);
  const maria2 = new Inversor("Maria", 18, 2000000, true, "México", "Inversionista", 2);
  const oscar = new Inversor("Oscar", 42, 32000000, true, "Perú", "Inversionista", 26);
  const manuela = new Inversor("Manuela", 21, 1000000, false, "Santander", "Inversionista", 2);
  const isabela = new Inversor("Isabela", 19, 730000, false, "Medellín", "Inversionista", 1);
  const santiago = new Inversor("Santiago", 29, 4200000, false, "Valledupar", "Inversionista", 3);
  
  
//   victor.invertir();
//   anaSofia.cancelarInversion();
//   camila.comprarFraccionPropiedad();
//   oscar.acompañamiento();
//   manuela.educarseFrenteAInversiones();

class cliente{
    constructor(nombre,edad,comprobacionMetodoDePago,filtroDeBusqueda,ciudad,interesPorElInmueble){}
}