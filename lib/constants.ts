import { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  SnapchatLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Address } from "viem";

interface NavLink {
  label: string;
  href: string;
  blank?: boolean;
}

interface ServiceItem {
  title: string;
  description: string;
  imageSrc: string;
}

type FAQContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

interface FAQItem {
  question: string;
  // structured content blocks to enable rich rendering (paragraphs and lists)
  content: FAQContentBlock[];
}

interface RoadmapItem {
  isActive: boolean;
  title: string;
  goal: string;
}

interface PrivacyPolicyItem {
  title: string;
  items?: string[];
  desc?: string;
}

interface SocialMediaLink {
  href: string;
  platform: string;
  icon: Icon;
}

interface TermsOfServiceItem extends PrivacyPolicyItem {}

interface CookiesPolicyItem {
  title: string;
  items?: string[];
  desc?: string;
  table?: {
    headers: string[];
    rows: { type: string; purpose: string }[];
  };
}

export interface ChainlinkPriceFeed {
  name: string;
  address: Address;
  decimals: number;
  description: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About us", href: "/#about" },
  { label: "Tokenomics", href: "/#tokenomics" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Medium of Exchange",
    description:
      "Enable fast and low-cost transactions for everyday payments, making it easy to transfer value across borders.",
    imageSrc: "/images/medium_exchange.webp",
  },
  {
    title: "Store of Value",
    description:
      "A secure and reliable asset with limited supply, designed to preserve long-term value.",
    imageSrc: "/images/store_of_value.webp",
  },
  {
    title: "Staking & Rewards",
    description:
      "A secure and reliable asset with limited supply, designed to preserve long-term value.",
    imageSrc: "/images/staking_reward.webp",
  },
];

export const FEATURES: string[] = [
  "Payments: Pay for courses, certifications, and corporate training packages using the token at discounted rates.",
  "Taking: Stake tokens to unlock premium content, priority enrollment, or scholarships.",
  "Access: Exclusive access to masterclasses, mentorship sessions, and token-gated communities.",
  "Rewards: Earn tokens by completing courses, achieving milestones, or contributing content.",
  "Governance: Participate in community voting on new course topics, partnerships, and ecosystem development decisions.",
];

