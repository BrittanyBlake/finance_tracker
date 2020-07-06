module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  return {
    presets: [
      isTestEnv && [
        '@/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        '@/preset-env',
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ]
    ].filter(Boolean),
    plugins: [
      '-plugin-macros',
      '@/plugin-syntax-dynamic-import',
      isTestEnv && '-plugin-dynamic-import-node',
      '@/plugin-transform-destructuring',
      [
        '@/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
      [
        '@/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true
        }
      ],
      [
        '@/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: true,
          corejs: false
        }
      ],
      [
        '@/plugin-transform-regenerator',
        {
          async: false
        }
      ]
    ].filter(Boolean)
  }
}
