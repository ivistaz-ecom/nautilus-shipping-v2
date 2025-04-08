"use client"
import React, { useEffect } from "react"

const GallaboxBotComponent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const existingScript = document.getElementById("gallabox-wa-widget")
      if (existingScript) return

      // Inject Gallabox WhatsApp config
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
          messageText:
            "Start your conversation with our marine personal executive",
          replyOptions: [],
          version: "v1",
          widgetPositionMarginX: 12,
          widgetPositionMarginY: 12,
        },
      }

      const script = document.createElement("script")
      script.id = "gallabox-wa-widget"
      script.async = true
      script.src = `https://waw.gallabox.com/whatsapp-widget.min.js?_=${new Date().toISOString()}`
      document.body.appendChild(script)
    }, 10000) // 10-second delay

    return () => clearTimeout(timeout)
  }, [])

  return null
}

export default GallaboxBotComponent