export const FAQS: FAQItem[] = [
  {
    question: "What is E3mel Business Token (E3B)?",
    content: [
      {
        type: "paragraph",
        text: "E3mel Business Token (E3B) is a utility token built on the Sui blockchain that powers the E3mel Business ecosystem. It enables access to premium educational content, provides tuition discounts, rewards user engagement, issues NFT-based certificates, and allows token holders to participate in platform governance.",
      },
    ],
  },
  {
    question: "What is the mission and vision of E3mel Business?",
    content: [
      {
        type: "paragraph",
        text: "Vision: To democratize access to business and management education globally.",
      },
      {
        type: "paragraph",
        text: "Mission: To empower individuals and enterprises with localized, affordable, and practical training in multiple languages, starting with Arabic and expanding worldwide.",
      },
    ],
  },
  {
    question: "What benefits do E3B token holders receive?",
    content: [
      {
        type: "list",
        items: [
          "Discounts and cashback on courses and certifications",
          "Staking rewards",
          "NFT-based, blockchain-verified diplomas",
          "Access to exclusive masterclasses, trainers, and events",
          "Governance rights to vote on new courses and platform expansions",
          "Referral and review incentives",
          "Enterprise API access for B2B clients",
        ],
      },
    ],
  },
  {
    question: "What is the total supply and pricing of E3B?",
    content: [
      {
        type: "list",
        items: [
          "Token Name: E3mel Business Token",
          "Symbol: E3B",
          "Blockchain: BNB Smart Chain",
          "Total Supply: 10,000,000,000 E3B",
          "Seed Round Price: $0.01",
          "Public Listing Price: $0.1",
        ],
      },
    ],
  },
  {
    question: "How much is being raised and in what phases?",
    content: [
      {
        type: "paragraph",
        text: "The project aims to raise a total of $27 million across three phases. Each phase includes structured vesting, unlock schedules, and incentives. Liquidity will be supported by market makers upon exchange listing.",
      },
      {
        type: "list",
        items: ["Seed Round: $5M", "Private Round: $7M", "Public Round: $15M"],
      },
    ],
  },
  {
    question:
      "When will E3B be listed on exchanges, and what's next on the roadmap?",
    content: [
      {
        type: "list",
        items: [
          "Q4 2025: Seed round launch and token integration into the platform",
          "Q1 2026: Exchange listings and governance beta launch",
          "Q2–Q3 2026: Expansion into Spanish and Portuguese content",
          "2027: Partnerships in Africa and Latin America, plus enterprise licensing rollout",
        ],
      },
    ],
  },
  {
    question: "How does E3mel Business use blockchain beyond just a token?",
    content: [
      {
        type: "list",
        items: [
          "NFT Diplomas: Tamper-proof, verifiable certificates",
          "Transparent Governance: Token-based voting on platform decisions",
          "Staking & Rewards: Earn tokens for engagement and loyalty",
          "Secure Treasury: Managed via Safe multi-signature wallets",
          "Enterprise Tools: API access for bulk training and upskilling",
        ],
      },
    ],
  },
  {
    question: "Is E3B compliant and secure for users and investors?",
    content: [
      {
        type: "list",
        items: [
          "Public Terms of Service, Privacy Policy, and About Us documents",
          "Treasury secured via Safe multi-sig wallets",
          "Exchange integrations with reputable market makers",
          "Full transparency in token utility and fundraising",
        ],
      },
    ],
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookies-policy" },
];

export const PLATFORM_FOOTER_LINKS: NavLink[] = [
  { label: "E3 Business", href: "https://e3-business.com", blank: true },
];

export const COMPANY_FOOTER_LINKS: NavLink[] = [
  { label: "About Us", href: "/#about" },
];

export const RESOURCES_FOOTER_LINKS: NavLink[] = [
  { label: "Whitepaper", href: "/docs/whitepaper.pdf" },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    title: "Q4 2025",
    goal: "Seed round launch, token integration into platform",
    isActive: true,
  },
  {
    title: "Q1 2026",
    goal: "Exchange listings, governance beta",
    isActive: false,
  },
  {
    title: "Q2-Q3 2026",
    goal: "Expansion to Spanish and Portuguese content",
    isActive: false,
  },
  {
    title: "Q4 2026 - 2027",
    goal: "Africa/Latin America partnerships and enterprise licensing",
    isActive: false,
  },
];

export const PRIVACY_POLICY: PrivacyPolicyItem[] = [
  {
    title: "Information We Collect",
    items: [
      "Personal Information: Name, email, contact details, and professional background when registering for courses or wallets.",
      "Transaction Data: Purchases, staking activity, and token transactions for platform services.",
      "Usage Data: Platform activity, course engagement, feedback, and reviews.",
    ],
  },
  {
    title: "How We Use Your Data",
    items: [
      "To deliver and improve training programs, certifications, and consulting services.",
      "To process transactions in EBT tokens securely.",
      "To provide token rewards (staking, cashback, referral bonuses).",
      "To issue NFT certificates and blockchain-verified credentials.",
      "To communicate updates, promotions, and governance proposals.",
    ],
  },
  {
    title: "Data Sharing",
    desc: "We do not sell your personal data to third parties. Limited data may be shared with:",
    items: [
      "Accredited trainers or employers (only for certification validation).",
      "Blockchain networks (to record certificates and token transfers).",
      "Payment processors for secure fiat/crypto settlements.",
    ],
  },
  {
    title: "Security & Control",
    items: [
      "All sensitive data is encrypted and stored securely.",
      "Users retain full control over their blockchain wallets and EBT tokens.",
      "You may request data deletion, correction, or export at any time.",
    ],
  },
  {
    title: "Compliance",
    desc: "E3mel Business complies with relevant data protection regulations (GDPR, local MENA privacy laws) and continuously updates our policies to remain compliant.",
  },
];

