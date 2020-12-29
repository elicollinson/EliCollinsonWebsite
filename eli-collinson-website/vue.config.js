module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
//Prerendering set up for all site pages for SEO
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
