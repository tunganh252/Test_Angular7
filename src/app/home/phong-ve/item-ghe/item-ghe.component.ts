import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe;
  dangChon:boolean = false;
  @Output() eventDatGhe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  datGhe(){
    this.dangChon = !this.dangChon;
    let objGhe = {
      ghe: this.ghe,
      dangChon: this.dangChon
    }
    this.eventDatGhe.emit(objGhe);
  }

}
