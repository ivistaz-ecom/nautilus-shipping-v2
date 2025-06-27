"use client"

import { useEffect } from "react"

const CookieConsentComponent = () => {
  useEffect(() => {
    const loadConsent = async () => {
      const CookieConsent = await import("vanilla-cookieconsent")
      const pluginConfig = await import("./CookieConsentConfig").then(
        (mod) => mod.default
      )
      CookieConsent.run(pluginConfig)
    }

    if (typeof window !== "undefined") {
      loadConsent()
    }
  }, [])

  return (
    <a
      href="#"
      onClick={async (e) => {
        e.preventDefault()
        const CookieConsent = await import("vanilla-cookieconsent")
        CookieConsent.showPreferences()
      }}
    ></a>
  )
}

export default CookieConsentComponent
