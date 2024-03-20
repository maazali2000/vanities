import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
interface Size {
  value: number;
  viewValue: number;
}
interface Material {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'van-pvc-vanities',
  templateUrl: './pvc-vanities.component.html',
  styleUrl: './pvc-vanities.component.css',
})
export class PvcVanitiesComponent {
  sizes: Size[] = [
    { value: 24 - 0, viewValue: 24 },
    { value: 32 - 1, viewValue: 32 },
    { value: 40 - 2, viewValue: 40 },
  ];
  materials: Material[] = [
    { value: 'Aluminium - 0', viewValue: 'Aluminium' },
    { value: ' Pvc- 1', viewValue: 'Pvc' },
  ];
}
