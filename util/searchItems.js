// // util/searchItems.js

// export const authors = [
//   {
//     name: "Ayan Barman",
//     category: "Sectors",
//     routes: [
//       { path: "/agriculture", label: "Agriculture", type: "sector" },
//       { path: "/automobile", label: "Automobile", type: "sector" },
//       { path: "/renewable-energy", label: "Renewable Energy", type: "sector" },
//       {
//         path: "/supply-chain/closing-loop",
//         label: "Closing the Loop",
//         type: "article",
//       },
//     ],
//   },
//   {
//     name: "Prerna Bounter",
//     category: "Sectors",
//     routes: [
//       {
//         path: "/supply-chain/critical-pathway",
//         label: "Critical Pathway",
//         type: "article",
//       },
//       {
//         path: "/defence-and-aerospace",
//         label: "Defence & Aerospace",
//         type: "sector",
//       },
//     ],
//   },
// ];

// // Extract all articles from authors
// export const allArticles = authors.flatMap((author) =>
//   author.routes.map((route) => ({
//     ...route,
//     name: route.label,
//     author: author.name,
//     category: author.category,
//     type: "article",
//   }))
// );

// // Main function to get all searchable items (accepts menuItems as parameters)
// export const getAllSearchItems = (alternateTechItems, sectorItems) => {
//   return [
//     ...alternateTechItems.map((item) => ({
//       ...item,
//       category: "Alternate Tech",
//       type: "page",
//     })),
//     ...sectorItems.map((item) => ({
//       ...item,
//       category: "Sectors",
//       type: "page",
//     })),
//     { path: "/about", label: "About", category: "Pages", type: "page" },
//     {
//       path: "/supply-chain",
//       label: "Supply Chains",
//       category: "Pages",
//       type: "page",
//     },
//     { path: "/whats-new", label: "What's New", category: "Pages", type: "page" },
//     // Add authors
//     ...authors.map((author) => ({
//       name: author.name,
//       category: author.category,
//       routes: author.routes,
//       type: "author",
//     })),
//     // Add all articles separately for filtering
//     ...allArticles,
//   ];
// };

// // Export everything as a named export
// export default {
//   authors,
//   allArticles,
//   getAllSearchItems,
// };

// util/searchItems.js

export const authors = [
  {
    name: "Ayan Barman",
    category: "Sectors",
    routes: [
      { path: "/agriculture", label: "Agriculture", type: "sector" },
      { path: "/automobile", label: "Automobile", type: "sector" },
      { path: "/renewable-energy", label: "Renewable Energy", type: "sector" },
      {
        path: "/supply-chain/closing-loop",
        label: "Closing the Loop",
        type: "article",
      },
      {
        path: "/supply-chain/magnets-money",
        label: "Magnets, Money, and Momentum: India's Rare-Earth PLI Push",
        type: "article",
      },
      {
        path: "/supply-chain/rare-earth-elements",
        label: "Rare Earth Elements Just Got Rarer",
        type: "article",
      },
       {
        path: "/supply-chain/asia-playbook",
        label: "From Reserves to Riches: Asia's Critical Minerals Playbook and India's Role",
        type: "article",
      },
    ],
  },
  {
    name: "Prerna Bounter",
    category: "Sectors",
    routes: [
      {
        path: "/supply-chain/critical-pathway",
        label: "Critical Pathways: Building India's Mineral Value Chain",
        type: "article",
      },
      {
        path: "/defence-and-aerospace",
        label: "Defence & Aerospace",
        type: "sector",
      },
    ],
  },
  {
    name: "T K Arun",
    category: "Strategic Analysis",
    routes: [
      {
        path: "/supply-chain/rare-earth-strategy",
        label: "Breaking China's stranglehold over rare earth supplies",
        type: "article",
      },
    ],
  },
  {
    name: "Keerthi Lanka & Shivangi Aggarwal",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/recycling-e-waste",
        label: "The Missing Discourse in CRM Recycling from E-Waste",
        type: "article",
      },
    ],
  },
  {
    name: "Maitrayee Jha",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/myanmar-elections-civil-war-minerals",
        label: "The world depends on China for its critical minerals needs but China, in turn, depends on a remote state in war-torn Myanmar.",
        type: "article",
      },
    ],
  },
   {
    name: "Mithilesh Phadke",
    category: "Industry Analysis",
    routes: [
      {
        path: "/supply-chain/beneath-the-surface",
        label: "Beneath the Surface: India's Ambition in Deep-Sea Minerals.",
        type: "article",
      },
    ],
  },
];

