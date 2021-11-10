# nunogois-website

~~Personal website: [www.nunogois.com](https://www.nunogois.com).~~

Currently hosted in https://new.nunogois.com while in development.

Built with [Svelte](https://svelte.dev/) ([SvelteKit](https://kit.svelte.dev/)) and hosted in [CloudFlare Pages](https://pages.cloudflare.com/).

Old website built with Nuxt in 2018: [nunogois-website-nuxt-2018](https://github.com/nunogois/nunogois-website-nuxt-2018).

## TODO

- [x] Add Tailwind CSS (https://github.com/svelte-add/tailwindcss)
- [x] Single index page with:
  - [x] Home
  - [x] About
  - [x] Skills (dynamically loaded from GitHub profile)
  - [ ] Projects (dynamically loaded from GitHub, order by stars descending)
  - [x] Blog (dynamically loaded from Medium, order by date descending)
  - [x] CV (external link to cv.nunogois.com)
  - [x] Contact
- [ ] Properly handle some of the assets instead of linking to external URLs
- [ ] Figure out the best way of triggering builds (daily cron from CloudFlare worker, maybe)
- [ ] Responsiveness check and optimizations
- [ ] SEO optimizations
- [ ] Cleanup
- [ ] Publish to www.nunogois.com
- [ ] Announce: Twitter, LinkedIn, Instagram

### BONUS

- [ ] Check: https://kit.svelte.dev/docs#additional-resources-integrations
- [ ] Improve README.md
- [x] Publish to new.nunogois.com while in development
- [ ] Improve Lighthouse scores as much as possible
- [ ] Add animations
- [x] Add Lottie
- [ ] Add latest tweets somewhere?
- [ ] i18n with PT
- [x] Make repo public
