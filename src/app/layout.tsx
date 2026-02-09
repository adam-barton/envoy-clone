import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const sofiaPro = localFont({
  src: [
    {
      path: "../../public/fonts/SofiaPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SofiaPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--sofia-pro",
  display: "swap",
});

const title = "Workplace management platform | Envoy";
const description =
  "Envoy unifies visitors, spaces, and communications into one enterprise-ready workplace management platform.";

// Use an absolute URL (required for OG)
const url = "https://envoy.com/workplace-management-platform";

// Use an absolute URL for OG image (recommended). Could also be `/og.png` if you have it locally.
const ogImage = "../../public/images/Platform-OG_image-Envoy-260130.png";


export const metadata: Metadata = {
  metadataBase: new URL("https://envoy.com"),
  title,
  description,

  // Canonical URL
  alternates: {
    canonical: url,
  },

  // Open Graph tags
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Envoy",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Envoy workplace management platform",
      },
    ],
  },

  // Twitter card tags
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },

  // Favicon
  icons: {
    icon: "/images/favicon.webp",
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "NAVBLUE Case Study – Hybrid Working with Envoy",
  description:
    "Learn how NAVBLUE, an Airbus company, deployed Envoy to support hybrid working with hot-desking management and visitor management across global offices.",
  thumbnailUrl:
    "/images/Navblue_still-Case_study-Envoy.webp",
  uploadDate: "2025-01-28",
  duration: "PT1M52S",
  contentUrl: "https://player.vimeo.com/video/1143580188",
  embedUrl: "https://player.vimeo.com/video/1143580188",
  publisher: {
    "@type": "Organization",
    name: "Envoy",
    logo: {
      "@type": "ImageObject",
      url: "/images/logo_header2x.webp",
    },
  },
  transcript:
    "We have successfully deployed and started a new way of working. We are hybrid now and we've been able to manage that successfully thanks to the Envoy application. My name is Mari Sormus. I work for NAVBLUE, an Airbus Company, and I'm a technical lead in our methods tools team. NAVBLUE provides flight operations services to airlines and aircraft operators. We are part of an Airbus company, so we work closely with our Airbus colleagues. We want to deploy a new way of working and not having an application to manage the hybrid working would mean that it will be challenging to manage the office space. The capacity Envoy is a visitors and hot desking management application. We had now used it to manage our visitors in one of the office locations and across all of our offices we use it to support our hybrid working with hot-desking management. Envoy enabled us to bring on a new way of working across the company. We have members cross globe and different offices working remotely and making sure that when they come to the office they use their own way app to register to locate a desk, and equally as they're traveling from one office to another. The floor plan that we have in Envoy has been hugely beneficial. Everyone has that accessibility and visibility for front desk and office management members. The main value is for the visitors side.",
};

const recorVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Recor Case Study – Avoiding a 33% Increase in Workplace Headcount with Envoy",
  description:
    "Learn how Recor increased workplace efficiency without needing to hire additional staff, thanks to Envoy's visitor management, space analytics, and emergency notifications.",
  thumbnailUrl:
    "/images/recor_video_still.webp",
  uploadDate: "2025-11-08",
  duration: "PT1M49S",
  contentUrl: "https://player.vimeo.com/video/1133998557",
  embedUrl: "https://player.vimeo.com/video/1133998557",
  publisher: {
    "@type": "Organization",
    name: "Envoy",
    logo: {
      "@type": "ImageObject",
      url: "/images/logo_header2x.webp",
    },
  },
  transcript:
    "Because with the pre-registration function, we're able to pre-register. There's no waiting when people come in here, and people appreciate that tremendously. When you see somebody walking through the office with an Envoy badge on, that means they've been vetted already. And we also have the badges that disappear after 24 hours. We just had a meeting last week with our CEO. We were able to show her that we're outta seat. We would not have gotten the okay to add more seats unless we presented those metrics to her. And so it just helps us be proactive instead of completely reactionary, which we were before. Another fantastic feature is the emergency notifications. We can basically go into Envoy, push a button, and then have everybody receive a message just letting 'em know that you should evacuate. So, you know, safety, security, space management, it pretty much does it all for us. If I needed a person to do these things, I would need at least one headcount to do this, and then the information would not be as accurate either. Envoy has started to give us a foundation of credibility as far as adding tools and things like that, and I would recommend Envoy in a second to anybody.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Envoy",
  url: "https://www.envoy.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.envoy.com/images/logo_header2x.webp",
    width: 300,
    height: 60,
  },
  description:
    "Envoy is an enterprise workplace management platform that unifies visitor management, space booking, communications, and operational analytics into a single system for modern hybrid workplaces.",
  sameAs: [
    "https://www.linkedin.com/company/envoy",
    "https://twitter.com/envaborton",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://envoy.com/contact-sales",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Envoy",
  url: "https://www.envoy.com",
  description:
    "Envoy's workplace management platform helps enterprises coordinate visitors, desks, rooms, deliveries, and communications across every location — all from one unified system.",
  publisher: { "@id": "https://www.envoy.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://envoy.com/search?query={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  description:
    "Navigation path for the Envoy workplace management platform website.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.envoy.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Platform",
      item: "https://www.envoy.com/platform",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Workplace Management Platform",
      item: "https://www.envoy.com/workplace-management-platform",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Workplace Management Platform | Envoy",
  description:
    "Envoy unifies visitors, spaces, and communications into one enterprise-ready workplace management platform designed for hybrid and in-office teams.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      "h1",
      "h2",
      "[data-speakable]",
    ],
  },
  url: "https://www.envoy.com/workplace-management-platform",
  mainEntity: {
    "@type": "Organization",
    name: "Envoy",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Envoy Workplace Platform",
  description:
    "Enterprise workplace management software that combines visitor management, desk and room booking, emergency notifications, digital signage, mailroom management, and workplace analytics into a single cloud-based platform.",
  url: "https://www.envoy.com",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Custom enterprise pricing based on platform tier (Core or Premium) and selected modules. Contact sales for a quote.",
    url: "https://envoy.com/contact-sales",
  },
  featureList: [
    "Visitor Management",
    "Desk & Room Booking",
    "Emergency Notifications",
    "Digital Signage",
    "Mailroom Management",
    "Workplace Analytics",
    "Access Control Integrations",
    "Identity Provider SSO",
  ],
  screenshot: {
    "@type": "ImageObject",
    url: "/images/Platform-OG_image-Envoy-260130_s.webp",
    caption:
      "Envoy workplace management platform dashboard showing visitor, space, and communications management.",
  },
  publisher: {
    "@type": "Organization",
    name: "Envoy",
    url: "https://www.envoy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      videoSchema,
      recorVideoSchema,
      organizationSchema,
      webSiteSchema,
      breadcrumbSchema,
      speakableSchema,
      softwareApplicationSchema,
    ],
  };

  return (
    <html lang="en" className={sofiaPro.variable}>
      <head>
        {/* Default consent settings */}
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("consent", "default", {
    ad_personalization: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
});

gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", false);
`,
          }}
        />

        {/* DNS prefetch for third-party origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://pages.envoy.com" />

        {/* Segment */}
        <script
          type="text/plain"
          data-cookieconsent="statistics, marketing"
          dangerouslySetInnerHTML={{
            __html: `
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://sgmnt.envoy.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";

  analytics.load("jmhzjAC1O7mvTJ4taVydJa9YKstvuNME");

  const pageNameFull = document.title.split('-')[0];
  const pageNameTrimmed = pageNameFull.trim();

  analytics.page('[envoy.com] ' + pageNameTrimmed, properties = { project: 'envoy.com' });
}}();

window.metrics = {
  trackEvent: function (event, properties, options) {
    if (properties) {
      properties.project = 'envoy.com'
    }
    else {
      properties = { project: 'envoy.com' }
    }
    analytics.track('[envoy.com] ' + event, properties, options)
  }
}
`,
          }}
        />

        {/* Structured data — single @graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body>
        {children}

        {/* Google Tag Manager — deferred */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZX7KCP');`,
          }}
        />

        {/* Helper — getCookie [essential] */}
        <Script
          id="get-cookie-helper"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
var loggedIn = getCookie("loggedIn");
`,
          }}
        />

        {/* Marketo forms stylesheet — lazy injected */}
        <Script
          id="marketo-css-loader"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://cdn.jsdelivr.net/gh/envoy/webflow-website@40/src/utils/styles.css?v=11.7.25';
  l.integrity='sha384-+zSLsTCcmpztmBtltI+aJEXsFRNfhVTBISMAUa7NKDnBQwbEJoBqQu4eWUL6v61v';
  l.crossOrigin='anonymous';
  document.head.appendChild(l);
})();
`,
          }}
        />

        {/* Marketo forms scripts [essential] */}
        <Script
          src="https://pages.envoy.com/js/forms2/js/forms2.min.js?v=11.7.25"
          strategy="lazyOnload"
        />

        {/* Cookie Lib [essential] */}
        <Script
          src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js?v=11.7.25"
          integrity="sha384-/vxhYfM1LENRhdpZ8dwEsQn/X4VhpbEZSiU4m/FwR+PVpzar4fkEOw8FP9Y+OfQN"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Account checker [essential] — vanilla JS (no jQuery) */}
        <Script
          id="account-checker"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
