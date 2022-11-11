/**
 * This class creates a vehicle
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-11-11
 */

import Vehicle from './Vehicle'

class Bike extends Vehicle {
  // Cadence field
  private cadence = 0

  // getter and setter
  public status(): void {
    super.status()
    console.log(`--> Cadence: ${this.cadence}\n`)
  }

  public getCadence(): number {
    return this.cadence
  }

  // accelerate() method - increases the cadence
  public accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // ringBell() method - prints a bell sound
  public ringBell(): void {
    console.log('Ding ding!\n')
  }
}

export = Bike