// Slides data
export const slides = [
  {
    id: 1,
    image: "/assets/minerals_images/battery.jpg",
    title: "Critical Pathways: Building India's Mineral Value Chain",
    link: "/supply-chain/critical-pathway",
    content: "India's ambition for critical mineral independence rests on a complex sequence of capabilities that span the full length of the value chain...",
    author: "Prerna Bounter",
    date: "July 2025",
    category: "Research Report",
  },
  {
    id: 2,
    image: "/assets/minerals_images/closing_loop.jpg",
    title: "Closing the Loop: Strengthening India's Battery Recycling Supply Chains",
    link: "/supply-chain/closing-loop",
    content: "This strategic report analyzes India's battery recycling ecosystem and its role in securing critical mineral supply chains...",
    author: "Ayan Barman",
    date: "July 2025",
    category: "Research Report",
  },
  {
    id: 3,
    image: "/assets/minerals_images/colorful-baubles.jpg",
    title: "Breaking China's stranglehold over rare earth supplies",
    link: "/supply-chain/rare-earth-strategy",
    content: "Chinese supplies of rare-earth doped magnets to India have not resumed... The problem must be tackled at multiple levels...",
    author: "T K Arun",
    date: "September 2025",
    category: "Strategic Analysis",
  },
  {
    id: 4,
    image: "/assets/minerals_images/magnet.jpg",
    title: "Magnets, Money, and Momentum: India's Rare-Earth PLI Push",
    link: "/supply-chain/magnets-money",
    content: "In October 2025, the Indian Finance Ministry cleared a Rs. 7,300–7,350 crore (USD 880–885 million) Production-Linked Incentive (PLI) to establish domestic sintered..",
    author: "Ayan Barman",
    date: "October 2025",
    category: "Strategic Analysis",
  },
  {
    id: 5,
    image: "/assets/minerals_images/rare_earth_minerals.jpg",
    title: "Rare Earth Elements Just Got Rarer",
    link: "/supply-chain/rare-earth-elements",
    content: "The Ministry of Commerce of the People's Republic of China (MOFCOM) published two formal announcements expanding export controls related to rare-earth elements (REEs) and REE-related technologies.",
    author: "Ayan Barman",
    date: "October 2025",
    category: "Strategic Analysis",
  },
  {
    id: 6,
    image: "/assets/minerals_images/e-waste.png",
    title: "The Missing Discourse in CRM Recycling from E-Waste",
    link: "/supply-chain/recycling-e-waste",
    content: "The recovery of critical raw materials (CRMs) from electronic waste has drawn significant attention in discussions on the circular economy and sustainable development..",
    author: "Keerthi Lanka & Shivangi Aggarwal",
    date: "November 2025",
    category: "Industry Analysis",
  },
   {
      id: 7,
      image: `/assets/minerals_images/Rare Earth Minerals Mining.png`,
      title: "Votes, Violence, and Valuable Minerals: Myanmar's Elections Amidst Civil War and Rare Earths Race",
      link: "/supply-chain/myanmar-elections-civil-war-minerals",
      content:
        "The world depends on China for its critical minerals needs but China, in turn, depends on a remote state in war-torn Myanmar.",
      author: "Maitrayee Jha",
      date: "November 2025",
      category: "Industry Analysis",
    },
    {
      id: 8,
      image: `/assets/minerals_images/asia-playbook.jpg`,
      title: "From Reserves to Riches: Asia's Critical Minerals Playbook and India's Role",
      link: "/supply-chain/asia-playbook",
      content:
        "India has ambitious plans to turn its rich mineral reserves into a strategic strength.",
      author: "Ayan Barman",
      date: "November 2025",
      category: "Industry Analysis",
    },
];

