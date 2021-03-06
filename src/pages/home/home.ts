import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
    total : number = 0 ;
    totalAcumulado : number = 0 ;
    historico : number = 0;
    firstNumber : any  ;
    secondNumber : any  ;
	constructor(public navCtrl: NavController) { }

	somar () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
	    this.total = (firstNumber + secondNumber) + this.totalAcumulado;
	    this.historico = firstNumber.toString() + ' + ' + secondNumber.toString() + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}

  	subtrair () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
	    this.total = (firstNumber - secondNumber) ;
	    this.historico = firstNumber.toString() + ' - ' + secondNumber.toString() + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}
 	dividir () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
	    this.total = (firstNumber / secondNumber);
	    this.historico = firstNumber.toString() + ' / ' + secondNumber.toString() + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}

 	multiplicar () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
	    this.total = (firstNumber * secondNumber);
	    this.historico = firstNumber.toString() + ' * ' + secondNumber.toString() + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}

   	raiz () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    this.total = Math.sqrt(firstNumber);
	    this.historico = 'raiz(' + firstNumber.toString() + ')' + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}

   	seno () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    this.total = Math.sin(firstNumber);
	    this.historico = 'sen(' + firstNumber.toString() + ')' + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}
   	cosseno () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    this.total = Math.cos(firstNumber);
	    this.historico = 'cos(' + firstNumber.toString() + ')' + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}
   	pi () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    this.total = Math.PI*firstNumber;
	    this.historico = 'PI * (' + firstNumber.toString() + ')' + ' = ' + this.total.toString();
	    console.log("clicked!");
  	}
	salvarTotal() {
    	this.totalAcumulado = this.total;
  	}

  	trocaSinal() {
  		let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
  		this.firstNumber = -1 * firstNumber;
  		this.historico = '-1 * (' + firstNumber.toString() + ')' + ' = ' + this.firstNumber.toString();
  	}

  	clear() {
  		this.firstNumber = null;
  		this.secondNumber = null;
  		this.total = null;
  		this.totalAcumulado = null;
  		this.historico = null;
  	}
}