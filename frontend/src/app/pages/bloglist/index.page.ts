import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';
import { load } from './index.server';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bloglist.component.html',
  styles: `.content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4; /* Number of lines to show */
    max-height: 5.4em; /* (4 lines x 1.2 line-height) Adjust if line-height is different */
    line-height: 1.2em; /* Adjust based on your line height */
  }`,
})
export default class BlogListPage {
  blogs = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
