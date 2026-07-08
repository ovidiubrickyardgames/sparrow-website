import type { CopywritingSchema } from './schema';

export const en: CopywritingSchema = {
  site: {
    title: 'Sparrow',
    tagline: 'Applied R&D & Innovation Studio',
    description:
      'Sparrow is an established Innovation Studio and Applied R&D Lab. We build proprietary deep tech, live immersive platforms, and AI-driven SaaS to accelerate innovation for our partners and EU funding programs.',
    description_short:
      'Established Innovation Studio and Applied R&D Lab specializing in AI and Immersive Tech.',
    url: 'https://www.sparrow.com',
    author: 'Sparrow',
  },
  navigation: {
    navBarLinks: [
      { name: 'Our Approach', url: '#approach' },
      { name: 'Capabilities', url: '#capabilities' },
      { name: 'Pricing', url: '#pricing' },
      { name: 'Audit your pipeline', url: '#audit' },
    ],
    footerLinks: [
      {
        section: 'Company',
        links: [
          { name: 'Contact', url: '/#contact' },
        ],
      },
    ],
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      x: 'https://twitter.com/',
      github: 'https://github.com/sparrow/Sparrow',
      google: 'https://www.google.com/',
      slack: 'https://slack.com/',
    },
    craftedBy: 'Crafted by',
    allRightsReserved: 'All rights reserved.',
  },
  features: [
    {
      heading: 'Applied R&D Experts',
      content:
        'Benefit from our senior innovation team that treats your product as a strategic venture. We provide deep-tech guidance and high-performance results for complex challenges.',
      svg: 'groups',
    },
    {
      heading: 'Proprietary Frameworks',
      content:
        'Launch faster with our battle-tested, ready-to-deploy innovation layers. We eliminate technical debt from day one, keeping your venture lean and your scaling path clear.',
      svg: 'verified',
    },
    {
      heading: 'Deep Tech Foundations',
      content:
        'Built with long-term ROI in mind. Our solutions use modular, future-proof architectures, ensuring your platform can scale from internal prototype to industry-leading enterprise.',
      svg: 'books',
    },
    {
      heading: 'Productized Experiences',
      content:
        'We bridge the gap between complex engineering and effortless usability. Every line of code is written to enhance the user experience and drive high-ticket conversion.',
      svg: 'frame',
    },
  ],
  pricing: {
    title: 'Scalable Engineering Plans',
    subTitle:
      'Choose the perfect roadmap for your digital growth, from rapid MVPs to enterprise-grade AI integration.',
    badge: 'Most Popular',
    thirdOption: 'Custom Enterprise Project?',
    btnText: 'Book a Consultation',
    starterKit: {
      name: 'MVP Launchpad',
      description: 'Perfect for early-stage startups',
      price: '2,499',
      cents: '.00',
      billingFrequency: 'USD / project',
      features: [
        'Customized SaaS Boilerplate',
        'Integrated Auth & Payments',
        'Deployment & Setup Support',
        'Standard Maintenance (3 months)',
      ],
      purchaseBtnTitle: 'Get Started',
      purchaseLink: '/contact',
    },
    professionalToolbox: {
      name: 'Scale & AI Engine',
      description: 'For high-growth digital products',
      price: '5,999',
      cents: '.00',
      billingFrequency: 'USD / month',
      features: [
        'Dedicated Engineering Team',
        'Advanced AI Agent Integration',
        'Continuous Feature Development',
        'Priority Support & 24/7 Monitoring',
        'Custom UI/UX Design Refinement',
      ],
      purchaseBtnTitle: 'Start Scaling',
      purchaseLink: '/contact',
    },
  },
  faqs: {
    title: 'Frequently<br />asked questions',
    subTitle:
      'Common questions about our custom development and productized solutions.',
    faqs: [
      {
        question:
          'What is the difference between your Custom Services and Productized Solutions?',
        answer:
          'Custom Services involve building a unique software product from the ground up tailored to your specific business needs. Productized Solutions are battle-tested, ready-to-deploy frameworks (like our SaaS Launchpad) that we customize for you, allowing for a much faster time-to-market.',
      },
      {
        question: 'Which tech stack do you primarily use?',
        answer:
          'We specialize in modern, high-performance stacks including Next.js, React, TypeScript, Node.js, and Python. For mobile, we use Flutter or React Native. Our AI solutions are built using LangChain, OpenAI, and Claude integration.',
      },
      {
        question:
          'How long does it take to launch a product using a Productized Solution?',
        answer:
          'Typically, we can have a customized version of our SaaS Launchpad or E-commerce Core ready for production in 2 to 4 weeks, depending on the level of customization required.',
      },
      {
        question: 'Do you provide ongoing support and maintenance?',
        answer:
          'Yes, we offer various support packages ranging from standard bug fixes and security updates to dedicated DevOps management and feature scaling for enterprise clients.',
      },
      {
        question: 'Can you help integrate AI into our existing software?',
        answer:
          "Absolutely. One of our core specialties is 'AI Retrofitting' – identifying where intelligent automation can provide the most value in your current workflow and building the necessary integration layers.",
      },
      {
        question: 'Do we own the intellectual property of the custom code?',
        answer:
          'Yes, for all custom development projects, you retain 100% ownership of the IP and the source code upon project completion and final payment.',
      },
    ],
  },
  pages: {
    home: {
      metaTitle: 'Sparrow | Outbound Sales Partnership',
      metaDescription: 'We Build, Manage, and Close Your B2B Pipeline. Sparrow is an end-to-end outbound sales partner.',
      hero: {
        eyebrowLabel: 'DONE-FOR-YOU • PERFORMANCE-BASED',
        titleHtml: 'We handle the sales pipeline.<br/>You just <span class="underline italic">close.</span>',
        subTitle: "We find your buyers, run the outreach, and book the meetings — your closers just show up and do what they're best at.",
        primaryBtn: 'Get a free pipeline review',
        primaryBtnSub: '15-min call · no commitment',
        primaryBtnURL: '#audit',
      },
      agitation: {
        titleHtml: 'The B2B Sales Trap:<br/><span class="font-bold">Paying Closers to Do Admin</span>',
        subTitle: 'If your outbound engine is stalling, your best people are probably doing the wrong work.',
        stats: [
          { stat: '70%', description: 'of a sales team\'s time is wasted on data entry and CRM updates.' },
          { stat: '28%', description: 'of their day is actually spent selling.' },
          { stat: '1-3%', description: 'response rates are the standard for manual cold email.' }
        ],
        conclusion: 'You don\'t need another software tool. You need a partner to run the entire top-of-funnel motion for you.'
      },
      solution: {
        titleHtml: 'The Solution: <span class="font-bold">The Hybrid Model</span>',
        subTitle: 'We don\'t just hand you a list of leads and walk away. We act as your revenue team, bridging the gap between automated prospecting and human relationship building.',
        items: [
          {
            title: '1. Intent-Based Targeting',
            content: 'We don\'t guess who wants to buy. We use buying signals to find companies actively looking for your solution. You get guaranteed matches, not random lists.'
          },
          {
            title: '2. Multi-Channel Execution',
            content: 'We run tailored campaigns across Email and LinkedIn. We test our copy and use personalized angles so your message actually gets read.'
          },
          {
            title: '3. Human Sales Reps',
            content: 'When the automation stops, our team steps in. Our business developers manage replies, handle objections, and support you in closing the deal.'
          }
        ]
      },
      process: {
        titleHtml: 'Our Outbound <span class="font-bold">Process</span>',
        subTitle: 'Predictable revenue requires a strategy that adapts. We test, learn, and adjust to your market every week.',
        phases: [
          {
            title: 'Design & Target',
            content: 'We analyze your best customers, study your competitors, and build custom lists to find high-quality leads.'
          },
          {
            title: 'Engage & Nurture',
            content: 'We write specific messages for every step, managing automated sequences across email and LinkedIn.'
          },
          {
            title: 'Adapt & Close',
            content: 'We review the replies, refine our scripts, and change our angles to match what your buyers actually want to hear.'
          }
        ]
      },
      analytics: {
        titleHtml: 'Track Actual <span class="font-bold">Revenue</span>',
        subTitle: 'We measure our success by your pipeline value, not vanity metrics like open rates.',
        items: [
          { title: 'Conversion Rates', content: 'See exactly how many prospects turn into booked meetings.' },
          { title: 'Acquisition Cost', content: 'Track your CAC so you know exactly how much a new customer costs to acquire.' },
          { title: 'Pipeline Value', content: 'Forecast your revenue based on the active deals we bring to your CRM.' }
        ]
      },
      pricing: {
        titleHtml: 'Predictable Pipeline <span class="font-bold">Packages</span>',
        subTitle: 'Choose the partnership level that fits your growth targets.',
        plans: {
          starter: {
            title: 'Starter',
            description: 'Best for validating outbound and getting your first wins.',
            price: '€1,000 / month',
            features: [
              'Up to 250 qualified leads',
              'Up to 1,000 cold emails sent',
              '1-3 Ideal Customer Profiles (ICPs)',
              'Outbound automation setup',
              'Monthly performance reporting'
            ]
          },
          growth: {
            title: 'Growth',
            badge: 'Most Popular',
            description: 'Best for scaling a consistent B2B pipeline.',
            price: '€2,500 / month',
            features: [
              '250-750 qualified leads',
              '1,000-3,000 cold emails sent',
              '3-5 Ideal Customer Profiles (ICPs)',
              'Full outbound execution (LinkedIn + Email)',
              'Branded presentations for meetings',
              'Bi-weekly check-ins & script updates'
            ]
          },
          scale: {
            title: 'Scale',
            description: 'Best for companies replacing an internal SDR team.',
            price: '€5,000+ / month',
            features: [
              'Unlimited volume (750+ leads / 3,000+ emails)',
              'Dedicated business developer (35-40 hours)',
              'Meeting support and direct sales help',
              'CRM integration and tech support',
              'Priority support & quarterly strategy'
            ]
          }
        }
      },
      cta: {
        titleHtml: 'Let\'s Build Your <span class="font-bold">Pipeline.</span>',
        subTitle: 'We don\'t just deliver leads. We build predictable sales engines. Let\'s review your current outbound setup and find the gaps.',
        btnText: 'Audit Your Pipeline',
        btnURL: '#audit'
      }
    },

    contact: {
      pageTitle: 'Contact | Sparrow',
      metaDescription:
        "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
      ogTitle: 'Contact Us | Sparrow',
      title: 'Contact us',
      subTitle:
        "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
      formTitle: 'Fill in the form below',
      formSubTitle: "We'll get back to you in 1-2 business days.",
      webhookUrl:
        'https://n8n.brainsymphony.tech/webhook/5daf6a9b-8150-49a4-ac3c-be4a49a7f151',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone Number',
        details: 'Details',
      },
      submitBtnText: 'Send Message',
      sendingText: 'Sending...',
      successText: 'Message Sent!',
      errorText: 'Error! Try again',
      phoneErrorText: 'Please enter a valid phone number.',
    },
    fourOhFour: {
      pageTitle: 'Page Not Found | Sparrow',
      subTitle: "Oops, this isn't the tool you were looking for!",
      content:
        "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.",
      btnTitle: 'Go Back',
    },
  },
};
