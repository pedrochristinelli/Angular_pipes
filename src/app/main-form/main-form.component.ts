import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor() { }

  inputTelefoneBr : string = "";
  inputTelefoneUsa : string = "";
  inputPlacaAntiga : string = "";
  inputPlacaMercoSul : string = "";
  inputNome : string = "";

  ngOnInit(): void {
  }

}