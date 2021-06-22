/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 19:41:00
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
module.exports = () => {
  return {
    plugins: [
      require('postcss-preset-env'),
      require('postcss-import'),
      require('tailwindcss'),
      require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
      require('autoprefixer')
    ]
  }
}
