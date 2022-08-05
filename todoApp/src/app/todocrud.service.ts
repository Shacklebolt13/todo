import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from './todo/todo-item/Item';

@Injectable({
  providedIn: 'root'
})

export class TodocrudService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get('http://localhost:8080/todos')
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  addTodo(title: string, desc: string, done: boolean): Observable<any> {
    return this.http.post('http://localhost:8080/todo', { title, desc, done })
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  updateTodo(id: number, done: boolean): Observable<any> {
    return this.http.put('http://localhost:8080/todo', { id, done })
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleError) // then handle the error
      );
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/todo/' + id)
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
