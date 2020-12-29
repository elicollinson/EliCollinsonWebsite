module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/contactMe',
        '/blog',
        '/gallery',
        '/mystory'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
