// Reformer.network brand on the runtime branding mechanism (replaces branding/constants/*.js).
//
// Authored in TypeScript against @ocelot-social/branding: `defineBranding` type-checks these
// overrides against the branding schema; a wrong key or type FAILS the build. Only values that
// differ from the framework defaults are set (sparse override) — the group name lengths and the
// landing page match the default and are therefore absent on purpose.
//
// Content layout: assets/ = images + fonts + the brand stylesheet, html/ = static page HTML per
// locale. Paths are ROOT-relative; the multi-brand build namespaces them to /branding/reformer/…
// (collision-free) and serves the folder at runtime — no image copy.
//
// NOTE — theme: the base palette and the font families are RUNTIME tokens below; the Inter @font-face
// and the ~40 bespoke component rules live in assets/css/branding.css (listed in `assets.css`,
// injected at runtime). Both used to be the build-time overlay assets/styles/imports/_branding.scss,
// which the old Dockerfile copied over webapp/ before `yarn build`. The nuxt bundle is brand-agnostic
// since the ONBUILD overlays were removed, so that file stopped applying — without this port the
// instance would render vanilla green with Lato and none of its own rules.
//
// NOT here:
//   • e-mails / e-mail links (SUPPORT_EMAIL, ORGANIZATION_LINK, SUPPORT_LINK) are ENV → helmfile;
//   • SHOW_CONTENT_FILTER_* (was constants/filter.js) and SHOW_GROUP_BUTTON_IN_HEADER (was
//     constants/groups.js) are ENV now → helmfile/environments/*.yaml.gotmpl;
//   • the CATEGORY LIST is DB seed data → data/categories-branding.ts (min/max match the default);
//   • badge seed data (data/badges-branding.ts) and badge images (public/) are packed into the archive
//     verbatim and overlaid at bootstrap.
import { defineBranding, type LinkPageKey } from '@ocelot-social/branding'

const HTML_FILE: Partial<Record<LinkPageKey, string>> = {
  organization: 'organization',
  donate: 'donate',
  imprint: 'imprint',
  termsAndConditions: 'terms-and-conditions',
  codeOfConduct: 'code-of-conduct',
  dataPrivacy: 'data-privacy',
  faq: 'faq',
  support: 'support',
}
const html = Object.fromEntries(
  Object.entries(HTML_FILE).map(([page, file]) => [
    page,
    { de: `html/de/${file}.html`, en: `html/en/${file}.html` },
  ]),
)

export default defineBranding({
  about: {
    description: 'Reformer.network — gemeinsam verändern wir die Gesellschaft.',
  },
  // The brand's base palette + fonts as RUNTIME tokens. Orange = rgb(239,124,0) (primary), teal =
  // rgb(0,168,181) (the old $color-tertiary, used as the hover/accent), near-black = rgb(56,57,55)
  // (secondary, header + donation bar). Values are the resolved Sass output of the old variable graph.
  theme: {
  },
  metadata: {
    applicationName: 'Reformer.network',
    applicationShortName: 'Reformer.network',
    applicationDescription: 'Reformer.network',
    organizationName: 'Stichting Rudulin',
    organizationJurisdiction: 'Amsterdam',
  },
  group: {
    // stricter than the default (3): require a longer group description.
    descriptionMinLength: 10,
  },
  // Both entry pages ran without the header (was constants/login.js / registration.js `LAYOUT`), so
  // the hero background and the text-box overlay in branding.css get the full viewport.
  login: { layout: 'blank' },
  registration: { layout: 'blank' },
  donation: {
    progressBarColorType: 'uni',
  },
  logos: {
    headerPath: 'assets/logo-horizontal.svg',
    headerMobilePath: 'assets/logo-horizontal.svg',
    signupPath: 'assets/logo-squared.svg',
    welcomePath: 'assets/logo-squared.svg',
    logoutPath: 'assets/logo-squared.svg',
    passwordResetPath: 'assets/logo-squared.svg',
  },
  links: {
    // Every static page is INTERNAL here (the old links.js had every externalLink commented out). The
    // framework defaults point four of them at ocelot.social, so they are cleared explicitly — `null`
    // means "no external link", which is distinct from omitting the field (that inherits the default).
    pages: {
      organization: { externalLink: null },
      donate: { externalLink: null },
      imprint: { externalLink: null },
      support: { externalLink: null },
    },
    footerOrder: [
      'organization',
      'codeOfConduct',
      'dataPrivacy',
      'termsAndConditions',
      'faq',
      'support',
      'imprint',
    ],
  },
  assets: {
    css: ['assets/css/theme.css', 'assets/css/branding.css'],
    html,
    favicon: 'assets/favicon.ico',
  },
  // No `locales`: this brand never carried i18n overrides (the old locales/ folder held only the
  // static-page HTML, which now lives in html/).
})
