import { injectLoad } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { load } from './[blogId].server';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './blog.component.html',
  styles: ``,
})
export default class BlogPage {
  blog = toSignal(injectLoad<typeof load>());
}
