import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule, MatChipsModule } from '@angular/material';


@NgModule({
    imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
    exports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
    declarations: [],
    providers: [],
})
export class CustomAngularMaterialModule { }
