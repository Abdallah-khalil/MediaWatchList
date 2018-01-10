import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./mediaItem/mediaItem.component";
import { CustomAngularMaterialModule } from "./AngularMaterial/angularMaterial.module";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list/category-list.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form/media-item-form.component";
import { MediaItemService } from "./media-item-list/media-item.service";
import { lookupListToken, lookupList } from "./media-item-list/providers";
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
