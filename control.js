let notaAlumne = prompt(`Ingresar la nota de le alumne, de 1 a 10`)

if (notaAlumne >= 9) {
    alert(`La nota es Excelente`)
}
else if (notaAlumne < 9 && notaAlumne >= 6) {
    alert(`La nota es buena`)
}
else {
    alert(`El examen no está aprobado`)
}

//si hay un solo resultado, se pueden omitir las llaves 
// if (notaAlumne >= 9) alert(`La nota es Excelente`);
