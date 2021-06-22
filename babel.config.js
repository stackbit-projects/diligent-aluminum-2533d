/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:07:30
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
module.exports = (api) => {
  api.cache(false)

  return {
    presets: ['@babel/preset-env', 'babel-preset-gatsby', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', ['@babel/plugin-proposal-class-properties', { loose: true }], ['@babel/plugin-proposal-private-methods', { loose: true }], ['@babel/plugin-proposal-private-property-in-object', { loose: true }], [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]]
  }
}
