import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  persons: any[] = ["mosha", "miryam", "rachel", "david", "chava", "rina"];

  constructor() { }

  ngOnInit(): void {
  }

  onPersonClick(person: any) {
    alert(person);
  }

}
