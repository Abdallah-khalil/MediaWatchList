import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { TdMediaService } from "@covalent/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { MediaItemService } from "./media-item-list/media-item.service";
@Component({
  // tslint:disable-next-line:component-selector
  selector: "mw-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name: string;
  logoURl: SafeUrl;
  routes: {}[];
  usermenu: {}[];
  mediaItems: {}[];
  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private mediaItemSvc: MediaItemService
  ) {
    this._iconRegistry.addSvgIconInNamespace(
      "assets",
      "logo",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/logo-cap.svg"
      )
    );
  }

  ngOnInit(): void {
    this.name = "Polla";
    this.routes = [
      {
        icon: "home",
        route: "/All",
        title: "Home"
      },
      {
        icon: "library_books",
        route: "/Movies",
        title: "Movies"
      },
      {
        icon: "color_lens",
        route: "/Series",
        title: "Series"
      }
    ];

    this.usermenu = [
      {
        icon: "swap_horiz",
        route: ".",
        title: "Switch account"
      },
      {
        icon: "tune",
        route: ".",
        title: "Account settings"
      },
      {
        icon: "exit_to_app",
        route: ".",
        title: "Sign out"
      }
    ];

    this.mediaItems = this.mediaItemSvc.get();
  }
}
