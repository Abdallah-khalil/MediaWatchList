import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "../media-item-form/media-item-form.component";
import { MediaItemListComponent } from "../media-item-list/media-item-list.component";

const routes: Routes = [
  { path: "add", component: MediaItemFormComponent },
  { path: ":meduim", component: MediaItemListComponent },
  { path: "", redirectTo: "All", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
