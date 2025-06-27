"use client"
import React, { useEffect } from "react"

const GallaboxBotComponent = () => {
  useEffect(() => {
    const loadGallabox = () => {
      if (document.getElementById("gallabox-wa-widget")) return

      // Setup config
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

      const script = document.createElement("script")
      script.id = "gallabox-wa-widget"
      script.async = true
      script.src = "https://waw.gallabox.com/whatsapp-widget.min.js"
      document.body.appendChild(script)

      // Remove the listener after load
      window.removeEventListener("scroll", loadGallabox)
    }

    // Add scroll event listener
    window.addEventListener("scroll", loadGallabox, { once: true })

    return () => {
      window.removeEventListener("scroll", loadGallabox)
    }
  }, [])

  return null
}

export default GallaboxBotComponent
