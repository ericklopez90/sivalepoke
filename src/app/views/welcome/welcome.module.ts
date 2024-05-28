import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';

// route
import { WelcomeRoutingModule } from './welcome-routing.module';

// modules
import { CardsModule } from 'src/app/components/cards/cards.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    CardsModule,
    PaginatorModule
    
  ],
  exports:[WelcomeComponent]
})

export class WelcomeModule { }
