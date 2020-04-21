import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventWrapComponent } from './event-wrap/event-wrap.component';
import { SportEventRoutingModule } from './sport-event-routing.module';
import { EventSingleComponent } from './event-wrap/event-single/event-single.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    EventWrapComponent,
    EventSingleComponent,
    OrderPageComponent,
    OrderSuccessComponent,
  ],
  imports: [
    CommonModule,
    SportEventRoutingModule,
    SharedModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class SportEventModule {}
