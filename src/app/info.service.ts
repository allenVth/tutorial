import { Injectable } from '@angular/core';
//import { ADDRGETNETWORKPARAMS } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public abilities:string[] = [];
  public moves:string[] = [];
  public statsNum:string[] = [];
  public statsName:string[] = [];
  public statsCombined:string[] = [];
  public pokemonName:string = "";
  public imageFullUrl:string = "";
  public gifBaseUrl:string = 'http://play.pokemonshowdown.com/sprites/xyani/';
  public gifFullUrl:string ="";



  constructor() { }

 


  setGif(){
    this.gifFullUrl = this.gifBaseUrl + this.pokemonName + ".gif";
    
  }

  setImage(animal:any){
    this.imageFullUrl = animal.sprites.other["official-artwork"].front_default;
  }

  setAbilities(animal:any){
    this.abilities.length = 0;      //clear array
    for(let abilities of animal.abilities){
      console.log("This is before the push: " +abilities.is_hidden);
      this.abilities.push(abilities.ability.name);
      console.log("After pushing all abilities:  " +this.abilities);
    }
    

  }

  setMoves(animal:any){
    this.moves.length = 0;
    let counter:number = 0;
    for (let moves of animal.moves) {
      console.log("move " + moves.move.name);
      this.moves.push(moves.move.name);
      //counter++;
      // if (counter >= 4)
      //   break;

    }
  }

  setStats(animal:any){
    // this.statsNum.length = 0;
    // for(let stats of animal.stats){
    //   this.statsNum.push(stats.base_stat);
    // }

    // // this.statsNum.length = 0;
    // for(let stats of animal.stats){
    //   console.log("stat name "+ stats.stat.name);
    //   this.statsName.push(stats.stat.name);
    // }
    this.statsCombined.length = 0;
    let strMsg:string = "";
    for(let stats of animal.stats)
    {
      strMsg = stats.stat.name +": "+ stats.base_stat;
      this.statsCombined.push(strMsg);
    }
    
  }

  setPokemonName(animal:any){
    this.pokemonName = animal.species.name;
    
  }
}
