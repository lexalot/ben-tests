// Returns a name depending on if your animal is a cat or dog
function nameSelector(animal) {
  switch (animal) {
    case "dog":
      return "Rover";
    case "cat":
      return "Felix";
    default:
      return "what kind of animal is that?";
  }
}

module.exports = nameSelector;
