"use client"

import React from "react"
import pluginConfig from "./CookieConsentConfig"

const CookieConsentApiBtns = () => {
  const acceptAndHide = async (acceptType) => {
    const { acceptCategory, hide } = await import("vanilla-cookieconsent")
    acceptCategory(acceptType)
    hide()
  }

  const resetPlugin = async () => {
    const { reset, run } = await import("vanilla-cookieconsent")
    reset(true)
    run(pluginConfig)
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("cc--darkmode")
  }

  const showPreferencesModal = async () => {
    const { showPreferences } = await import("vanilla-cookieconsent")
    showPreferences()
  }

  return (
    <>
      <p>API Calls:</p>
      <div className="cc-btns flex flex-col gap-2 mt-3">
        <button type="button" onClick={showPreferencesModal}>
          Show Preferences Modal
        </button>
        <button type="button" onClick={() => acceptAndHide("all")}>
          Accept All
        </button>
        <button type="button" onClick={() => acceptAndHide([])}>
          Accept Necessary
        </button>
        <button type="button" onClick={resetPlugin}>
          Reset Plugin
        </button>
        <button type="button" onClick={toggleDarkMode}>
          Toggle DarkMode
        </button>
      </div>
    </>
  )
}

export default CookieConsentApiBtns
