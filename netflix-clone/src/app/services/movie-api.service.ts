import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../entities/movie.entity';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  moviesBaseUrl = 'https://api.themoviedb.org/3/movie';
  imaagesBaseUrl = 'https://image.tmdb.org/t/p/original';

  private apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFiMTZjMzQ5MmM4ZTZmN2JhYmQ0YjNlMTljMmRhOSIsInN1YiI6IjY1YmUxZTBiNmM0NDljMDE3YzhkMDc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RTmQfwyuUyElLEow1xmgoxodL-oG7YX15JWSUBAJ94';

  getNowPlayingMovies(): Observable<any> {
    return this.http.get(`${this.moviesBaseUrl}/now_playing`, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        accept: 'application/json',
      },
    });
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.moviesBaseUrl}/upcoming`, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        accept: 'application/json',
      },
    });
  }

  getTopratedMovies(): Observable<any> {
    return this.http.get(`${this.moviesBaseUrl}/top_rated`, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        accept: 'application/json',
      },
    });
  }

  getBannerVideo(movieId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        accept: 'application/json'
      }
    });
  }
}
