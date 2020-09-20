module.exports = {
    lintOnSave: false,
    devServer: {
        port: process.env.APP_PORT,
        public: process.env.VUE_APP_DOMAIN
    },
    productionSourceMap: process.env.NODE_ENV !== 'production',
    configureWebpack: {
        mode: 'development',
        output: {
            libraryExport: 'default'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            alias: {
                '@class': '/app/src/classes',
                '@map': '/app/src/classes/map'
            }
        },
        stats: {
            assets: true,
            chunks: true,
            chunkGroups: true,
            chunkModules: true,
            chunkOrigins: true,
            errors: true,
            modules: true,
            reasons: true,
            version: true,
            warnings: true
        }
    },
    // pwa: {
    //   workboxPluginMode: 'InjectManifest',
    //   workboxOptions: {
    //     swSrc: './src/sw.js',
    //     swDest: 'service-worker.js'
    //   }
    // },
    transpileDependencies: [
        'vuetify'
    ]
};
