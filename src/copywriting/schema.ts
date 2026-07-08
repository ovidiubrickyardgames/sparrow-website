export interface NavBarLink {
  name: string;
  url: string;
}

export interface FooterLinkSection {
  section: string;
  links: Array<{ name: string; url: string }>;
}

export interface SocialLinks {
  facebook: string;
  x: string;
  github: string;
  google: string;
  slack: string;
}

export interface FeatureItem {
  heading: string;
  content: string;
  svg: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  cents: string;
  billingFrequency: string;
  features: string[];
  purchaseBtnTitle: string;
  purchaseLink: string;
}

export interface PricingData {
  title: string;
  subTitle: string;
  badge: string;
  thirdOption: string;
  btnText: string;
  starterKit: PricingPlan;
  professionalToolbox: PricingPlan;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  subTitle: string;
  faqs: FAQItem[];
}

export interface CopywritingSchema {
  site: {
    title: string;
    tagline: string;
    description: string;
    description_short: string;
    url: string;
    author: string;
  };
  navigation: {
    navBarLinks: NavBarLink[];
    footerLinks: FooterLinkSection[];
    socialLinks: SocialLinks;
    craftedBy: string;
    allRightsReserved: string;
  };
  features: FeatureItem[];
  pricing: PricingData;
  faqs: FAQData;
  pages: {
    home: {
      metaTitle?: string;
      metaDescription?: string;
      hero: {
        eyebrowLabel: string;
        titleHtml: string;
        subTitle: string;
        primaryBtn: string;
        primaryBtnSub?: string;
        primaryBtnURL: string;
      };
      agitation: {
        titleHtml: string;
        subTitle: string;
        stats: Array<{ stat: string; description: string }>;
        conclusion: string;
      };
      solution: {
        titleHtml: string;
        subTitle: string;
        items: Array<{ title: string; content: string }>;
      };
      process: {
        titleHtml: string;
        subTitle: string;
        phases: Array<{ title: string; content: string }>;
      };
      analytics: {
        titleHtml: string;
        subTitle: string;
        items: Array<{ title: string; content: string }>;
      };
      pricing: {
        titleHtml: string;
        subTitle: string;
        plans: {
          starter: {
            title: string;
            description: string;
            price: string;
            features: string[];
          };
          growth: {
            title: string;
            description: string;
            price: string;
            features: string[];
            badge: string;
          };
          scale: {
            title: string;
            description: string;
            price: string;
            features: string[];
          };
        };
      };
      cta: {
        titleHtml: string;
        subTitle: string;
        btnText: string;
        btnURL: string;
      };
    };

    contact: {
      pageTitle: string;
      metaDescription: string;
      ogTitle: string;
      title: string;
      subTitle: string;
      formTitle: string;
      formSubTitle: string;
      webhookUrl: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        details: string;
      };
      submitBtnText: string;
      sendingText: string;
      successText: string;
      errorText: string;
      phoneErrorText: string;
    };
    fourOhFour: {
      pageTitle: string;
      subTitle: string;
      content: string;
      btnTitle: string;
    };
  };
}
