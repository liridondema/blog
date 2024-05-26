import { PageServerLoad } from '@analogjs/router';
import { Post } from '../../models/post';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  const data = await fetch<Post[]>('http://localhost:3000/api/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
