// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Case Studies", url: "/case-studies" },
  { name: "About Us", url: "/about" },
  { name: "Join Our Team", url: "/careers" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Services",
    links: [
      { name: "Custom Solutions", url: "/services" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Consulting", url: "/consulting" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Join Our Team", url: "/careers" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};