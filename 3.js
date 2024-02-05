//4.write a class to calculate the uber price.


class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier = 1) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceMiles, durationMinutes) {
      const fareBeforeSurge = this.baseFare + (this.costPerMile * distanceMiles) + (this.costPerMinute * durationMinutes);
      const totalFare = fareBeforeSurge * this.surgeMultiplier;
      return totalFare;
    }
  }
  
  const calculator = new UberPriceCalculator(2.5, 1.5, 0.25, 1.2);  
  const distanceMiles =   10; 
  const durationMinutes = 20; 
  
  const price = calculator.calculatePrice(distanceMiles, durationMinutes);
  console.log(`Your Uber ride will cost $${price.toFixed(2)}`);

  //output; Your Uber ride will cost $27.00