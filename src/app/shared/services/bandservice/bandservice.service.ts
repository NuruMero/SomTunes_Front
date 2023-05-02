import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Band } from '../../models/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private url = 'http://localhost:8080/api/bands'; //URL to the API, change on different implementation

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
  })
  };

  constructor(private http: HttpClient) { }

  //findAll
  findAll(): Observable<Band[]> {
    return this.http.get<Band[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched bands')),
      catchError(this.handleError<Band[]>('findAll', []))
    )
  }

  //getById
  getById(id: number): Observable<Band> {
    const url = `${this.url}/${id}`;
    return this.http.get<Band>(url).pipe(
      tap(_ => this.log(`fetched band with id=${id}`)),
      catchError(this.handleError<Band>(`getById id=${id}`))
    );
  }

  //getByName
  getByName(name: string): Observable<Band> {
    const url = `${this.url}/name/${name}`;
    return this.http.get<Band>(url).pipe(
      tap(_ => this.log(`fetched band with name=${name}`)),
      catchError(this.handleError<Band>(`getByName name=${name}`))
    )
  }

  //filter
  filter(name?: string, mainGenre?: string, origin?: string): Observable<Band[]> {
    let url = `${this.url}/search?`;

    if (name) {
      url = url.concat("name="+name);
    }
    if (mainGenre) {
      url = url.concat("&mainGenre="+mainGenre);
    }
    if (origin) {
      url = url.concat("&origin="+origin);
    }
    return this.http.get<Band[]>(url).pipe(
      tap(_ => this.log(`filtered bands`)),
      catchError(this.handleError<Band[]>('filter', []))
    )
  }

  //create
  create(band: Band):Observable<Band> {
    return this.http.post<Band>(this.url, band, this.httpOptions)
      .pipe(
        tap((newBand: Band) => this.log(`created band w/id=${newBand.id}`)),
        catchError(this.handleError<Band>('create'))
      );
  }

  //edit
  edit(band: Band): Observable<any> {
    return this.http.put(this.url+'/'+band.id, band, this.httpOptions)
      .pipe(tap(_ => this.log(`edited band id=${band.id}`)),
      catchError(this.handleError<any>('edit'))
    );
  }

  //delete
  delete(id: number): Observable<Band> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Band>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted band id=${id}`)),
      catchError(this.handleError<Band>('delete'))
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
