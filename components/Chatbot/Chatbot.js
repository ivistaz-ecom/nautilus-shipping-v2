"use client"
import React, { useEffect } from "react"

const GallaboxBotComponent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Avoid re-injecting
      const existingScript = document.getElementById("gallabox-wa-widget")
      if (existingScript) return

      // Config setup
      window.gbwawc = {
        url: "https://waw.gallabox.com",
        options: {
          waId: "919176849999",
          siteName: "Nautilus Shipping",
          siteTag: "Usually reply in 4 minutes",
          siteLogo:
            "https://assets.gallabox.com/web/wa-widget-logos/blue-bot.svg",
          widgetPosition: "RIGHT",
          welcomeMessage: "Welcome to Nautilus Shipping!!!",
          brandColor: "#25D366",
          customQuestion: "👋 Hi! I’d like to know more about your services.",
          startChatBtnTxt: "Chat now",
          version: "v2",
          widgetPositionMarginX: 12,
          widgetPositionMarginY: 12,
        },
      }

      // Inject the script
      const script = document.createElement("script")
      script.id = "gallabox-wa-widget"
      script.async = true
      script.src = `https://waw.gallabox.com/whatsapp-widget.min.js?_=${new Date().toISOString()}`
      document.body.appendChild(script)
    }, 10000) // Load after 10 seconds

    return () => clearTimeout(timeout)
  }, [])

  return null
}

export default GallaboxBotComponent
