export const templateConfig = {
  testing: false,
  elementID: "klaro",
  storageMethod: "cookie",
  storageName: "klaro",
  htmlTexts: false,
  cookieExpiresAfterDays: 360,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  translations: {
    zz: {
      privacyPolicyUrl: "/privacy",
    },
    de: {
      /*
        You can specify a language-specific link to your privacy policy here.
        */
      privacyPolicyUrl: "/datenschutz",
      consentNotice: {
        description:
          "Hi! Wir verwenden Cookies um Ihnen die bestmögliche Erfahrung zu bieten.",
      },
      consentModal: {
        description:
          "Hier können Sie einsehen und anpassen, welche Information wir über Sie " +
          'sammeln. Einträge die als "Beispiel" gekennzeichnet sind dienen lediglich ' +
          "zu Demonstrationszwecken und werden nicht wirklich verwendet.",
      },
      /*
        You should also define translations for every purpose you define in the
        'services' section. You can define a title and an (optional) description.
        */
      purposes: {
        analytics: {
          title: "Besucher-Statistiken",
        },
        security: {
          title: "Sicherheit",
        },
        livechat: {
          title: "Live Chat",
        },
        advertising: {
          title: "Anzeigen von Werbung",
        },
        styling: {
          title: "Styling",
        },
      },
    },
    en: {
      privacyPolicyUrl: "/privacy",
      consentModal: {
        description:
          "Here you can see and customize the information that we collect about you. " +
          'Entries marked as "Example" are just for demonstration purposes and are not ' +
          "really used on this website.",
      },
      purposes: {
        analytics: {
          title: "Analytics",
        },
        security: {
          title: "Security",
        },
        livechat: {
          title: "Livechat",
        },
        advertising: {
          title: "Advertising",
        },
        styling: {
          title: "Styling",
        },
      },
    },
  },
  services: [], //Added from ConsentManager
};