;(function (window, document) {
  'use strict';

  function toggleClass(els, className, add) {
    if (!els) return;
    (els.forEach ? els : [els]).forEach(function(el) {
      el.classList[add ? 'add' : 'remove'](className);
    });
  }

  var UserEmailChecker = function(options) {
    this.emailInput = options.emailInput || (options.$emailInput && options.$emailInput[0]);
    this.timeout = null;
    this.userLookupUrl = options.userLookupUrl;
    this.errorCallback = options.errorCallback;
    this.newUserEls = options.newUserEls || (options.$newUserEls ? Array.from(options.$newUserEls) : []);
    this.existingUserEls = options.existingUserEls || (options.$existingUserEls ? Array.from(options.$existingUserEls) : []);
    this.goToDashboardLink = options.goToDashboardLink || (options.$goToDashboardLink && options.$goToDashboardLink[0]);
  };

  UserEmailChecker.prototype = {
    init: function() {
      var self = this;
      var lookUpEmail = function(e) {
        if (self.timeout) clearTimeout(self.timeout);

        var email = e.target.value;
        self.signInUrl = 'https://dashboard.envoy.christmas?em=' + email;

        if (!email) {
          toggleClass(self.newUserEls, 'hide', false);
          toggleClass(self.existingUserEls, 'hide', true);
          return;
        }

        self.timeout = setTimeout(function() {
          fetch(self.userLookupUrl + '?email=' + encodeURIComponent(email), {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
          }).then(function(res) {
            if (res.status === 404) {
              toggleClass(self.newUserEls, 'hide', false);
              toggleClass(self.existingUserEls, 'hide', true);
              return;
            }
            if (!res.ok) { self.errorCallback(); return; }
            return res.json();
          }).then(function(data) {
            if (!data) return;
            if (data.data && data.data.attributes && data.data.attributes["passport-only"]) return;
            toggleClass(self.newUserEls, 'hide', true);
            toggleClass(self.existingUserEls, 'hide', false);
            if (self.goToDashboardLink) self.goToDashboardLink.setAttribute('href', self.signInUrl);
          }).catch(function() {
            self.errorCallback();
          });
        }, 500);
      };

      if (self.emailInput) {
        self.emailInput.addEventListener('keyup', lookUpEmail);
        self.emailInput.addEventListener('blur', lookUpEmail);
      }
    }
  };
  window.UserEmailChecker = UserEmailChecker;
}(window, window.document));
`,
          }}
        />

        {/* UTM tracking */}
        <Script
          id="utm-tracking"
          data-cookieconsent="marketing"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
var UTM_FIELDS = [
  'utm_campaign',
  'utm_content',
  'utm_medium',
  'utm_source',
  'utm_term',
  'utm_campaigntype',
  'utm_contenttype',
  'gclid'
];

function getUtmValuesFromCookies(prefix) {
  prefix = prefix || "";
  var utmValues = {};
  var savedValue;
  UTM_FIELDS.forEach(function(field) {
    savedValue = window.Cookies.get(prefix + field);
    if (savedValue) {
      utmValues[field] = savedValue;
    }
  });
  return Object.keys(utmValues).length > 0 ? utmValues : null;
}
var ENVOY_FT_PREFIX = "";
var ENVOY_LT_PREFIX = "lt_";

function setUtmValues() {
  var newUtmValues = getUtmValuesFromUrl();

  if ( newUtmValues ) {
    var ft_ExistingUtmValues = getUtmValuesFromCookies( ENVOY_FT_PREFIX );

    if ( ! ft_ExistingUtmValues ) {
      saveUtmValues( newUtmValues, ENVOY_FT_PREFIX );
    }

    clearSavedUtmValues( ENVOY_LT_PREFIX );
    saveUtmValues( newUtmValues, ENVOY_LT_PREFIX );
  }

  if ( document.referrer ) {
    if ( ! window.Cookies.get( ENVOY_FT_PREFIX + 'referrer' ) ) {
      window.Cookies.set( ENVOY_FT_PREFIX + 'referrer', document.referrer, { domain: ".envoy.com", expires: 365 } );
    } else {
      window.Cookies.set( ENVOY_LT_PREFIX + 'referrer', document.referrer, { domain: ".envoy.com", expires: 365 } );
    }
  }
}

function getUtmValuesFromUrl() {
  var utmValues = {}, hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (UTM_FIELDS.indexOf(hash[0]) > -1) {
      utmValues[hash[0]] = hash[1];
    }
  }
  return Object.keys(utmValues).length > 0 ? utmValues : null;
}

function saveUtmValues(utmValues, prefix, setReferrer) {
  prefix = prefix || "";
  if (setReferrer === undefined) setReferrer = true;
  for (var field in utmValues) {
    window.Cookies.set(prefix + field, utmValues[field], { domain: ".envoy.com", expires: 365 } );
  }

  if ( setReferrer ) {
    window.Cookies.set( prefix + "referrer", document.referrer, { domain: ".envoy.com", expires: 365 } );
  }
}

function clearSavedUtmValues(prefix) {
  prefix = prefix || "";
  UTM_FIELDS.forEach(function(field) {
    window.Cookies.remove( prefix + field );
  });
}

function runIfMarketingAccepted() {
  if (window.Cookiebot && Cookiebot.consent.marketing) {
    setUtmValues();
  }
}

document.addEventListener("DOMContentLoaded", runIfMarketingAccepted);

window.addEventListener("CookiebotOnConsentReady", runIfMarketingAccepted);
`,
          }}
        />

        {/* Cookie prefs link handler */}
        <Script
          id="cookie-prefs-handler"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener('DOMContentLoaded', function() {
    var renewLink = document.querySelector('[cookie-link]');
    if (renewLink) {
      renewLink.addEventListener('click', function(event) {
          event.preventDefault();
          Cookiebot.renew();
      });
    }
});
`,
          }}
        />
      </body>
    </html>
  );
}