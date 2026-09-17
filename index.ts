/*
  Test de logique candidat - version courte
  Focus : objets + tableaux + fondamentaux TypeScript
*/

/* --- 1. Bases sur les objets --- */

const fruits = {
  apple: 322,
  orange: 56,
  banana: 29,
  pear: 18,
};

// 1.1 - Trier les fruits par quantité croissante.
// Résultat attendu: [{ key: "pear", value: 18 }, { key: "banana", value: 29 }, { key: "orange", value: 56 }, { key: "apple", value: 322 }]
const sortedFruits = "todo"
console.log("1.1 - Fruits triés:", sortedFruits);


// 1.2 - Calculer la somme totale des quantités de fruits.
// Résultat attendu: 322 + 56 + 29 + 18 = 425
const totalFruits = "todo"
console.log("1.2 - Somme totale des fruits:", totalFruits);


const vegetables = {
  carrot: 77,
  tomato: 209,
  broccoli: 43.5,
  lettuce: 64,
};

// 1.3 - Garder uniquement les légumes dont la quantité est un entier valide.
// Résultat attendu: { carrot: 77, lettuce: 64, tomato: 209 }
const integerVegetables = "todo"
console.log("1.3 - Légumes avec quantités entières:", integerVegetables);


// 1.4 - Fusionner les objets fruits et légumes en un seul objet unique, en gardant toutes les clés.
// Résultat attendu: { apple: 322, orange: 56, banana: 29, pear: 18, carrot: 77, tomato: 209, lettuce: 64 }
const mergedFruitsAndVegetables = "todo"
console.log("1.4 - Fruits et légumes fusionnés:", mergedFruitsAndVegetables);



/* --- 2. Manipulation de tableaux utilisateur --- */

const users = [
  { id: 1, name: "Alice", age: 28, active: true, city: "Paris" },
  { id: 2, name: "Bob", age: 17, active: false, city: "Lyon" },
  { id: 3, name: "Charlie", age: 34, active: true, city: "Marseille" },
  { id: 4, name: "Diana", age: 23, active: true, city: "Paris" },
  { id: 5, name: "Ethan", age: 41, active: false, city: "Nice" },
  { id: 6, name: "Fiona", age: 19, active: true, city: "Lille" },
];

// 2.1 - Garder uniquement les utilisateurs actifs, triés par âge décroissant sous forme de chaîne de noms.
// Résultat attendu: "Charlie, Alice, Diana, Fiona"
const activeUsers = "todo"
const activeUserNamesSortedByAgeDesc = "todo"
console.log("2.1 - Utilisateurs actifs sous forme de chaîne de noms triés par âge décroissant:", activeUserNamesSortedByAgeDesc);


// 2.2 - Calculer l'âge moyen des utilisateurs actifs.
// Résultat attendu: (28 + 34 + 23 + 19) / 4 = 26
const averageAgeOfActiveUsers = "todo"
console.log("2.2 - Âge moyen des utilisateurs actifs:", averageAgeOfActiveUsers);


// 2.3 - Extraire les villes uniques des utilisateurs actifs, triées par ordre alphabétique.
// Résultat attendu: ["Lille", "Marseille", "Paris"]
const activeCities = "todo"
console.log("2.3 - Villes uniques des utilisateurs actifs:", activeCities);

// 2.4 - Trouver le nom du plus jeune utilisateur actif.
// Résultat attendu: "Fiona"
const juniorActiveUser = "todo"
console.log("2.4 - Nom du plus jeune utilisateur actif:", juniorActiveUser);

// 3 - Typescript (bonus): Rendez-vous sur https://typescript-exercises.github.io/