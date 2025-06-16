const pluginConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log("onFirstAction fired")
  },

  onConsent: function ({ cookie }) {
    console.log("onConsent fired ...")
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log("onChange fired ...")
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    functionality: {
      autoClear: {
        cookies: [
          {
            name: "job_filter",
          },
          {
            name: "region_pref",
          },
        ],
      },
    },
  },

  language: {
    default: "en",

    translations: {
      en: {
        consentModal: {
          title: "Hello navigator, it's cookie time!",
          description:
            'Our website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: `
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/disclaimer">Disclaimer</a>
          `,
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          sections: [
            {
              title: "Cookie Usage",
              description:
                'This Cookie Policy explains how Nautilus Shipping India Pvt. Ltd. uses cookies and similar technologies when you visit our website at <a href="https://www.nautilusshipping.com" class="cc__link">https://www.nautilusshipping.com</a>. It explains what these technologies are, why we use them, and your rights to control their use. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy-policy" class="cc__link">privacy policy</a> & <a href="/cookie-policy" class="cc__link">cookie policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "These cookies are essential for the website to function. They cannot be turned off in our systems.",
              linkedCategory: "necessary",
              cookieTable: {
                headers: {
                  name: "Used For",
                  //expiration: "Expiration",
                },
                body: [
                  {
                    name: "Contact forms, career applications, session management",
                    //expiration: "Expires after 12 days",
                  },
                ],
              },
            },

            // {
            //   title: "Performance and Analytics cookies",
            //   linkedCategory: "analytics",
            //   cookieTable: {
            //     headers: {
            //       name: "Name",
            //       domain: "Service",
            //       description: "Description",
            //       expiration: "Expiration",
            //     },
            //     body: [
            //       {
            //         name: "_ga",
            //         domain: "Google Analytics",
            //         description:
            //           'Cookie set by <a href="#das">Google Analytics</a>.',
            //         expiration: "Expires after 12 days",
            //       },
            //       {
            //         name: "_gid",
            //         domain: "Google Analytics",
            //         description:
            //           'Cookie set by <a href="#das">Google Analytics</a>',
            //         expiration: "Session",
            //       },
            //     ],
            //   },
            // },
            {
              title: "Functionality Cookies",
              linkedCategory: "functionality",
              description:
                "These enhance the functionality and personalization of our website, such as remembering your job filter preferences or region.",
              cookieTable: {
                headers: {
                  name: "Used For",
                  description: "When",
                },
                body: [
                  {
                    name: "Remembering job filter preferences or region",
                    description:
                      "When you revisit our Careers or Insights pages",
                  },
                ],
              },
            },
            {
              title: "More information",
              description:
                'For any queries in relation to my policy on cookies and your choices, please <a class="cc__link" href="/contact-us">contact us</a>.',
            },
          ],
        },
      },
    },
  },
}

export default pluginConfig
