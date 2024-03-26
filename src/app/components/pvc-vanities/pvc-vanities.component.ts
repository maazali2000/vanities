import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
interface Size {
  value: number;
  viewValue: number;
}

interface Quality {
  name: string;
  value: number;
}
@Component({
  selector: 'van-pvc-vanities',
  templateUrl: './pvc-vanities.component.html',
  styleUrl: './pvc-vanities.component.css',
})
export class PvcVanitiesComponent implements OnInit {
  selectedsize: Size | undefined;
  selectedQuality: Size | undefined;
  sizes: Size[] = [
    { value: 24, viewValue: 24 },
    { value: 32, viewValue: 32 },
    { value: 40, viewValue: 40 },
  ];
  qualities: Quality[] | undefined = [
    { name: 'Normal', value: 0 },
    { name: 'Standard', value: 1 },
    { name: 'Premium', value: 2 },
  ];;
 

  ngOnInit() {
  }
}
