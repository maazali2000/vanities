import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'van-pvc-vanities',
  templateUrl: './pvc-vanities.component.html',
  styleUrl: './pvc-vanities.component.css',
})
export class PvcVanitiesComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
