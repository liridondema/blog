import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostDTO } from 'frontend/src/app/models/post';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
})
export default class BlogCreatePage {
  private _http = inject(HttpClient);
  private _toastr = inject(ToastrService);

  blogForm = new FormGroup({
    title: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    content: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  addBlog() {
    if (this.blogForm.invalid) {
      throw new Error('error');
    }
    const post: PostDTO = this.blogForm.value as PostDTO;
    return this._http
      .post<PostDTO>('http://localhost:4200/api/v1/posts', post)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (res) => {
          console.log('Success:', res);
          this._toastr.success(
            'Successfull!',
            'You have added a new blog post. Good job.'
          );
          this.blogForm.reset();
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
