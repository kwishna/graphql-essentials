export class RandomDie {
    constructor(numSides) {
        this.numSides = numSides; // The number of sides of the die
    }

    rollOnce() {
        // Generates a random number between 1 and the number of sides
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    roll({ numRolls }) {
        // Rolls the die `numRolls` times
        const output = [];
        for (let i = 0; i < numRolls; i++) {
            output.push(this.rollOnce()); // Add each roll result to the array
        }
        return output; // Returns an array of roll results
    }
}
