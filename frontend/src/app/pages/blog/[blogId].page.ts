import { injectLoad } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { load } from './index.server';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './blog.component.html',
  styles: ``,
})
export default class BlogPage {
  private readonly route = inject(ActivatedRoute);

  readonly blogId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('blogId')))
  );

  blog = toSignal(injectLoad<typeof load>());
}
