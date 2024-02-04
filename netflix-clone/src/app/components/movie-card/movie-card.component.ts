import { Component, Input } from '@angular/core';
import { Movie } from '../../entities/movie.entity';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() imageBaseUrl: string = '';

  ngOnInit(): void {
    console.log('movie', this.movie)
  }
}
