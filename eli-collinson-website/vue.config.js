module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/contactMe'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
