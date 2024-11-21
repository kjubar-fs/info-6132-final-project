/**
 * This is a custom plugin that injects a gradle dependency into the underlying Android project
 * to enable GIF animations on Android. From my understanding, this is the easiest way to do it
 * without exposing the bare underlying project (which is unnecessary for any other functionality
 * in the app).
 * 
 * This was written by GitHub user byCedric here: https://github.com/byCedric/expo-gif/tree/config-plugin
 * in response to this issue on Expo's GitHub repo: https://github.com/expo/expo/issues/13766
 */
const {
    createRunOncePlugin, 
    WarningAggregator,
    withAppBuildGradle,
} = require('@expo/config-plugins');
  
const GIF_LIBRARY = { name: 'com.facebook.fresco:animated-gif', version: '3.2.0' };
  
/**
 * Add Gif animation support for Android.
 * It does that by adding the missing Gradle libraries for gif animations.
 * @see https://reactnative.dev/docs/image#gif-and-webp-support-on-android
 */
const withAndroidGif = (config) => {
    return withAppBuildGradle(config, config => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = addGradleDependency(config.modResults.contents, GIF_LIBRARY);  
        } else {
            WarningAggregator.addWarningAndroid(
                'android-gif-support',
                `Cannot add GIF libraries to project build.gradle if it's not groovy`
            );
        }
        return config;
    });
};
  
module.exports = createRunOncePlugin(withAndroidGif, 'android-gif-support', '1.0.0');
  
/**
 * @param {string} buildGradle - android/app/build.gradle file contents
 * @param {Object} library - gradle library information
 * @param {string} library.name - the full class path and name of the library
 * @param {string} library.version - the version of the library
 */
function addGradleDependency(buildGradle, library) {
    if (buildGradle.includes(library.name)) {
        return buildGradle;
    }
  
    return buildGradle.replace(
        /dependencies\s?{/,
        `dependencies {
        implementation "${library.name}:${library.version}"`
    );
}