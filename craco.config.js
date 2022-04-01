const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1251ff',
              // "@ant-prefix": "ecom"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};