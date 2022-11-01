import { LogginService } from './../loggin.service';
import { ShoppingListRouting } from './shopping-list-routing-module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [ShoppingListRouting, FormsModule, SharedModule],
  exports: [ShoppingListComponent, ShoppingEditComponent],
  /* providers: [LogginService], */
})
export class ShoppingListModule {}
