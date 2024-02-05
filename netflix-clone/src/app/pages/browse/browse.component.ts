import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MovieApiService } from '../../services/movie-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartApiService } from '../../services/cart-api.service';
import { HeaderComponent } from '../../components/header/header.component';
import { MoviesCategoryComponent } from '../../components/movies-category/movies-category.component';
import { Movie } from '../../entities/movie.entity';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    MoviesCategoryComponent,
  ],
  providers: [LoginService, MovieApiService, CartApiService],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  constructor(
    private movieApi: MovieApiService,
    public domSanitise: DomSanitizer
  ) {}

  nowPlayingMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  bannerMovie!: Movie;
  bannerMovieVideos: any[] = [];

  ngOnInit(): void {
    this.movieApi.getNowPlayingMovies().subscribe((movies) => {
      this.nowPlayingMovies = movies.results;
    });

    this.movieApi.getUpcomingMovies().subscribe((movies) => {
      this.upcomingMovies = movies.results;
      this.bannerMovie = this.upcomingMovies[0];
      // console.log('Banner movie', this.bannerMovie);
    });

    this.movieApi.getTopratedMovies().subscribe((movies) => {
      this.topRatedMovies = movies.results;
    });

    // this.nowPlayingMovies.map(movie => {
    //   this.movieApi.getBannerVideo(movie.id).subscribe(mov => {
    //     movie = mov.results;
    //   }) 
    // })

    // this.upcomingMovies.map(movie => {
    //   this.movieApi.getBannerVideo(movie.id).subscribe(mov => {
    //     movie = mov.results;
    //   }) 
    // })

    // this.topRatedMovies.map(movie => {
    //   this.movieApi.getBannerVideo(movie.id).subscribe(mov => {
    //     movie = mov.results;
    //   }) 
    // })



    this.movieApi.getBannerVideo(this.bannerMovie.id).subscribe((movies) => {
      this.bannerMovieVideos = movies.results;
    });
  }
}