export const TERMS_OF_SERVICE: TermsOfServiceItem[] = [
  {
    title: "Nature of EBT",
    items: [
      "EBT is a utility token designed to enable access to discounts, staking rewards, NFTs, premium courses, and governance within the E3mel Business ecosystem.",
      "EBT is not intended as an investment, security, or guarantee of future profits.",
    ],
  },
  {
    title: "Eligibility",
    items: [
      "You must be at least 18 years old to use the platform.",
      "You must comply with the laws of your jurisdiction regarding cryptocurrency use.",
    ],
  },
  {
    title: "Use of Services",
    items: [
      "You may use EBT for tuition discounts, staking, NFT certificates, governance, and related utilities as described in the whitepaper.",
      "You agree not to misuse the platform for fraud, money laundering, or illegal activity.",
    ],
  },
  {
    title: "Risks",
    items: [
      "Cryptocurrencies are volatile. E3mel Business is not responsible for losses from price fluctuations.",
      "Blockchain transactions are irreversible; you are responsible for wallet security.",
      "Regulatory risks may affect the usability or legality of EBT in some jurisdictions.",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "All course materials, training content, and platform designs remain the intellectual property of E3mel Business.",
      "Use of EBT does not grant ownership of E3mel Business intellectual property.",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "E3mel Business is not liable for indirect, incidental, or consequential damages related to token use, lost access to wallets, or third-party platform integrations.",
    ],
  },
  {
    title: "Amendments",
    items: [
      "These Terms may be updated periodically. Continued use of the platform and token after updates constitutes acceptance of the revised Terms.",
    ],
  },
];

export const COOKIES_POLICY: CookiesPolicyItem[] = [
  {
    title: "Introduction",
    desc: 'This is the Cookies Policy for E3 Business ("we," "us," or "our"), which applies to our website www.e3-business.com and any associated applications or digital services ("our site"). By using our site, you agree to the use of cookies as described in this policy.',
  },
  {
    title: "What Are Cookies?",
    desc: "A cookie is a small text file that is stored on your device (computer, tablet, or smartphone) when you visit a website. Cookies allow us to recognize your device, store your preferences, and enhance your browsing experience.",
    items: [
      "Local storage: Helps us store data directly on your device to make pages load faster.",
      "Pixels: Small tracking images used to measure interactions and conversions.",
      "Scripts: Small programs that enhance website functionality and user experience.",
      'For simplicity, we refer to all these technologies collectively as "cookies".',
    ],
  },
  {
    title: "First-Party and Third-Party Cookies",
    items: [
      "First-party cookies are created and managed directly by E3 Business to operate our website efficiently.",
      "Third-party cookies are created by trusted partners who provide analytics, advertising, or social media integration services (for example, Google Analytics or Meta Pixel).",
      "These third parties may collect data to help us understand website performance and show you relevant content.",
    ],
  },
  {
    title: "How We Use Cookies",
    desc: "We use cookies for various purposes, including to:",
    items: [
      "Keep you signed in to your account.",
      "Remember your preferences and settings.",
      "Analyze website traffic and usage patterns.",
      "Improve our services and user experience.",
      "Deliver relevant content and advertising.",
      "Process payments and manage registrations.",
      "Enhance website security and performance.",
    ],
  },
  {
    title: "Types of Cookies We Use",
    table: {
      headers: ["Type", "Purpose"],
      rows: [
        {
          type: "Strictly Necessary",
          purpose:
            "Essential for the operation of our site (e.g., login, navigation, and security). These cannot be disabled.",
        },
        {
          type: "Performance",
          purpose:
            "Help us understand how visitors interact with our site so we can improve usability and content.",
        },
        {
          type: "Functional",
          purpose:
            "Enable us to remember your preferences and provide a personalized experience.",
        },
        {
          type: "Advertising",
          purpose:
            "Used to show you relevant ads and measure their effectiveness, based on your browsing interests.",
        },
      ],
    },
  },
  {
    title: "How Long Cookies Are Stored",
    items: [
      "Session cookies: Deleted automatically when you close your browser.",
      "Persistent cookies: Remain on your device until they expire or are manually deleted (usually within 13 months).",
    ],
  },
  {
    title: "Advertising and Analytics Cookies",
    desc: "We may use third-party tools such as Google Analytics, Meta Pixel, and LinkedIn Insight Tag to collect anonymous data about how users interact with our website. This information helps us understand user behavior and display ads that are more relevant to your interests.",
    items: [
      "Google Privacy Policy: https://policies.google.com/privacy",
      "Meta Privacy Policy: https://www.facebook.com/privacy/explanation",
      "LinkedIn Privacy Policy: https://www.linkedin.com/legal/privacy-policy",
    ],
  },
  {
    title: "How to Manage Cookies",
    desc: "You can control or delete cookies through your browser settings. Most browsers allow you to view which cookies are stored, delete all or selected cookies, and block certain or all websites from setting cookies.",
    items: [
      "Manage cookies in Chrome: https://support.google.com/chrome/answer/95647",
      "Manage cookies in Firefox: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
      "Manage cookies in Safari: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
      "Manage cookies in Microsoft Edge: https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
      "Please note that disabling cookies may affect certain features or functionality of our site.",
    ],
  },
  {
    title: "Changes to This Policy",
    desc: 'We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our practices. Any updates will be posted on this page with a revised "Last Updated" date.',
  },
  {
    title: "Contact Us",
    desc: "If you have any questions about our use of cookies, please contact us at:",
    items: ["📧 support@e3-business.com", "🌐 https://e3-business.com"],
  },
];

