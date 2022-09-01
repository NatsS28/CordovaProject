cordova.define("com.example.sample.plugin.PluginName", function(require, exports, module) {
var exec = require('cordova/exec');




exports.coolMethod = function () {
    console.log("clicked inside method");
    alert("CLicked insiide method");
    exec(function (res) { }, function (err) { }, 'PluginName', 'new_activity');
};



});
