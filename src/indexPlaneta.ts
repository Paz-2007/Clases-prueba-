import { Planeta } from "./Planeta";

const planetas: Planeta[] = [];

for (let i = 1; i <= 100; i++) { 
    //Crea 100 planetas con nombre y masa, avanza de 1 en 1
    const planeta = new Planeta(`Planeta ${i}`, i); 
    //nombra a los planetas como "Planeta i" siendo i el numero
    // y les asigna una masa igual al número i
    planetas.push(planeta);
}