export const FOOTER_TEXT =
  "E3 Business Academy is a leading educational institution offering an integrated training experience to participants in more than 80 countries, with certified credentials, to succeed in the world of entrepreneurship and enter the job market with strength.";
export const OFFICE_ADDRESS =
  "Office 705 - Alhawai tower - Sheikh Zayed Road - Dubai - United Arab Emirates";
export const OFFICE_MAP_LINK = "https://maps.app.goo.gl/ajK8WGk1Zrcm7oYz6";
export const PHONE_NUMBER = "+971545045431";
export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: "https://www.facebook.com/e3melbusiness",
    icon: FacebookLogoIcon,
    platform: "Facebook",
  },
  {
    href: "https://www.instagram.com/e3melbusinessacademy/",
    icon: InstagramLogoIcon,
    platform: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/e3melbusinesscommunity/",
    icon: LinkedinLogoIcon,
    platform: "LinkedIn",
  },
  {
    href: "https://x.com/E3melBusiness",
    icon: XLogoIcon,
    platform: "X",
  },
  {
    href: "https://www.tiktok.com/@e3melbusinessacademy",
    icon: TiktokLogoIcon,
    platform: "TikTok",
  },
  {
    href: "https://www.youtube.com/c/E3melBusinessArabic",
    icon: YoutubeLogoIcon,
    platform: "YouTube",
  },
  {
    href: "https://www.snapchat.com/add/e3melbusinesss",
    icon: SnapchatLogoIcon,
    platform: "Snapchat",
  },
];

export const CHAINLINK_PRICE_FEEDS: Record<string, ChainlinkPriceFeed> = {
  "ETH/USD": {
    name: "ETH/USD",
    address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    decimals: 8,
    description: "ETH / USD",
  },
  "USDT/USD": {
    name: "USDT/USD",
    address: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
    decimals: 8,
    description: "USDT / USD",
  },
} as const;
export type PriceFeedKey = keyof typeof CHAINLINK_PRICE_FEEDS;

export const BUY_TOKEN_URL = "https://token.e3-business.com";
export const TOKEN_SYMBOL = "E3B";
export const TOKEN_NAME = "E3mel Business Token";
