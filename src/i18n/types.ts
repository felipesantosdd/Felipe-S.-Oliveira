export type Lang = "pt" | "en";

export interface Translation {
  hero: {
    desc1: string;
    desc2: string;
    desc3: string;
    contactLabel: string;
    contactBtn: string;
  };
  scramble: {
    nameLabel: string;
    roleLabel: string;
    expLabel: string;
    expValue: string;
    roles: string[];
  };
  tools: {
    label: string;
  };
  experience: {
    sectionTag: string;
    sectionLabel: string;
    headingWhite: string;
    headingRed: string;
    headerRight: string;
    entries: {
      id: string;
      period: string;
      role: string;
      description: string;
    }[];
  };
  projects: {
    sectionTag: string;
    sectionLabel: string;
    headingWhite: string;
    headingRed: string;
    headerRight: string;
    accessDenied: string;
    confidentialSub: string;
    inDev: string;
    viewLive: string;
    viewGithub: string;
    denied: string;
    confidentialCard: string;
    public: {
      id: string;
      description: string;
    }[];
    confidential: {
      id: string;
      description: string;
    }[];
  };
  about: {
    sectionTag1: string;
    headingWhite: string;
    headingRed: string;
    headerRight: string;
    cards: {
      category: string;
      title: string;
      desc: string;
    }[];
  };
  faq: {
    sectionTag: string;
    headingWhite: string;
    headingRed: string;
    headerRight: string;
    items: { q: string; a: string }[];
  };
  cta: {
    tagLeft: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    desc: string;
    btn: string;
  };
  footer: {
    tags: string[];
    servicesLabel: string;
    services: string[];
    contactLabel: string;
    contactMe: string;
    copyright: string;
  };
  nav: {
    items: { label: string; href: string }[];
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
}