// Mineral posts data
export const mineralPosts = [
  {
    id: 1,
    title: "Disruption In The Supply Of Rare Earth Magnets",
    downloadUrl: "#",
    path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151394",
    author: "PIB",
    date: "13th July, 2025",
    img: "",
  },
  {
    id: 2,
    title: "Mines Ministry Recognizes Seven Centres of Excellence to work under the National Critical Mineral Mission",
    downloadUrl: "#",
    path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151287",
    author: "PIB",
    date: "13th July, 2025",
    img: "",
  },
  {
    id: 3,
    title: "Parliament Question: Rare Earth Minerals",
    downloadUrl: "#",
    path: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2147282",
    author: "PIB",
    date: "13th July, 2025",
    img: "",
  },
  {
    id: 4,
    title: "India in talks with Chile and Peru to source Critical Minerals",
    downloadUrl: "#",
    path: "https://www.reuters.com/world/china/india-holding-talks-with-chile-peru-sourcing-critical-minerals-trade-ministry-2025-07-15",
    author: "Reuters",
    date: "15th July, 2025",
    img: "",
  },
  {
    id: 5,
    title: "India-UK Tech Pact shifts focus towards Critical Minerals",
    downloadUrl: "#",
    path: "https://stratnewsglobal.com/world-news/india-uk-tech-pact-expands-focus-to-critical-minerals-frontier-domains/",
    author: "StratNews Global",
    date: "25th July, 2025",
    img: "",
  },
  {
    id: 6,
    title: "India's Rare Earth Partnership with Africa",
    downloadUrl: "#",
    path: "https://africa.businessinsider.com/local/lifestyle/india-ramps-up-rare-earth-partnership-with-5-african-nations-to-counter-chinas/1k9kg7f",
    author: "Business Insider Africa",
    date: "28th July, 2025",
    img: "",
  },
  {
    id: 7,
    title: "Hindustan Zinc secures Potash block- REE and Tungsten up next",
    downloadUrl: "#",
    path: "https://energy.economictimes.indiatimes.com/news/coal/hindustan-zinc-secures-potash-block-adds-rare-earth-tungsten-assets-in-critical-minerals-push/122608335",
    author: "ET Energy World",
    date: "17th July, 2025",
    img: "",
  },
  {
    id: 8,
    title: "New Tech: Autonomous Vehicle designed for deep ocean mining",
    downloadUrl: "#",
    path: "https://astrobiology.com/2025/07/ocean-world-exploration-new-autonomous-vehicle-studies-deep-ocean-critical-minerals.html",
    author: "Astrobiology",
    date: "13th July, 2025",
    img: "",
  },
  {
    id: 9,
    title: "India and the UK have committed £1.8 million to expand the UK–India Critical Minerals Supply Chain Observatory",
    downloadUrl: "#",
    path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
    author: "Logistics Insider",
    date: "18th August, 2025",
    img: "",
  },
  {
    id: 10,
    title: "India's Critical Minerals Push: 5 policy pillars proposed for India's rare earth self-reliance",
    downloadUrl: "#",
    path: "https://www.logisticsinsider.in/india-and-uk-invest-1-8-million-to-launch-worlds-first-critical-minerals-supply-chain-observatory/",
    author: "Times of India",
    date: "16th August, 2025",
    img: "",
  },
  {
    id: 11,
    title: "India–Japan MoC on Critical Minerals & Clean Energy",
    downloadUrl: "#",
    path: "https://economictimes.indiatimes.com/news/india/india-japan-working-together-to-bolster-critical-mineral-supply-chains/articleshow/123593939.cms",
    author: "The Economic Times",
    date: "30 August 2025",
    img: "",
  },
  {
    id: 12,
    title: "India Joins Global Semiconductor-Oriented Trade Strategy through Quad",
    downloadUrl: "#",
    path: "https://www.reuters.com/world/china/india-backs-quad-group-ahead-modis-japan-visit-amid-strained-us-ties-2025-08-26/",
    author: "Reuters",
    date: "27–28 August 2025",
    img: "",
  },
  {
    id: 13,
    title: "India Clears ₹1,500 Crore Incentive Scheme for Critical Mineral Recycling",
    downloadUrl: "#",
    path: "https://www.financialexpress.com/business/industry-government-approves-rs-1500-crore-recycling-scheme-for-critical-minerals-to-generate-70000-jobs-3965968/",
    author: "Financial Express",
    date: "13 September 2025",
    img: "",
  },
  {
    id: 14,
    title: "China expands rare earths export restrictions to new elements",
    path: "https://www.reuters.com/world/china/china-expands-rare-earths-export-restrictions-new-elements-2025-10-09/",
    author: "Reuters",
    date: "October 9, 2025",
    img: "",
  },
  {
    id: 15,
    title: "India to inaugurate national critical mineral stockpile to safeguard rare-earth supply",
    downloadUrl: "#",
    path: "https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-to-launch-national-critical-mineral-stockpile-to-secure-rare-earth-supply/articleshow/124511338.cms",
    author: "The Economic Times",
    date: "October 13, 2025",
    img: "",
  },
  {
    id: 16,
    title: "CMPDI & GSI to survey rare earth elements in coal mine formations",
    downloadUrl: "#",
    path: "https://timesofindia.indiatimes.com/city/ranchi/cmpdi-gsi-to-explore-rare-earth-metals-in-coal-mines/articleshow/124461076.cms",
    author: "Times of India",
    date: "October 10, 2025",
    img: "",
  },
  {
    id: 17,
    title: "China issues MOFCOM Notice 2025 No. 61 extending rare-earth export controls globally",
    downloadUrl: "#",
    path: "https://cset.georgetown.edu/publication/mofcom-notice-2025-61/",
    author: "CSET",
    date: "October 9, 2025",
    img: "",
  },
  {
    id: 18,
    title: "The United States and Australia Partner to Challenge China's Rare Earth Dominance",
    downloadUrl: "#",
    path: "https://www.whitehouse.gov/briefings-statements/2025/10/united-states-australia-framework-for-securing-of-supply-in-the-mining-and-processing-of-critical-minerals-and-rare-earths/",
    author: "The White House",
    date: "October 20, 2025",
    img: "",
  },
  {
    id: 19,
    title: "US Strengthens Critical Minerals Partnerships with Malaysia and Japan",
    downloadUrl: "#",
    path: "#",
    author: "The White House",
    date: "October 26, 2025",
    img: "",
    customLinks: {
      "Malaysia": "https://www.whitehouse.gov/briefings-statements/2025/10/memorandum-of-understanding-between-the-government-of-the-united-states-of-america-and-the-government-of-malaysia-concerning-cooperation-to-diversify-global-critical-minerals-supply-chains-and-promote/",
      "Japan": "https://www.whitehouse.gov/briefings-statements/2025/10/united-states-japan-framework-for-securing-the-supply-of-critical-minerals-and-rare-earths-through-mining-and-processing/"
    }
  },
  {
    id: 20,
    title: "India and Mongolia Forge Critical Minerals Partnership",
    downloadUrl: "#",
    path: "https://www.centralchronicle.com/india-mongolia-ink-ten-mous/",
    author: "Central Chronicle",
    date: "14th October, 2025",
    img: "",
  },
    {
      id: 21,
      title: "$142 million magnet facility set to position Malaysia as a key rare-earth hub in Asia",
      downloadUrl: "#",
      path: "https://www.reuters.com/world/asia-pacific/malaysia-pm-says-142-million-magnet-plant-boost-rare-earth-sector-state-media-2025-11-03/#:~:text=In%20July%2C%20Australia%27s%20Lynas%20Rare,plant%20in%20Malaysia%27s%20Kuantan%20district",
      author: "Reuters",
      date: "3 November, 2025",
      img: "",
    },
    {
      id: 22,
      title: "India to skill 5.7 million workers by 2030 to power its critical minerals value chain",
      downloadUrl: "#",
      path: "https://economictimes.indiatimes.com/industry/indl-goods/svs/metals-mining/india-to-train-5-7-million-workers-in-mining-by-2030-to-boost-critical-minerals-push-cut-import-reliance/articleshow/125232556.cms?utm_source=chatgpt.com",
      author: "The Economic Times",
      date: "11 November, 2025",
      img: "",
    },
      {
      id: 23,
      title: "Cabinet’s approval to revise royalty rates paves the way for unlocking India’s graphite, caesium, rubidium, and zirconium reserves",
      downloadUrl: "#",
      path: "https://www.pib.gov.in/PressReleseDetail.aspx?PRID=2189392",
      author: "PIB India",
      date: "12 November 2025",
      img: "",
    },
];

