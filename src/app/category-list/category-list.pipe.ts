import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categoryList"
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: any[], args?: any): string[] {
    const categories: string[] = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories;
  }
}
