import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from './todo/todo-item/Item';

const BASE_URL = 'http://gagandeep.engineer';

@Injectable({
  providedIn: 'root'
})


export class TodocrudService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(BASE_URL+'/todos')
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  addTodo(title: string, desc: string, done: boolean): Observable<any> {
    return this.http.post(BASE_URL+'/todo', { title, desc, done })
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  updateTodo(id: number, done: boolean): Observable<any> {
    return this.http.put(BASE_URL+'/todo', { id, done })
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(BASE_URL+'/todo/' + id)
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  private log(filename: string, data: string) {
    const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    console.log(message);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
