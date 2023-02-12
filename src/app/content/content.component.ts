import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() imgFilm!: string ;
  @Input() nomFilm!: string;
  @Input() enSalle!: Boolean;
  @Input() acteurs!: String[];
  @Input() details!: Object;
  
  showSynopsis = false;

  onSynopsisClick() {
    this.showSynopsis = !this.showSynopsis;
  }
}
