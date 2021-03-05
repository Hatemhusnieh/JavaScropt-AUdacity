var eatsPlants = false;
var eatsAnimals = false;
/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = eatsPlants&&eatsAnimals ?("omnivore"):(eatsPlants&&!eatsAnimals?("herbivore"):(!eatsPlants&&eatsAnimals?("carnivore"):"undefined"))

console.log(category);
