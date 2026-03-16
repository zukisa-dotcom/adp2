export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  city: string;
  citySlug: string;
  country: string;
  cohort: number;
  image: string;
  tag: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "freetown-120000-jobs",
    title: "How Freetown Is Creating 120,000 Dignified Jobs for Women and Youth",
    excerpt:
      "Mayor Yvonne Aki-Sawyerr's bold employment agenda across climate action, heritage tourism, digital economy, and human capital is reshaping Sierra Leone's capital — powered by data.",
    city: "Freetown",
    citySlug: "freetown",
    country: "Sierra Leone",
    cohort: 2,
    image: "/Article Pictures/freetown.jpg",
    tag: "Employment",
    body: [
      "Freetown faces significant and interconnected challenges driven by decades of rapid, unplanned urbanisation. Over the past 25 years, rural-urban migration has led to a dramatic population surge, straining the city's resources. Youth make up approximately 800,000 of Freetown's 1.2 million residents, yet 70% are unemployed or underemployed.",
      "In response, Mayor Yvonne Aki-Sawyerr developed the Transform Freetown: Transforming Lives Agenda through extensive community engagement. The agenda sets a single, ambitious target: creating 120,000 decent jobs for women and youth by 2028 through interventions across four clusters — Climate Action, Heritage Tourism, the Digital Economy, and Human Capital Development.",
      "Through the AMALI Data Programme, Freetown activated a high-performing cross-functional data governance committee drawing on diverse expertise across multiple city departments. The city developed a comprehensive performance management framework and data reporting dashboard to track job creation progress across all four strategic clusters.",
      "The performance dashboard enables regular review of progress, ensuring evidence-based decision-making and adaptive management. This systematic approach has created transparency around job creation efforts and established accountability mechanisms that will drive results for women and youth across the city.",
      "By sustaining regular performance management reviews and maintaining the data-driven culture established through the programme, Freetown is well-positioned to achieve meaningful employment outcomes that transform lives across the city.",
    ],
  },
  {
    slug: "bulawayo-water-crisis",
    title: "From Water Shedding to Water Security: Bulawayo's Data-Led Turnaround",
    excerpt:
      "Facing an existential water crisis across six dams, Bulawayo built an integrated performance management system to track every drop — and attracted $90M in investment for a new dam.",
    city: "Bulawayo",
    citySlug: "bulawayo",
    country: "Zimbabwe",
    cohort: 2,
    image: "/Article Pictures/bulawayo.jpeg",
    tag: "Water & Sanitation",
    body: [
      "The City of Bulawayo faces an existential water crisis. Severe droughts have significantly impacted water availability, and the city's six dams are under constant strain. Water shedding limits the amount available to residents, while leakages and burst pipes regularly affect service delivery.",
      "Under Mayor David Coltart's leadership, Bulawayo established an integrated performance management system addressing three key priorities: improved water supply, enhanced sanitation services, and informal vendor market support. The AMALI Data Programme supported the city in building the data practices necessary to track improvements systematically.",
      "The city developed a comprehensive data inventory of water infrastructure, monitoring all six dams for daily reservoir capacity and average consumption patterns. The first Performance Management Meeting revealed the need to integrate various dashboards across departments into a unified monitoring system.",
      "The integration of the Performance Management Dashboard, Water and Sanitation Dashboard, Town Clerk's Dashboard, GIS, and Customer Contact Centre now provides comprehensive visibility into the city's progress. This institutional integration represents a significant shift in how Bulawayo approaches service delivery.",
      "Perhaps most remarkably, the city's GlassBlock Bopoma Dam project has attracted over USD $90 million in expressions of interest at an investment forum — a direct result of the city's ability to present credible, evidence-based proposals to potential funders.",
    ],
  },
  {
    slug: "johannesburg-inner-city",
    title: "Reclaiming Johannesburg: Data Behind the Inner City's Rebirth",
    excerpt:
      "A national priority backed by the Presidency, Johannesburg's building reclamation programme is using data to map, track, and transform derelict buildings into engines of urban renewal.",
    city: "City of Johannesburg",
    citySlug: "city-of-johannesburg",
    country: "South Africa",
    cohort: 3,
    image: "https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg",
    tag: "Urban Renewal",
    body: [
      "The City of Johannesburg, once hailed as a 'World Class African City,' has seen its inner city experience significant deterioration over recent decades. The challenge has escalated to the point where it is now recognised as a national priority, with the Presidency actively involved through the Presidential Johannesburg Working Group.",
      "The city is pursuing an ambitious regeneration strategy to reclaim and repurpose 15 priority buildings by 2026. This effort requires coordinated action across multiple departments including Group Legal, Group Finance, Development Planning, and Human Settlements Development agencies.",
      "Through the AMALI Data Programme, the city conducted a comprehensive data inventory identifying 29 key data fields required to monitor building reclamation progress. The team mapped end-to-end legal and operational processes, clarifying dependencies between departments and identifying bottlenecks that had previously stalled progress.",
      "A cloud-based data reporting tool now consolidates data across departments and tracks performance against targets for each priority building project. This has transformed what was a fragmented, paper-based process into a transparent, measurable urban renewal programme.",
      "The Inner City Transformation Roadmap — grounded in governance alignment, urban management, infrastructure upgrades, economic development, and social inclusion — now has the data backbone it needs to deliver results for Johannesburg's residents.",
    ],
  },
  {
    slug: "harare-sunshine-city",
    title: "Sunshine City: How Harare Is Turning Power Cuts Into Solar Opportunity",
    excerpt:
      "Frequent blackouts disrupted water and sanitation for millions. Mayor Jacob Mafume responded by positioning Harare as Africa's premier renewable energy hub — tracked by real-time dashboards.",
    city: "Harare",
    citySlug: "harare",
    country: "Zimbabwe",
    cohort: 3,
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    tag: "Renewable Energy",
    body: [
      "Harare faces critical electricity shortages resulting in frequent power cuts that disrupt city council operations, water pumping systems, and sewer management infrastructure. These cascading failures affect residents' access to clean water and adequate sanitation daily.",
      "Under Mayor Jacob Mafume's leadership, the city committed to an ambitious legacy goal: establishing Harare as a premier renewable energy hub and making it the 'Sunshine City' in Africa by 2026. This vision integrates economic competitiveness, quality of life improvements, environmental sustainability, and smart city innovation.",
      "The AMALI Data Programme supported Harare in defining five interconnected key performance indicators with defined baselines, specific timeframes, and clear accountability lines. A comprehensive data inventory exercise mapped all critical city datasets, documenting their locations, custodians, and security measures.",
      "The development of an integrated data reporting tool and dashboard now enables real-time visualisation of progress across solar power deployment, water infrastructure, and sanitation targets. This gives the mayor and city leadership a credible instrument to communicate progress to residents, council, and potential investors.",
      "By anchoring renewable energy ambitions in data-driven governance rather than aspirational rhetoric alone, Harare has built the institutional foundations necessary to attract public-private partnerships and lead Africa's urban energy transition.",
    ],
  },
  {
    slug: "banjul-women-empowerment",
    title: "Paper Records to Digital Power: Banjul's Quiet Governance Revolution",
    excerpt:
      "With no prior data systems, Banjul City Council built its first digital performance dashboard — and used the evidence to secure 230 solar streetlights and new waste management trucks.",
    city: "Banjul",
    citySlug: "banjul",
    country: "The Gambia",
    cohort: 3,
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    tag: "Governance",
    body: [
      "Banjul, the capital of The Gambia, is demonstrating what is possible for African cities with constrained resources but strong leadership commitment. Prior to the AMALI Data Programme, the council operated with paper-based, fragmented records and limited visibility into programme delivery and impact.",
      "Lord Mayor Rohey Malick Lowe's legacy goal focuses on empowering 5,000 women and girls by expanding access to essential services, promoting economic inclusion, and opening pathways to civic and political leadership by 2027.",
      "Through sustained coaching, the city transitioned to its first consolidated, digital view of its women's empowerment programmes. Performance discussions shifted from anecdotal updates to evidence-based assessments, and the city institutionalised Performance Management Meetings designed to outlast any single political administration.",
      "Critically, Banjul translated this newfound data capability into tangible resource mobilisation — leveraging concrete evidence of service coverage gaps to negotiate 230 solar street lights and waste management trucks through a Chinese partnership, secure selection for a Dubai initiative, and advance a Saudi Arabia mobility pilot aligned with youth employment.",
      "Through REFELA networks and UCLG Africa connections, Banjul's experience offers a replicable model for other African cities, proving that what matters most is not the sophistication of systems but the commitment to regular performance review and collaborative problem-solving.",
    ],
  },
  {
    slug: "mombasa-water-connections",
    title: "Quenching Mombasa's Thirst: From 20,000 to 120,000 Water Connections",
    excerpt:
      "Governor Nassir's mission to ensure no child misses school due to lack of water is being driven by hydrogeological surveys and a plan to cut non-revenue water by half.",
    city: "Mombasa",
    citySlug: "mombasa",
    country: "Kenya",
    cohort: 3,
    image: "https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg",
    tag: "Water Access",
    body: [
      "In Mombasa, access to clean water remains one of the most pressing challenges facing the county's 350,000 households. Currently, only 20,000 households have water connections, leaving the vast majority reliant on informal and often unsafe water sources.",
      "Governor Abdullswamad Nassir set a bold legacy goal: quench Mombasa's thirst and ensure no child misses school due to lack of water. The target is to increase household water connections from 20,000 to 120,000 over two years.",
      "The strategy is two-pronged: reducing non-revenue water by half — from 60% to 30% — and concluding a hydrogeological survey to explore and sustainably exploit a deep aquifer. This would increase daily supply from 20,000 cubic meters to 100,000 cubic meters against a total demand of 200,000 cubic meters.",
      "The AMALI Data Programme has supported Mombasa in establishing the data systems needed to track progress on these ambitious targets. Performance dashboards now monitor connection rates, water loss, and supply metrics in real time.",
      "For a coastal city where water scarcity directly impacts children's education and public health, this data-driven approach represents a fundamental shift toward accountable, measurable service delivery that puts residents' needs at the centre of governance.",
    ],
  },
  {
    slug: "adama-smart-city",
    title: "Smart Adama: An Ethiopian City's Leap Toward Digital Governance",
    excerpt:
      "Despite limited resources, Adama established a dedicated task force and global partnerships to build geospatial capabilities — pioneering the smart city movement on the African continent.",
    city: "Adama",
    citySlug: "adama",
    country: "Ethiopia",
    cohort: 1,
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    tag: "Digital Transformation",
    body: [
      "Adama City in Ethiopia has ambitious aspirations to become a smart, digitally transformed urban centre. Under Mayor Hailu Jelde's guidance, the city is striving to become a top smart city in Ethiopia by 2030 through its 'Smart Adama' initiative.",
      "The complexity of the Mayor's objectives is deeply technical, and the city faces a shortfall in specialised personnel. The procurement of industry-standard software stands as a considerable obstacle, with restrictions preventing acquisition from international sources.",
      "The AMALI Data Programme worked with the city to establish a dedicated task force for advancing digital transformation objectives. Strategic partnerships with global entities and technical experts were developed to overcome constraints related to software access and digital capacity.",
      "A roadmap for implementing geospatial analysis capabilities was created, enabling spatial decision-making and visualisation of city performance. Municipal officials were designated to champion this work, ensuring continuity in engagement beyond the programme.",
      "While African cities are somewhat behind their counterparts in other continents in the Smart Cities movement, cities like Adama are pioneering on the African continent. The AMALI Data Programme has contributed significantly to ensuring a robust data culture that supports the achievement of this ambitious goal by 2030.",
    ],
  },
  {
    slug: "zanzibar-blue-economy",
    title: "Blue Economy Capital: How Zanzibar Is Converting Waste Into Wealth",
    excerpt:
      "Mayor Mahmoud Mussa's vision to make Zanzibar a leading Blue Economy City by 2025 is transforming waste collection and conversion into an economic engine for the island.",
    city: "Zanzibar",
    citySlug: "zanzibar",
    country: "Tanzania",
    cohort: 1,
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
    tag: "Blue Economy",
    body: [
      "Zanzibar, a semi-autonomous archipelago off the coast of Tanzania, is renowned for its pristine beaches and rich cultural heritage. But beneath the tourism appeal lies a growing waste management crisis that threatens both the environment and the island's economic future.",
      "Mayor Mahmoud Muhammed Mussa set a transformative legacy goal: to position Zanzibar as a leading Blue Economy City by 2025, by investing in waste collection and waste conversion. This vision connects environmental stewardship with economic opportunity.",
      "Through the AMALI Data Programme, Zanzibar established data practices to track waste collection coverage, conversion rates, and the economic value generated from recycled materials. Performance dashboards now provide visibility into progress across the island's municipalities.",
      "The blue economy approach reframes waste not as a problem to be managed but as a resource to be harnessed. By converting waste into usable materials and energy, Zanzibar is creating new revenue streams while protecting the marine environment that underpins its tourism industry.",
      "Zanzibar's journey demonstrates that small island economies can lead in sustainable development when equipped with the right data tools and governance frameworks to measure, manage, and communicate progress.",
    ],
  },
  {
    slug: "windhoek-informal-settlements",
    title: "Dignity for 55,000 Households: Windhoek's Sanitation Mission",
    excerpt:
      "Mayor Queen Kamati is bringing communal water and sanitation services to Windhoek's informal settlements — a data-backed effort to combat urban decay and restore basic dignity.",
    city: "Windhoek",
    citySlug: "windhoek",
    country: "Namibia",
    cohort: 2,
    image: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
    tag: "Service Delivery",
    body: [
      "Windhoek, the capital of Namibia, is home to nearly 55,000 informal settlement households that lack access to basic water and sanitation services. For these communities, the absence of these essential services is not just an inconvenience — it is a daily assault on human dignity.",
      "Mayor Queen Omagano Kamati set a clear legacy goal: provision of communal sanitation and water services to all informal settlement households in line with the city's Basic Services to Informal Settlements Plan 2019-2027, in order to combat urban decay and restore dignity.",
      "The AMALI Data Programme supported Windhoek in establishing data systems to map informal settlement locations, track service coverage, and monitor infrastructure delivery. This evidence base has been critical for prioritising interventions and allocating resources effectively.",
      "Performance management routines now ensure that progress is reviewed regularly against defined targets. The city can identify where gaps persist and adjust strategies in real time, moving from reactive crisis management to proactive, planned service delivery.",
      "Windhoek's experience shows that restoring dignity to informal settlement residents requires not just infrastructure investment, but the data systems and governance practices to ensure that investment reaches those who need it most.",
    ],
  },
  {
    slug: "kajiado-education-equity",
    title: "200,000 Learners, One Goal: Kajiado's Fight for Education Equity",
    excerpt:
      "Governor Ole Lenku is using data to identify gaps and direct resources toward equitable education access across one of Kenya's most geographically dispersed counties.",
    city: "Kajiado",
    citySlug: "kajiado",
    country: "Kenya",
    cohort: 2,
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    tag: "Education",
    body: [
      "Kajiado County in Kenya stretches across vast, arid landscapes where pastoral communities are spread thin across the terrain. For the county's 200,000 school-age learners, geography itself is a barrier to education — with long distances to schools, limited infrastructure, and uneven resource distribution.",
      "Governor Joseph Jama Ole Lenku set an ambitious legacy goal: creating equitable access to education for 200,000 learners in Kajiado by 2027. This requires understanding precisely where learners are, what resources exist, and where the gaps are widest.",
      "Through the AMALI Data Programme, Kajiado developed a data inventory mapping educational resources across the county — from school locations and enrolment figures to teacher ratios and infrastructure conditions. This evidence base revealed stark disparities between urban and rural areas.",
      "Performance dashboards now track progress on key education indicators, enabling the county government to direct resources where they are needed most. Regular performance reviews ensure that interventions are data-driven rather than politically motivated.",
      "Kajiado's approach demonstrates that achieving education equity in geographically dispersed contexts requires not just more resources, but smarter allocation guided by comprehensive data and regular performance monitoring.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
