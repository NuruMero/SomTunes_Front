import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Song } from '../../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private url = 'http://localhost:8080/api/songs'; //URL to the API, change on different implementation

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
