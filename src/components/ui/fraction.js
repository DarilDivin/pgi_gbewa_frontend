const decimalToFraction = (decimal) => {
    const tolerance = 1.0E-6;
    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let b = decimal;
    do {
        const a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);
    return `${h1}/${k1}`;
}

const fractionToPercentage = (fraction) => {
    // Séparer le numérateur et le dénominateur
    const [numerator, denominator] = fraction.split('/').map(Number);
    
    // Calculer le pourcentage
    const percentage = (numerator / denominator) * 100;
    
    // Retourner le pourcentage en tant que nombre entier
    return Math.round(percentage);
}

// Générer une liste de classes CSS pour la largeur
// const widthClasses = Array.from({ length: 101 }, (_, i) => `.width-${i} { width: ${i}%; }`);

// Afficher les classes générées
// console.log(widthClasses.join('\n'));


export {
    decimalToFraction, 
    fractionToPercentage
}