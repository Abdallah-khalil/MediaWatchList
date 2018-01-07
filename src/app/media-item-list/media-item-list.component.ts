import { Component, OnInit } from "@angular/core";
import { MediaItemService } from "./media-item.service";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"]
})
export class MediaItemListComponent implements OnInit {
  mediaItems: any[];
  constructor(private mediaItemSvc: MediaItemService) {}

  onMediaItemDelete(mediaItem): void {
    this.mediaItemSvc.delete(mediaItem);
  }

  getMediaItems(): void {
    this.mediaItems = this.mediaItemSvc.get();
  }

  ngOnInit() {
    this.getMediaItems();
  }
}
