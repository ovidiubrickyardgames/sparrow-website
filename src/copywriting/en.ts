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
        primaryBtn: 'Get a free pipeline review →',
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
        titleHtml: 'Our Outbound Process',
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
    about: {
      pageTitle: 'About Us | Sparrow',
      metaDescription:
        'Learn more about the team behind Sparrow. We are an Innovation Studio and Applied R&D Lab specializing in AI and Immersive Tech.',
      mainSection: {
        title: 'Engineering the Future of Innovation',
        subTitle:
          'At Sparrow, we combine technical excellence with strategic foresight. Our mission is to bridge the gap between deep tech research and commercial implementation, helping companies scale through applied AI and immersive technology.',
        btnTitle: 'Meet the Team',
        btnURL: '#team',
      },
      team: {
        title: 'The Minds Behind the Magic',
        subTitle:
          "Our multidisciplinary team brings together expertise in AI research, software engineering, and strategic innovation to solve the world's most complex technical challenges.",
        members: {
          cosmin: {
            role: 'Founder & CEO',
            bio: 'PhD Researcher specializing in the intersection of VR, neuroscience, and cognitive behavioral therapy. He bridges the gap between clinical research and gamified immersive experiences for wellness.',
          },
          ovidiu: {
            role: 'Founder & CTO',
            bio: 'Systems architect specializing in complex XR frameworks and applied AI. He focuses on engineering high-performance technical foundations for advanced immersive and agentic solutions.',
          },
        },
      },
      press: {
        title: 'In the Media',
        subTitle:
          "Our journey and vision have been featured in major publications and platforms. Discover how we're redefining the future of technology.",
      },
      stats: {
        title: 'Our Impact by the Numbers',
        subTitle:
          "Technical depth and innovation excellence aren't just buzzwords for us—they're the foundation of everything we build.",
        mainStatTitle: 'Growth',
        mainStatSubTitle:
          'Driving measurable impact for our partners and studio ventures',
        items: [
          {
            stat: '100%',
            description:
              'focus on engineering-grade AI and immersive solutions',
          },
          {
            stat: 'Proprietary',
            description: 'R&D architecture used across all studio ventures',
          },
          {
            stat: 'Verified',
            description: 'technical excellence by industry standards',
          },
        ],
      },
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
    outbound: {
      pageTitle:
        'Managed Outbound Service | Systematic B2B Acquisition | Sparrow',
      metaDescription:
        'High-Volume B2B Prospecting. Executed with Precision. A fully managed outbound service putting your product directly in front of the right buyers.',
      hero: {
        eyebrowLabel: 'Managed Outbound Service',
        eyebrowSuffix: 'Premium Pipeline',
        titleHtml: `High-Volume B2B Prospecting.<br />
              <span
                class="font-bold"
              >
                Executed with Precision.
              </span>`,
        subTitle:
          'Stop paying for outdated databases and building complex mailbox architectures. We run a fully managed outbound engine that handles research, deliverability, and personalization to book qualified meetings directly in your calendar.',
        primaryBtn: 'Explore the Service',
        secondaryBtn: 'View Partnership Tiers',
      },
      philosophy: {
        titleHtml: `You bring the product.<br />
            <span
              class="font-bold"
            >
              We provide the distribution.
            </span>`,
        content:
          "We don't sell \"guaranteed meetings.\" No agency can force a market to buy a product that lacks product-market fit. Instead, we provide industrial-grade distribution. We leverage our proprietary infrastructure to scale your outreach flawlessly. If your product is ready for the market, our service will find the buyers.",
      },
      advantages: {
        eyebrow: 'The Competitive Advantage',
        eyebrowSuffix: 'Strategic Edge',
        title: 'Engineered for Higher Conversion.',
        description:
          'Standard outbound agencies rely on manual templates and shared networks. We built a proprietary execution engine that lands primary inbox meetings.',
        traditional: {
          title: 'Traditional Agencies & VAs',
          items: [
            {
              title: 'Shallow Personalization',
              content:
                'Virtual assistants copying and pasting generic icebreakers, resulting in flat, low-converting messages.',
            },
            {
              title: 'Shared IP Networks',
              content:
                'Campaigns run on generic third-party tools sharing IP pools with spam senders, tanking deliverability.',
            },
            {
              title: 'Stale Databases',
              content:
                'Purchasing pre-built contact lists containing outdated information, bounces, and active spam traps.',
            },
            {
              title: 'Disjointed Handoffs',
              content:
                'Forcing your internal sales team to sift through auto-replies, out-of-office notes, and unqualified rejections.',
            },
          ],
        },
        managed: {
          title: 'Sparrow Managed Outbound',
          items: [
            {
              title: 'AI-Powered Context Engines',
              content:
                'Reasoning agents analyze prospect websites, product fit, and context to write bespoke copy at scale.',
            },
            {
              title: 'Dedicated Infrastructure Isolation',
              content:
                'Proprietary sending grid with fully isolated IP networks, dedicated routing, and custom deliverability guards.',
            },
            {
              title: 'Real-Time Programmatic Scraping',
              content:
                'Live, continuous data sourcing and triple-layer validation, ensuring contact lists are active when we press send.',
            },
            {
              title: 'SDR-Screened Calendar Bookings',
              content:
                'We filter out rejections and handle replies, booking qualified warm leads directly into your SDR calendar.',
            },
          ],
        },
      },
      lifecycle: {
        eyebrow: 'Campaign Lifecycle',
        eyebrowSuffix: 'Modular Execution',
        title: 'End-to-End Campaign Execution',
        description:
          'We handle the complex machinery under the hood, presenting your closing team with clean, warm opportunities.',
        phases: [
          {
            step: 'PHASE 01',
            title: 'Precision Targeting',
            content:
              'We identify and extract bespoke data lists aligned perfectly with your Ideal Customer Profile.',
          },
          {
            step: 'PHASE 02',
            title: 'AI-Assisted Engagement',
            content:
              'We utilize reasoning agents to process leads and personalize messaging at a volume human SDRs cannot match.',
          },
          {
            step: 'PHASE 03',
            title: 'Flawless Deliverability',
            content:
              'Our proprietary backend infrastructure ensures your campaigns land in the primary inbox, completely isolated from spam filters.',
          },
          {
            step: 'PHASE 04',
            title: 'Rigorous QA & Handoff',
            content:
              'Every campaign undergoes strict quality assurance before deployment. When prospects reply, we hand the warm conversation directly to your closing team.',
          },
        ],
      },
      tiers: {
        eyebrow: 'The Partnership Model',
        eyebrowSuffix: 'Aligned Models',
        title: 'Aligned Incentives.',
        description:
          'We operate as your dedicated outbound arm. A transparent monthly retainer covers the execution, with upside tiers triggered only when the campaigns convert.',
        retainer: {
          badge: 'RETAINER MODEL',
          title: 'Managed Outbound Retainer',
          description:
            'A transparent monthly baseline covering campaign execution, strategy, and full operations.',
          features: [
            'Full campaign strategy and copywriting',
            'Continuous data extraction and list hygiene',
            'Complete management of the sending infrastructure',
          ],
          btnText: 'Request a Pilot Campaign',
        },
        performance: {
          badge: 'PERFORMANCE TIER',
          title: 'Success-Aligned Tiers',
          description:
            'Upside performance fees directly aligned with campaign conversion and pipeline revenue.',
          features: [
            'Scales based on successful campaign sales',
            'Ensures our team is directly incentivized by your revenue growth',
            'Zero hidden setup fees or markup outside performance targets',
          ],
          btnText: 'Request a Pilot Campaign',
        },
      },
    },
    solutions: {
      pageTitle: 'Solutions | Architecting Intelligent Systems | Sparrow',
      metaTitle: 'Enterprise Solutions | Sparrow',
      metaDescription:
        'Architecting Intelligent Systems: Custom software, AI agents, and spatial environments engineered to scale your business and eliminate operational bottlenecks.',
      hero: {
        titleHtml: `Architecting <span class="font-bold">Intelligent Systems</span>.`,
        subTitle:
          'Custom software, AI agents, and spatial environments engineered to scale your business and eliminate operational bottlenecks.',
        primaryBtn: 'Book a Solutions Mapping Call',
        secondaryBtn: 'Explore Pillars',
      },
      pillars: {
        eyebrow: 'Solution Pillars',
        titleHtml: `Architecting <span class="font-bold">Scalable Outcomes</span>.`,
        description:
          'We organize our capabilities into four core pillars. Each one bridges the gap between deep tech R&D and real business results.',
      },
      methodology: {
        eyebrow: 'Applied R&D Methodology',
        titleHtml: `The Engineering <span class="font-bold">Lifecycle</span>.`,
        phases: [
          {
            step: 'PHASE 01',
            title: 'Technical Audit',
            desc: 'We map your business constraints and audit your existing technical architecture to define the exact problem.',
          },
          {
            step: 'PHASE 02',
            title: 'R&D and Prototyping',
            desc: 'We test core assumptions and build prototypes backed by validated academic research and our university partnerships.',
          },
          {
            step: 'PHASE 03',
            title: 'Agile Deployment',
            desc: 'We ship iteratively. Every rollout is secured by strict data standards and automated testing workflows.',
          },
          {
            step: 'PHASE 04',
            title: 'Optimization',
            desc: 'We monitor system performance in the real world and continuously train the AI models to ensure long-term scale.',
          },
        ],
      },
      implementations: {
        eyebrow: 'Lab to Market',
        titleHtml: `Featured <span class="text-brand-accent-1">Implementations</span>.`,
        description:
          'We do not just build for others. We build for ourselves. We use our internal flagship ventures to prove our engineering capabilities.',
      },
      heroAlt: {
        titleHtml: `Ready to build your next system or <span class="text-brand-accent-1">scale your outbound pipeline</span>?`,
        subTitle:
          'Let us discuss your technical roadmap. Schedule an audit or explore partnership opportunities with our engineering team.',
      },
      techInfrastructureTitle: 'Technical Infrastructure',
      finalCtaTitle: 'Build Your Digital Advantage',
      finalCtaSubTitle: "Ready to engineer a solution that scales? Let's map out your technical roadmap and build the future of your enterprise together.",
      detailBookConsultation: 'Book a Consultation',
      detailExploreBlueprint: 'Explore Blueprint',
      detailTrustedPartner: 'Trusted R&D and Integration Partner',
      detailTheSolution: 'The Solution',
      detailTechnicalBlueprint: 'Technical Blueprint',
      detailBlueprintDefaultTitle: 'System Architecture & Dashboards',
      detailBlueprintDefaultSub: 'A technical breakdown of the UI design layouts and database monitoring systems engineered for this solution.',
      detailPlatformWorkflowBlueprint: 'Platform Workflow Blueprint',
      detailControlPanelMonitoringInterface: 'Control Panel & Monitoring Interface',
      detailSystemSpecs: 'System Specs',
      detailSpecsDefaultDescription: 'All systems are architected on secure, isolation-first foundations, using modern frameworks for high performance, maximum scalability, and clean API boundaries.',
      detailSpecsBadge1: 'Enterprise Compliance & Data Isolation Protocols',
      detailSpecsBadge2: 'High SLA Uptime & Distributed Fault Tolerance',
      detailTheProcess: 'The Process',
      detailStage: 'Stage',
      detailFaqTitle: 'Frequently Asked Questions',
      detailFaqSub: 'Common queries regarding the integration, timeline, and deliverables of our engineering services.',
      detailFaqFallbackQuestion1: 'How long does implementation take?',
      detailFaqFallbackAnswer1: 'Our typical engagement ranges from 4 to 8 weeks for a complete deployment, including custom auditing, integration, and training.',
      detailFaqFallbackQuestion2: 'Do we own the custom software/IP?',
      detailFaqFallbackAnswer2: 'Yes, absolutely. Once final delivery is completed and paid, you retain 100% ownership of the custom codebase and intellectual property.',
      detailFaqFallbackQuestion3: 'Can this solution integrate with our current systems?',
      detailFaqFallbackAnswer3: 'Yes. All our AI agentic pipelines and custom software are built with API-first architectures to connect natively with your existing CRMs, ERPs, and internal tools.',
      detailFaqFallbackQuestion4: 'What support packages do you offer post-launch?',
      detailFaqFallbackAnswer4: 'We offer tiered SLA-backed support packages including 24/7 monitoring, security updates, and dedicated engineering allocations for scaling your features.',
    },
    blog: {
      pageTitle: 'Blog | Sparrow',
      metaDescription:
        "Stay up-to-date with the latest trends and developments in the construction industry with insights from Sparrow's team of industry experts.",
      ogTitle: 'Construction Industry Blog | Sparrow',
      title: 'Your Gateway to Construction Excellence',
      subTitle:
        'Explore the latest news, tips, and insights from Sparrow to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.',
      secondTitle: 'Insights',
      secondSubTitle:
        "Stay up-to-date with the latest trends and developments in the construction industry with insights from Sparrow's team of industry experts. ",
      minRead: 'min read',
      feedbackTitle: 'Was this post helpful?',
      yes: 'Yes',
      no: 'No',
      relatedArticles: 'Related articles',
      tocTitle: 'Table of Contents:',
    },
    insights: {
      pageTitle: 'Insights | Sparrow',
      metaDescription:
        "Stay up-to-date with the latest trends and developments in the construction industry with insights from Sparrow's team of industry experts.",
      ogTitle: 'Construction Industry Blog | Sparrow',
      title: 'Your Gateway to Construction Excellence',
      subTitle:
        'Explore the latest news, tips, and insights from Sparrow to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.',
      secondTitle: 'Insights',
      secondSubTitle:
        "Stay up-to-date with the latest trends and developments in the construction industry with insights from Sparrow's team of industry experts. ",
      minRead: 'min read',
      feedbackTitle: 'Was this post helpful?',
      yes: 'Yes',
      no: 'No',
      relatedArticles: 'Related articles',
      tocTitle: 'Table of Contents:',
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
