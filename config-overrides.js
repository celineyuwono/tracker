/**

This config changes the localIdentName for CSS modules

If you want to use default config created by CRA, simply remove this file and update the "scripts" section with:

-    "start": "react-app-rewired start",
-    "build": "react-app-rewired build",
-    "test": "react-app-rewired test --env=jsdom"
+    "start": "react-scripts start",
+    "build": "react-scripts build",
+    "test": "react-scripts test",

 */

const localIdentName =
  process.env.NODE_ENV === 'development' || process.env.DIST === 'true' ? '[local]' : 'duik-prod-[hash:12]';


const modifyWebpackConfigCssModulesLocalIdent = config => {
  // recursive lookup
  if (
    !!config &&
    typeof config === 'object' &&
    Object.keys(config).length > 0
  ) {
    const keys = Object.keys(config);
    if (
      keys.includes('modules') &&
      keys.includes('importLoaders') &&
      keys.includes('getLocalIdent')
    ) {
      config.localIdentName = localIdentName;
      config.getLocalIdent = undefined;
    } else {
      keys.forEach(key => {
        modifyWebpackConfigCssModulesLocalIdent(config[key]);
      });
    }
  }

  return config;
};

module.exports = function override(config, env) {
  modifyWebpackConfigCssModulesLocalIdent(config);

  return config;
};
