import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"]
})
export class MediaItemListComponent implements OnInit {
  mediaItems: any[];
  constructor() {
    this.mediaItems = [
      {
        id: 1,
        name: "Firebug",
        year: 2016,
        meduim: "Series",
        category: "Sceience Fiction",
        watchedOn: 1294166565384,
        isFavorite: false
      }, {
        id: 2,
        name: "The Small Tall",
        year: 2017,
        meduim: "Series",
        category: "Sceience Fiction",
        watchedOn: 1294166565384,
        isFavorite: false
      }, {
        id: 3,
        name: "Fast 5",
        year: 2016,
        meduim: "Series",
        category: "Action",
        watchedOn: 1294166565384,
        isFavorite: true
      }
    ];
  }

  onMediaItemDelete(mediaItem): void {

  }

  ngOnInit() {
    console.log(this.mediaItems);
  }

}
