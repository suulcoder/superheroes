export default interface Card {
    id? : number,
    powerstats? : {
      combat: number,
      durability: number,
      intelligence: number,
      power: number,
      speed: number,
      strength: number,
    }
    images? : {
      md : string
    },
    name? : string,
    biography? : {
      fullName : string
    }
  }