"use client"

import React, { useEffect } from "react"
import * as CookieConsent from "vanilla-cookieconsent"
import pluginConfig from "./CookieConsentConfig"
import "vanilla-cookieconsent/dist/cookieconsent.css"

const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [])

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        CookieConsent.showPreferences()
      }}
    ></a>
  )
}

export default CookieConsentComponent
