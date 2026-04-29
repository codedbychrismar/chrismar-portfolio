import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const tailwindConfigPath = path.join(root, 'tailwind.config.cjs')
const cssPath = path.join(root, 'src', 'index.css')

const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf8')
const css = fs.readFileSync(cssPath, 'utf8')

const referencedVariables = new Set(
  [...tailwindConfig.matchAll(/var\((--[a-zA-Z0-9-_]+)/g)].map((match) => match[1]),
)
const definedVariables = new Set(
  [...css.matchAll(/(--[a-zA-Z0-9-_]+)\s*:/g)].map((match) => match[1]),
)

const missingVariables = [...referencedVariables].filter(
  (variableName) => !definedVariables.has(variableName),
)

if (missingVariables.length > 0) {
  console.error('Undefined CSS variables found in tailwind.config.cjs:')
  missingVariables.forEach((variableName) => console.error(`- ${variableName}`))
  process.exitCode = 1
} else {
  console.log('All Tailwind CSS variables are defined.')
}
