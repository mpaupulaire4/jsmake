#!/usr/bin/env node
const program = require('commander');
const pkg = require('./package.json');
const main = require('./src')
const path = require('path')

program
  .version(pkg.version, '-v, --version')
  .arguments('<file> [args...]')
  // .arguments('<file>')
  .option('-t, --templates <path>', 'The directoy where templates can be found', './.jsmake/templates')
  .option('-m, --make-files <path>', 'The directory where make files can be found', './.jsmake/')
  .action((file, data) => {
    const makeFile = path.resolve(program.makeFiles, file)
    const script = require(makeFile)
    main(script, data)
    process.exit(0)
  })
  .parse(process.argv);

function wrapArgs(args) {
  return {
    get: (i) => {
      if (args[i]){
        return args[i]
      } else {
        console.log
      }
    }
  }
}

program.outputHelp()
process.exit(1)