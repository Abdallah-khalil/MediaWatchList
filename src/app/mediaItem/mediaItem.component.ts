import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mw-media-item',
    templateUrl: './mediaItem.component.html',
    styleUrls: ['./mediaItem.component.css']
})

export class MediaItemComponent implements OnInit {
    constructor() { }
    @Input() mediaItem;
    @Output() delete: EventEmitter<{}> = new EventEmitter();

    onDelete(): void {
        this.delete.emit(this.mediaItem);
    }

    ngOnInit() {
    }

}
