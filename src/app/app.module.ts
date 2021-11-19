import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { TelefoneBrasileiroPipe } from './telefone-brasileiro.pipe';
import { TelefoneAmericanoPipe } from './telefone-americano.pipe';
import { PlacaAntigaPipe } from './placa-antiga.pipe';
import { PlacaMercosulPipe } from './placa-mercosul.pipe';
import { NomeAbntPipe } from './nome-abnt.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    TelefoneBrasileiroPipe,
    TelefoneAmericanoPipe,
    PlacaAntigaPipe,
    PlacaMercosulPipe,
    NomeAbntPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
