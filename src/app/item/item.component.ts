import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: {index: number, name: string};

  @Output() itemDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

	onDeleteTask() {
		this.itemDeleted.emit(this.item.index);
	}

}
