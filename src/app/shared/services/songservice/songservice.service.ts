import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Song } from '../../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private url = 'http://ec2-3-82-20-188.compute-1.amazonaws.com/api/songs'; //URL to the API, change on different implementation

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
  })
  };

  constructor(private http: HttpClient) { }

  //findAll
  findAll(): Observable<Song[]> {
    return this.http.get<Song[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched songs')),
      catchError(this.handleError<Song[]>('findAll', []))
    )
  }

  //getById
  getById(id: number): Observable<Song> {
    const url = `${this.url}/${id}`;
    return this.http.get<Song>(url).pipe(
      tap(_ => this.log(`fetched song with id=${id}`)),
      catchError(this.handleError<Song>(`getById id=${id}`))
    );
  }

  //getByBand
  getByBand(id: number): Observable<Song[]> {
    const url = `${this.url}/by/${id}`;
    return this.http.get<Song[]>(url).pipe(
      tap(_ => this.log(`fetched songs from band=${id}`)),
      catchError(this.handleError<Song[]>(`getByBand id=${id}`))
    )
  }

  //filter
  filter(
    name?: string,
    genre?: string,
    release_min?: string,
    release_max?: string,
    length?: number,
    lyrics?: string,
    band?: number
  ): Observable<Song[]> {
    let url = `${this.url}/search?`;

    if (name) {
      url = url.concat("name="+name);
    }
    if (genre) {
      url = url.concat("&genre="+genre)
    }
    if (release_min) {
      url = url.concat("&release_min="+release_min)
    }
    if (release_max) {
      url = url.concat("&release_max="+release_max)
    }
    if (length) {
      url = url.concat("&length="+length)
    }
    if (lyrics) {
      url = url.concat("&lyrics="+lyrics)
    }
    if (band) {
      url = url.concat("&band="+band)
    }
    return this.http.get<Song[]>(url).pipe(
      tap(_ => this.log(`filtered songs`)),
      catchError(this.handleError<Song[]>('filter', []))
    )
  }

  //create
  create(song: Song): Observable<Song> {
    return this.http.post<Song>(this.url, song, this.httpOptions)
      .pipe(
        tap((newSong: Song) => this.log(`created song w/id=${newSong.id}`)),
        catchError(this.handleError<Song>('create'))
      );
  }

  //edit
  edit(song:Song): Observable<any> {
    return this.http.put(this.url+'/'+song.id, song, this.httpOptions)
      .pipe(tap(_ => this.log(`edited song id=${song.id}`)),
      catchError(this.handleError<any>('edit')));
  }

  //delete
  delete(id: number): Observable<Song> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Song>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted song id=${id}`)),
      catchError(this.handleError<Song>('delete'))
    );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
