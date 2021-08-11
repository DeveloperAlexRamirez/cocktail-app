import React, {FlatList, Text, View} from 'react-native';

export const showIngredients = (datos: any) => {
  let ingredientes = [];
  for (let i = 1; i <= 16; i++) {
    if (datos[`strIngredient${i}`]) {
      // console.log(datos[`strIngredient${i}`]);
      // console.log(datos[`strMeasure${i}`]);

      ingredientes.push(datos[`strIngredient${i}`]);

      //           <Text>{datos[`strMeasure${i}`]}</Text>
    }
    // console.log(ingredientes);
  }
  return ingredientes;
  // console.log(ingredientes);
  // return ingredientes;
};
// if (datos[`strIngredient${i}`]) {
//   console.log(i);
//   ingredientes.push(datos[`strIngredient${i}`]);
// }
// console.log(ingredientes);
// return ingredientes;
// export const showIngredients = (datos: any) => {
//   let ingredientes = [];
//   for (let i = 1; i <= 16; i++) {
//     if (datos) {
//       console.log(i);
//       ingredientes.push(
//         <View>
//           {datos[`strIngredient${i}`]}
//           <Text>{datos[`strMeasure${i}`]}</Text>
//         </View>,
//       );
//     }
//   }
//   console.log(ingredientes);
//   return ingredientes;
// };
