import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are fine for GitHub Pages
      fallback: '200.html'
    }),
    paths: {
      // replace 'username' and 'repo' with your GitHub username and repository name
     base: process.env.NODE_ENV === 'production' ? '/repo' : ''
    }
  }
};
