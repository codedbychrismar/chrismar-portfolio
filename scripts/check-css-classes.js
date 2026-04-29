import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceRoot = path.join(root, 'src')
const supportedExtensions = new Set(['.tsx'])

function collectFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return collectFiles(fullPath)
    }

    return supportedExtensions.has(path.extname(entry.name)) ? [fullPath] : []
  })
}

const filesWithHtmlClass = collectFiles(sourceRoot).filter((filePath) => {
  if (filePath.includes('.DEPRECATED.')) {
    return false
  }

  const contents = fs.readFileSync(filePath, 'utf8')
  return /\sclass=/.test(contents)
})

if (filesWithHtmlClass.length > 0) {
  console.error('Use className instead of class in React files:')
  filesWithHtmlClass.forEach((filePath) => {
    console.error(`- ${path.relative(root, filePath)}`)
  })
  process.exitCode = 1
} else {
  console.log('React className check passed.')
}
