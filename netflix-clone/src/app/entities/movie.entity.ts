export interface Movie {
   id: number;
   title: string;
   overview: string;
   poster_path: string;
   video: boolean;
   genre_ids: [];
   adult: boolean;
   videoKey?: string;
   videoUrls?: string[];
}