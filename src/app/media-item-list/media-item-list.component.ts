import { Component, OnInit, OnDestroy } from "@angular/core";
import { MediaItemService } from "./media-item.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"]
})
export class MediaItemListComponent implements OnInit, OnDestroy {
  mediaItems: any[];
  paramSubscription: Subscription;
  constructor(
    private mediaItemSvc: MediaItemService,
    private activatedRoute: ActivatedRoute
  ) {}

  onMediaItemDelete(mediaItem): void {
    this.mediaItemSvc.delete(mediaItem);
  }

  getMediaItems(): void {
    this.mediaItems = this.mediaItemSvc.get();
  }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
      let medium = params["meduim"];
      if (medium.toLowerCase()) {
        medium = "";
      }
      this.getMediaItems();
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