// Extract all articles from authors
export const allArticles = authors.flatMap((author) =>
  author.routes.map((route) => ({
    ...route,
    name: route.label,
    author: author.name,
    category: author.category,
    type: "article",
  }))
);

// Extract articles from slides
export const slideArticles = slides.map(slide => ({
  path: slide.link,
  label: slide.title,
  name: slide.title,
  author: slide.author,
  category: slide.category,
  type: "article",
  content: slide.content,
  date: slide.date,
}));

// Extract articles from mineral posts
export const postArticles = mineralPosts.map(post => ({
  path: post.path,
  label: post.title,
  name: post.title,
  author: post.author,
  category: "News & Updates",
  type: "article",
  date: post.date,
  isExternal: true, // Mark external links
}));

// Combine all articles
export const combinedArticles = [
  ...allArticles,
  ...slideArticles,
  ...postArticles
];

// Main function to get all searchable items
export const getAllSearchItems = (alternateTechItems, sectorItems) => {
  return [
    // Pages from menu items
    ...alternateTechItems.map((item) => ({
      ...item,
      category: "Alternate Tech",
      type: "page",
    })),
    ...sectorItems.map((item) => ({
      ...item,
      category: "Sectors",
      type: "page",
    })),
    
    // Static pages
    { path: "/about", label: "About", category: "Pages", type: "page" },
    { path: "/supply-chain", label: "Supply Chains", category: "Pages", type: "page" },
    { path: "/whats-new", label: "What's New", category: "Pages", type: "page" },
    
    // Authors
    ...authors.map((author) => ({
      name: author.name,
      category: author.category,
      routes: author.routes,
      type: "author",
    })),
    
    // All combined articles
    ...combinedArticles,
  ];
};

// Export utility functions
export const searchItems = {
  authors,
  slides,
  mineralPosts,
  allArticles: combinedArticles,
  getAllSearchItems,
};

export default searchItems;