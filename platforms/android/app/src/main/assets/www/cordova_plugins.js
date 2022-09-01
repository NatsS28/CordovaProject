cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.example.sample.plugin.PluginName",
    "file": "plugins/com.example.sample.plugin/www/PluginName.js",
    "pluginId": "com.example.sample.plugin",
    "clobbers": [
      "cordova.plugins.PluginName"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.5",
  "com.example.sample.plugin": "0.0.1"
};
// BOTTOM OF METADATA
});