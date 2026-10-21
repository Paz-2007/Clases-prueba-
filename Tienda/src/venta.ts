type Venta = {
  producto: string;
  categoria: "libros" | "tecnologia";
  importe: number;
  pagada: boolean;
};

const ventas: Venta[] = [
  { producto: "Libro TypeScript", categoria: "libros", importe: 25000, pagada: true },
  { producto: "Mouse", categoria: "tecnologia", importe: 18000, pagada: true },
  { producto: "Teclado", categoria: "tecnologia", importe: 45000, pagada: false },
  { producto: "Libro Clean Code", categoria: "libros", importe: 32000, pagada: true },
  { producto: "Monitor", categoria: "tecnologia", importe: 150000, pagada: true },
  { producto: "Auriculares", categoria: "tecnologia", importe: 28000, pagada: false }
];

const importes_ventas_pagadas = ventas
.filter(v=>v.pagada) //filtra las pagadas
.map(v=>v.importe); //obtiene un arreglo de solo los importes de las ventas pagadas

const datos_ventas = ventas
.filter(v => v.pagada) //filtra las pagadas
.map(v => ({ producto: v.producto, importe: v.importe })); //lista las ventas pagadas y sus importes

const facturacion_total = ventas
.filter(v=>v.pagada) //filtra las pagadas
.reduce((acumulador, venta)=>acumulador+venta.importe, 0)  //calcula la facturacion total


const pendientes_pago = ventas
.filter(v=> !v.pagada).length; //cuenta cuantas estan pendientes de pago

const importe_total_pendiente = ventas
.filter(v=> ! v.pagada) //filtra las no pagadas
.reduce((acumulador, venta)=> acumulador + venta.importe, 0); //suma los importes de las ventas no pagadas
