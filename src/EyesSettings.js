import {UI, Settings} from 'sketch'

export function apiKey() {
  const APPLITOOLS_API_KEY = 'APPLITOOLS_API_KEY'
  UI.getInputFromUser(
    "API Key (Required)",
    {
      initialValue: Settings.settingForKey(APPLITOOLS_API_KEY),
      type: UI.INPUT_TYPE.string
    },
    (err, apiKey) => {
      if (err) {
        // most likely the user canceled the input
        return
      }
      if (apiKey && apiKey.trim().length > 0) {
        Settings.setSettingForKey(APPLITOOLS_API_KEY, apiKey.trim())
        UI.message('API Key saved!')
      }
      else {
        Settings.setSettingForKey(APPLITOOLS_API_KEY, '')
        UI.message('API Key is required!')
      }
    }
  )
}

export function serverUrl() {
  const APPLITOOLS_SERVER_URL = 'APPLITOOLS_SERVER_URL'
  const DEFAULT_APPLITOOLS_SERVER_URL = 'https://api.applitools.com'
  const applitoolsServerUrl = Settings.settingForKey(APPLITOOLS_SERVER_URL) ? Settings.settingForKey(APPLITOOLS_SERVER_URL) : DEFAULT_APPLITOOLS_SERVER_URL
  UI.getInputFromUser(
    "Server URL",
    {
      initialValue: applitoolsServerUrl,
      type: UI.INPUT_TYPE.string
    },
    (err, serverUrl) => {
      if (err) {
        // most likely the user canceled the input
        return
      }
      if (serverUrl && serverUrl.trim().length > 0) {
        UI.message('Server URL saved!')
      }
      else {
        Settings.setSettingForKey(APPLITOOLS_SERVER_URL, DEFAULT_APPLITOOLS_SERVER_URL)
      }
    }
  )
}

export default function() {
  apiKey();
}

