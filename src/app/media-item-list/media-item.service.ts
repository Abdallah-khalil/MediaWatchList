import { Injectable } from "@angular/core";

@Injectable()
export class MediaItemService {
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
      },
      {
        id: 2,
        name: "The Small Tall",
        year: 2017,
        meduim: "Series",
        category: "Sceience Fiction",
        watchedOn: 1294166565384,
        isFavorite: false
      },
      {
        id: 3,
        name: "Fast 5",
        year: 2016,
        meduim: "Series",
        category: "Drama",
        watchedOn: 1294166565384,
        isFavorite: true
      },
      {
        id: 4,
        name: "Fast 5",
        year: 2016,
        meduim: "Series",
        category: "Action",
        watchedOn: 1294166565384,
        isFavorite: true
      },
      {
        id: 5,
        name: "Fast 5",
        year: 2016,
        meduim: "Series",
        category: "Drama",
        watchedOn: 1294166565384,
        isFavorite: true
      }
    ];
  }

  get(): any[] {
    return this.mediaItems;
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
