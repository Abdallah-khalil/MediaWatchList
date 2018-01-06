import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./mediaItem/mediaItem.component";
import { CustomAngularMaterialModule } from "./AngularMaterial/angularMaterial.module";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
