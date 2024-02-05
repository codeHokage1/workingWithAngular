import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../entities/movie.entity';

@Component({
  selector: 'app-movies-category',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies-category.component.html',
  styleUrl: './movies-category.component.css'
})
export class MoviesCategoryComponent {

  @Input() categoryTitle: string = '';
  @Input() movies: Movie[] = [];

  ngOnInit(): void {
    console.log(`Movies in ${this.categoryTitle}`, this.movies)
  }
}
