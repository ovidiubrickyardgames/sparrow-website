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
    about: {
      pageTitle: string;
      metaDescription: string;
      mainSection: {
        title: string;
        subTitle: string;
        btnTitle: string;
        btnURL: string;
      };
      team: {
        title: string;
        subTitle: string;
        members: {
          cosmin: {
            role: string;
            bio: string;
          };
          ovidiu: {
            role: string;
            bio: string;
          };
        };
      };
      press: {
        title: string;
        subTitle: string;
      };
      stats: {
        title: string;
        subTitle: string;
        mainStatTitle: string;
        mainStatSubTitle: string;
        items: Array<{
          stat: string;
          description: string;
        }>;
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
    outbound: {
      pageTitle: string;
      metaDescription: string;
      hero: {
        eyebrowLabel: string;
        eyebrowSuffix: string;
        titleHtml: string;
        subTitle: string;
        primaryBtn: string;
        secondaryBtn: string;
      };
      philosophy: {
        titleHtml: string;
        content: string;
      };
      advantages: {
        eyebrow: string;
        eyebrowSuffix: string;
        title: string;
        description: string;
        traditional: {
          title: string;
          items: Array<{ title: string; content: string }>;
        };
        managed: {
          title: string;
          items: Array<{ title: string; content: string }>;
        };
      };
      lifecycle: {
        eyebrow: string;
        eyebrowSuffix: string;
        title: string;
        description: string;
        phases: Array<{ step: string; title: string; content: string }>;
      };
      tiers: {
        eyebrow: string;
        eyebrowSuffix: string;
        title: string;
        description: string;
        retainer: {
          badge: string;
          title: string;
          description: string;
          features: string[];
          btnText: string;
        };
        performance: {
          badge: string;
          title: string;
          description: string;
          features: string[];
          btnText: string;
        };
      };
    };
    solutions: {
      pageTitle: string;
      metaTitle: string;
      metaDescription: string;
      hero: {
        titleHtml: string;
        subTitle: string;
        primaryBtn: string;
        secondaryBtn: string;
      };
      pillars: {
        eyebrow: string;
        titleHtml: string;
        description: string;
      };
      methodology: {
        eyebrow: string;
        titleHtml: string;
        phases: Array<{ step: string; title: string; desc: string }>;
      };
      implementations: {
        eyebrow: string;
        titleHtml: string;
        description: string;
      };
      heroAlt: {
        titleHtml: string;
        subTitle: string;
      };
      techInfrastructureTitle: string;
      finalCtaTitle: string;
      finalCtaSubTitle: string;
      detailBookConsultation: string;
      detailExploreBlueprint: string;
      detailTrustedPartner: string;
      detailTheSolution: string;
      detailTechnicalBlueprint: string;
      detailBlueprintDefaultTitle: string;
      detailBlueprintDefaultSub: string;
      detailPlatformWorkflowBlueprint: string;
      detailControlPanelMonitoringInterface: string;
      detailSystemSpecs: string;
      detailSpecsDefaultDescription: string;
      detailSpecsBadge1: string;
      detailSpecsBadge2: string;
      detailTheProcess: string;
      detailStage: string;
      detailFaqTitle: string;
      detailFaqSub: string;
      detailFaqFallbackQuestion1: string;
      detailFaqFallbackAnswer1: string;
      detailFaqFallbackQuestion2: string;
      detailFaqFallbackAnswer2: string;
      detailFaqFallbackQuestion3: string;
      detailFaqFallbackAnswer3: string;
      detailFaqFallbackQuestion4: string;
      detailFaqFallbackAnswer4: string;
    };
    blog: {
      pageTitle: string;
      metaDescription: string;
      ogTitle: string;
      title: string;
      subTitle: string;
      secondTitle: string;
      secondSubTitle: string;
      minRead: string;
      feedbackTitle: string;
      yes: string;
      no: string;
      relatedArticles: string;
      tocTitle: string;
    },
    insights: {
      pageTitle: string;
      metaDescription: string;
      ogTitle: string;
      title: string;
      subTitle: string;
      secondTitle: string;
      secondSubTitle: string;
      minRead: string;
      feedbackTitle: string;
      yes: string;
      no: string;
      relatedArticles: string;
      tocTitle: string;
    },
    fourOhFour: {
      pageTitle: string;
      subTitle: string;
      content: string;
      btnTitle: string;
    };
  };
}
