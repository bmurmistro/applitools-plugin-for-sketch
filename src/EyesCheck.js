const sketch = require('sketch')
const UI = sketch.UI
const Settings = sketch.Settings
const EyesSettings = require('./EyesSettings.js')
const apiKey = EyesSettings.apiKey
const serverUrl = EyesSettings.serverUrl

export default function() {
  console.log('here')
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length
  const applitoolsApiKey = Settings.settingForKey('APPLITOOLS_API_KEY')
  console.log('apikey ' + applitoolsApiKey);

  //let eyes = new Eyes()
  // This is your api key, make sure you use it in all your tests.
  //eyes.setApiKey(applitoolsApiKey);
  // Define the OS and hosting application to identify the baseline
  //eyes.setHostOS("macOS");
  //eyes.setHostApp("sketch");

  if(!applitoolsApiKey) {
    apiKey();
  } else {
    var Eyes = require('@applitools/eyes-images').Eyes;

    //let artBoards = [];
    doc.pages.forEach(function(page) {
      //console.log(page.layers)
      page.layers.forEach(function(layer) {
        const options = { formats: 'png' }
        let images = sketch.export(page, options)
        console.log('images length ' + images.length);
      })
    })
  }

}

