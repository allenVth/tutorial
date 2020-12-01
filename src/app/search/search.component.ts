import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public animalThing:any;
  public elem1: any;
  constructor(public animalService:MyServiceService, public is:InfoService) { }
  private urlp1:string = 'https://pokeapi.co/api/v2/pokemon/';
  public urlBreed:string = '';
  public fullUrl:string = "";
  public imgUrl:string = "";
  public strMsg:string = "";
  
  isShowingStats:boolean = true;
  isShowingAbility:boolean = false;
  isShowingMoves:boolean = false;
  mySelection:string = "";
  public pName:string = "";
  rawr:string = "Hello";
  myVar:boolean = true;

  

  ngOnInit(): void {
  }

  click(){

    console.log(this.urlBreed);
    this.fullUrl = this.urlp1 + this.urlBreed;
    this.animalService.getPokemon(this.fullUrl).subscribe(response =>{
      this.animalThing = response;
      console.log(this.animalThing);
      //console.log("hello" +this.animalThing.sprites.front_default)
      this.setAbility(this.animalThing);
      this.setStat(this.animalThing);
      this.setMove(this.animalThing);
      this.setName(this.animalThing);
      this.setImg(this.animalThing);
      this.setGif();

      

    },
    error => alert('Not a valid pokemon name'))
  }



  showStats(){
    this.mySelection = "stats";
  }

  showAbilities(){
    this.mySelection = "abilities";
    
  }

  showMoves(){
    this.mySelection = "moves";
  }

  setName(animal:any){
    this.is.setPokemonName(animal);
  }

  setImg(animal:any){
    this.is.setImage(animal);
    this.imgUrl = this.is.imageFullUrl;
  }


  setGif(){
    this.is.setGif();
  }

  setAbility(animal:any){
    this.is.setAbilities(animal);
  }

  setMove(animal:any){
    this.is.setMoves(animal);
  }

  setStat(animal:any){
    this.is.setStats(animal);
  }
}
