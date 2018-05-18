import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      if (it.name && it.name.toLowerCase().includes(searchText)) {
        return it.name.toLowerCase().includes(searchText);
      } else if (it.details && it.details.toLowerCase().includes(searchText)) {
        return it.details.toLowerCase().includes(searchText);
      } else if (it.description && it.description.toLowerCase().includes(searchText)) {
        return it.description.toLowerCase().includes(searchText);
      } else if (it.full_name && it.full_name.toLowerCase().includes(searchText)) {
        return it.full_name.toLowerCase().includes(searchText);
      } else {
        return false;
      }
    });
  }
}
