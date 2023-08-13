require('dotenv').config();

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'transform-define',
      {
        'process.env.API_URL': process.env.VUE_APP_API_URL,
      },
    ],
  ],
};
