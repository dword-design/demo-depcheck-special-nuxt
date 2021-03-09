#!/usr/bin/env node

const depcheck = require('depcheck')
const nuxtSpecial = require('depcheck-special-nuxt')

const options = {
  specials: [
    nuxtSpecial,
  ],
}

depcheck(process.cwd(), options, unused => {
  console.log(unused.dependencies); // an array containing the unused dependencies
  console.log(unused.devDependencies); // an array containing the unused devDependencies
  console.log(unused.missing); // a lookup containing the dependencies missing in `package.json` and where they are used
  console.log(unused.invalidFiles); // files that cannot access or parse
  console.log(unused.invalidDirs); // directories that cannot access
})
