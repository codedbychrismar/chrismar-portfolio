module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['src/**/*.DEPRECATED.css'],
  rules: {
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-hex-length': null,
    'color-function-notation': null,
    'custom-property-pattern': null,
    'declaration-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': null,
    'import-notation': null,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'value-keyword-case': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'screen', 'config'],
      },
    ],
  },
}
