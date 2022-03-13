import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl | undefined;
  @Input() fieldName: string | undefined;
  @Input() fieldType: string | undefined;
  @Input() fieldMax: number | undefined;
  @Input() fieldMin: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
