import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Output() personClick = new EventEmitter<any>();
  @Input() persons: any[];
  // persons: any[] = ["mosha", "miryam", "rachel", "david", "chava", "rina"];
  constructor() { }

  ngOnInit(): void {
  }

  personsClick(person: any) {
    this.personClick.emit(person);
  }

}
