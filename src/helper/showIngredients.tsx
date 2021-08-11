export const showIngredients = (datos: any) => {
  let ingredientes = [];
  for (let i = 1; i <= 16; i++) {
    if (datos[`strIngredient${i}`]) {
      ingredientes.push(datos[`strIngredient${i}`]);
      //           <Text>{datos[`strMeasure${i}`]}</Text>
    }
  }
  return ingredientes;
};
