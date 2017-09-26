import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initPipe'
})
export class InitPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
