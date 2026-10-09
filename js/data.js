// Career content, taken from Richard Priest's executive CV.
// tags: tech = technology leadership, ma = M&A / integration / separation, global = international leadership, ai = AI
window.CAREER = [
  {
    era: 'Recent transformation work',
    when: 'July 2026 – Present', title: 'Principal Technology Consultant (Contract)', org: 'Enselia',
    ctx: '13-week contract, building an IT function from scratch for an organisation part-way through charity registration.',
    tags: ['tech'], images: [], placeholder: { title: 'Enselia', sub: 'Current assignment' },
    points: [
      'Reviewing the existing technology architecture and rolling out improvements as the assignment progresses.',
      'Assessing the managed service provider relationship and cybersecurity posture, and writing IT policy and procedure where none previously existed.',
      'Profiling the current provider’s performance, coverage and value for money to build the case for a competitive tender, should the board wish to test the market.',
      'Established a secure SharePoint client portal and advising the board on the future shape, structure and resourcing of the technology function.',
      'Negotiating a move onto Microsoft charity licensing to reduce licence spend through not-for-profit pricing.',
    ],
  },
  {
    when: 'July 2025 – July 2026', title: 'Fractional IT Director', org: 'Various organisations',
    ctx: 'Part-time executive technology leadership across a varied client base.',
    tags: ['tech'], compact: true,
    points: ['Advised multiple organisations on technology strategy, governance and operational improvement.'],
  },
  {
    when: 'October 2024 – May 2025', title: 'Head of Technology', org: 'Armstrong Watson LLP',
    ctx: '800+ colleagues across 19 offices — one of the UK’s largest independent accountancy firms. Joined one month after a data breach with a mandate to rebuild trust.',
    tags: ['tech', 'ai', 'ma'], images: [{ src: 'img/armstrong-watson.webp', label: 'Armstrong Watson' }],
    metric: { value: '2 weeks → 12 seconds', label: 'client data retrieval with AI agents' },
    points: [
      'Led the strategic adoption of AI and large language models, designing and deploying AI agents that cut sensitive client data retrieval from around two weeks to approximately twelve seconds.',
      'Rebuilt the cybersecurity framework from the ground up, closing 70% of identified policy gaps, maintaining Cyber Essentials Plus and addressing Anti-Money Laundering control shortfalls.',
      'Brought the firm into alignment with ICAEW, NCSC, GDPR and FCA requirements.',
      'Consolidated the vendor estate and reduced IT spend by 12% while improving service resilience.',
      'Led technology integration of newly acquired practices and established a GenAI governance policy for firm-wide adoption.',
    ],
  },
  {
    when: 'September 2023 – September 2024', title: 'IT Director', org: 'Nova Pangaea Technologies (UK) Ltd',
    ctx: 'Cleantech scale-up producing sustainable aviation fuel, in partnership with British Airways and LanzaJet under Project Speedbird.',
    tags: ['tech'], images: [{ src: 'img/nova-pangaea.webp', label: 'Nova Pangaea' }],
    metric: { value: '< 6 months', label: 'to build a full IT function from zero' },
    points: [
      'Joined as the sole IT hire with no existing function, and commissioned a fully operational IT capability — infrastructure, governance, security and support — in under six months, growing the team to eight.',
      'Implemented Cyber Essentials from a standing start, satisfying due diligence from British Airways, IAG, the Department for Transport and institutional investors.',
      'Directly supported a £23 million funding round secured during tenure.',
      'Led ERP, CPQ, LIMS and OT systems strategy with the HR Director, CCO and CFO, and introduced AI tooling to automate data workflows across R&D and commercial teams.',
    ],
  },
  {
    when: 'March 2023 – August 2023', title: 'Head of IT & Digital Strategy (Interim)', org: 'EDF Renewables UK & Ireland',
    ctx: 'EDF Group subsidiary operating onshore and offshore wind, solar and battery storage — an NIS Operator of Essential Services.',
    tags: ['tech', 'ma', 'global'], images: [{ src: 'img/edf-renewables.webp', label: 'EDF Renewables' }],
    metric: { value: '32 + 74', label: 'UK team plus indirect Paris team' },
    points: [
      'Led the separation of the UK technology function from EDF’s Paris headquarters, establishing a more autonomous UK operating model with clearer ownership and governance.',
      'Delivered Cyber Essentials Plus in a highly governed, multi-data-stream environment, engaging and directing Ernst & Young to validate controls.',
      'Maintained NIS Regulations compliance, completed an NCSC Cyber Assessment Framework self-assessment and introduced an in-house security operations capability.',
      'Led a 32-person UK team with indirect accountability for the 74-strong Paris team, sitting on the joint UK and France senior leadership team.',
      'Directed cloud migration to Microsoft Azure and M365 alongside IT/OT convergence across wind farm and battery storage sites.',
    ],
  },
  {
    when: 'March 2022 – September 2022', title: 'IT Director (Interim)', org: 'VetPartners Group Limited',
    ctx: 'The UK’s fastest-growing veterinary healthcare consolidator — 350+ clinical sites and around 80 acquisitions a year.',
    tags: ['ma', 'tech'], images: [{ src: 'img/vetpartners.webp', label: 'VetPartners' }],
    metric: { value: '~2 per week', label: 'acquired practices integrated' },
    points: [
      'Integrated newly acquired practices into a standardised technology and support model at roughly two a week, assessing infrastructure, network, systems and security risk before onboarding.',
      'Designed a repeatable onboarding playbook that reduced new practice onboarding time by 30%.',
      'Directed IT due diligence and integration for the acquisition of Goddard Veterinary Group (CMA clearance, September 2022).',
      'Authored more than 30 technology policies for a 350+ site estate and led 7 direct and 31 indirect reports.',
      'Moved Microsoft licensing to a usage-based Services Provider License Agreement to match a rapidly growing estate and in-house software development.',
    ],
  },
  {
    era: 'Earlier career',
    when: 'January 2020 – March 2022', title: 'Director of Information Technology', org: 'Bidwells LLP',
    ctx: 'One of the UK’s largest independent property consultancies — £5.2 billion assets under management, 500 staff.',
    tags: ['tech'], images: [{ src: 'img/bidwells.webp', label: 'Bidwells' }],
    points: [
      'Delivered a zero-downtime move to full remote working for 500+ staff across every UK office within days at the start of the pandemic.',
      'Led a multi-year, cloud-first digital transformation including the firm’s AI and data strategy.',
      'Won Best New Website at the Property Marketing Awards 2022.',
    ],
  },
  {
    when: 'March 2017 – December 2019', title: 'IT Director', org: 'Great Places Housing Association',
    ctx: '25,000+ homes, 700+ employees and a £2.8 million IT budget.',
    tags: ['tech'], images: [{ src: 'img/great-places.webp', label: 'Great Places' }],
    points: [
      'Managed a £2.8 million budget and a 34-person technology function.',
      'Delivered a Group-wide GDPR programme across three business entities ahead of the May 2018 deadline.',
      'Improved system uptime from 98.5% to 99.8%.',
    ],
  },
  {
    when: 'June 2015 – January 2017', title: 'IT Director', org: 'Claims Advisory Group Limited',
    ctx: 'Regulated claims management company processing over £2 million a month.',
    tags: ['tech'], images: [{ src: 'img/claims-advisory-group.webp', label: 'Claims Advisory Group' }],
    points: [
      'Built CRM, telephony, PCI-DSS and governance infrastructure from scratch, leading a 16-person IT team.',
      'Cut average handle time by 18% and incident response times by 40%.',
    ],
  },
  {
    when: 'March 2014 – May 2015', title: 'Director of IT Services (Contract)', org: 'Missguided Ltd',
    ctx: 'Fast-growing online fashion retailer expanding into the US, Europe and Australia.',
    tags: ['global', 'tech'], images: [{ src: 'img/missguided.webp', label: 'Missguided' }],
    points: [
      'Led a 32-person IT team supporting ERP, WMS, OMS and the Magento e-commerce platform as the business scaled towards £49 million revenue.',
      'Delivered the multi-currency payment and localisation technology behind the Nordstrom partnership and US market entry.',
    ],
  },
  {
    when: 'March 2011 – February 2014', title: 'IT Director, UK, EMEA & Asia', org: 'HID Global / ASSA ABLOY Group',
    ctx: 'The world’s leading secure identity solutions provider, with an £18 million regional IT budget.',
    tags: ['global', 'ma', 'tech'], images: [{ src: 'img/assa-abloy.webp', label: 'ASSA ABLOY' }],
    metric: { value: '78 people', label: 'across UK, EMEA and Asia Pacific' },
    points: [
      'Directed a 78-person regional technology team across the UK, EMEA and Asia Pacific with an £18 million budget.',
      'Led M&A IT due diligence and post-merger integration for the LaserCard (2011) and EasyLobby (2012) acquisitions.',
      'Established ISO 27001 governance frameworks across all regional sites.',
    ],
  },
  {
    when: 'January 2008 – January 2011', title: 'IT Director', org: 'ghd (Good Hair Day) / The Jemella Group Ltd',
    ctx: '£160 million private equity-owned consumer brand with 50,000+ salon partners worldwide.',
    tags: ['global', 'tech'], images: [{ src: 'img/ghd.webp', label: 'ghd' }],
    points: [
      'Directed the IT estate across Leeds, London, Paris and Frankfurt for 50,000+ global salon partners.',
      'Delivered ERP, e-commerce, CRM and PLM implementations alongside PCI-DSS compliance, concurrently.',
      'Presented technology investment cases directly to the private equity board.',
    ],
  },
  {
    when: 'August 2004 – November 2007', title: 'Head of IT Business Systems, Europe', org: 'International Game Technology (IGT)',
    ctx: 'NYSE-listed gaming technology provider with an £8 million regional IT budget.',
    tags: ['global', 'ma', 'tech'], images: [{ src: 'img/igt.webp', label: 'IGT' }],
    points: [
      'Led enterprise systems across European operations in a regulated environment, maintaining SOX compliance.',
      'Supported systems integration following IGT’s acquisition of WagerWorks.',
    ],
  },
  {
    when: 'May 2002 – August 2004', title: 'IT Programme Director, Bowman Conversion', org: 'UK Ministry of Defence / DE&S, Ashchurch',
    ctx: 'One of the UK’s major defence communications programmes.',
    tags: ['tech'], images: [{ src: 'img/bowman.webp', label: 'Bowman' }],
    points: ['Delivered IT programme work ahead of operational deadlines while holding HMG security clearance.'],
  },
  {
    when: 'February 1997 – April 2002', title: 'Programmer / Application Specialist', org: 'BAE Systems / AlliedSignal Honeywell',
    ctx: 'Aerospace and defence.',
    tags: ['tech'], images: [{ src: 'img/bae-nimrod.webp', label: 'BAE Systems' }, { src: 'img/honeywell-garrett.webp', label: 'Honeywell Garrett' }],
    points: ['Wrote and supported enterprise applications in an aerospace and defence environment.'],
  },
  {
    when: 'January 1989 – January 1997', title: 'IT Systems Analyst', org: 'Philips Semiconductors',
    ctx: 'European manufacturing sites.',
    tags: ['global', 'tech'], images: [{ src: 'img/philips-semiconductors.webp', label: 'Philips Semiconductors' }],
    points: ['Implemented SAP R/2 and R/3 and manufacturing execution systems across European manufacturing sites.'],
  },
];

window.SKILLS = [
  'Technology Strategy & Digital Transformation', 'AI & LLM Strategy, AI Agents & Intelligent Automation',
  'Technology Operating Model Design', 'Organisational & Business Change Leadership', 'Technology Integration (M&A)',
  'Cybersecurity, Risk & Governance', 'Cyber Essentials Plus, ISO 27001, NIS Regulations & NCSC CAF',
  'IT Service Management', 'Technology Procurement & Commercial Negotiation', 'Supplier & Managed Service Provider Management',
  'Infrastructure & Cloud Strategy (Microsoft Azure, M365)', 'Data Protection & GDPR', 'Business Continuity & Resilience',
  'Stakeholder & Board Engagement', 'Team Leadership & Talent Development',
];

window.SECTORS = [
  'Manufacturing & Industrial', 'Professional Services', 'Renewable Energy & Cleantech', 'Financial Services',
  'Claims Management', 'Veterinary Healthcare', 'Retail', 'Defence & Aerospace', 'Property & Real Estate',
  'Social Housing', 'Gaming & Entertainment',
];

window.CREDENTIALS = [
  'BSc Computer Science, University of Manchester',
  'ISO 27001 Lead Implementer · NIS Regulations (Operator of Essential Services) · NCSC Cyber Assessment Framework',
  'Cyber Essentials Plus · ICAEW Anti-Money Laundering · PCI-DSS 4.0 · ITIL Foundation',
  'PRINCE2 Practitioner · Six Sigma · SAP Certified & Trained Trainer',
  'Member of BCS, The Chartered Institute for IT · ISACA Member · techUK Associate',
  'Former HMG/MOD security clearance — available on request',
];

// Case studies. Anything wrapped in double square brackets is a placeholder still to be confirmed by Richard;
// build-static.js refuses to publish while any remain.
window.CASE_STUDIES = [
  {
    id: 'vetpartners',
    org: 'VetPartners', system: 'Practice onboarding at acquisition pace',
    when: 'March – September 2022', pace: '~2 practices a week',
    image: 'img/vetpartners.webp',
    situation: 'The UK’s fastest-growing veterinary group was acquiring around 80 practices a year. Every new practice arrived with its own kit, network, systems and habits — and each one had to be brought safely into the group without interrupting a single day of pet care. Many had been built from the ground up by their partners, so joining a larger organisation, and handing parts of the business to others, was a daunting step for them.',
    people: ['Founding partners of acquired practices', 'Practice managers', 'Vets and veterinary nurses', 'IT team: 7 direct, 31 indirect', 'Deal team on the Goddard Veterinary Group acquisition'],
    did: [
      'Went practice by practice: reviewed infrastructure, network, devices, systems and security before each one joined, so risks were found before go-live rather than after.',
      'Built a repeatable onboarding playbook — standard configuration, policy and support — that the team could run week after week.',
      'Worked directly with practice managers and clinical teams so that each changeover fitted around pet care, not the other way round.',
      'Treated every acquired practice with due care: introduced change with respect for how the partners had built their business, easing a hesitant transition into the wider group.',
      'Rolled out the practice management system across 50+ additional clinical sites and wrote 30+ technology policies for the 350+ site estate.',
      'Led IT due diligence and integration for the Goddard Veterinary Group acquisition.',
    ],
    results: [
      { value: '30%', label: 'faster new-practice onboarding' },
      { value: '~2/week', label: 'practices brought into the group model' },
      { value: '50+', label: 'sites onto the practice management system' },
      { value: '350+', label: 'sites governed by one set of policies' },
    ],
    voice: 'VetPartners is one of the most enjoyable roles I have had, because it never stood still. Every week brought new practices, new people and a new set of problems to solve on the ground. That pace energises me — I do my best work when I am close to the teams and the systems, not managing from a distance.',
  },
  {
    id: 'hubspot',
    org: 'Armstrong Watson', system: 'HubSpot CRM',
    when: 'October 2024 – February 2025', pace: 'Live in about four months',
    image: 'img/armstrong-watson.webp',
    situation: 'The C-suite was driving a firm-wide move onto Microsoft Dynamics. For marketing, though, Dynamics did not fit without heavy modification, and the firm did not have strong in-house Dynamics development skills to build and maintain that. HubSpot was chosen for marketing instead — but the decision had been made before I arrived, the relationship between marketing and technology had broken down, and campaigns and leads were the firm’s key source of new business. Marketing could not afford for this to go wrong.',
    people: ['Marketing Director', 'Marketing team', 'C-suite sponsors of the Microsoft Dynamics programme', 'Technology team'],
    did: [
      'Took on HubSpot from my first day at Armstrong Watson, inheriting a decision made before I joined and a strained relationship between marketing and the previous head of technology.',
      'Rebuilt trust first: worked closely with the Marketing Director and his team, listened to what they needed from their main source of new business, and turned a negative view of the technology team into a working partnership.',
      'Got hands-on with the data, making sure the campaign and lead data that had passed through Microsoft Dynamics flowed back into HubSpot seamlessly.',
      'Delivered HubSpot fully commissioned, so marketing could run its campaigns and manage leads on a platform that suited them, without costly Dynamics customisation.',
    ],
    results: [
      { value: 'Day 1', label: 'my first priority on joining the firm' },
      { value: 'Seamless', label: 'return of campaign and lead data from Dynamics to HubSpot' },
      { value: 'Rebuilt', label: 'relationship between marketing and technology' },
      { value: 'Live', label: 'HubSpot fully commissioned for the firm’s key source of new business' },
    ],
  },
  {
    id: 'intacct',
    org: 'Armstrong Watson', system: 'Sage suite & post-acquisition consolidation',
    when: 'October 2024 – May 2025', pace: 'Business-critical, with every acquisition',
    image: 'img/armstrong-watson.webp',
    situation: 'Armstrong Watson, one of the UK’s largest independent accountancy firms, ran on the whole Sage suite, including Sage Intacct, alongside Microsoft Dynamics. For an accountancy firm these platforms are the production line, so any problem hits client work directly. The firm was also growing by acquisition, and every accounting business it bought arrived with its own core platforms that had to be dealt with.',
    people: ['My technology team', 'Sage, as the software vendor', 'Colleagues using the Sage suite across the firm', 'Teams joining from acquired accounting businesses'],
    did: [
      'Assessed the core platforms of each acquired accounting business: some were kept, some were retired.',
      'Moved most acquired businesses onto the firm’s core solutions, Microsoft Dynamics and Sage, through planned stages of adoption and training rather than a single disruptive switch.',
      'Owned support for the whole Sage suite: my team picked up every issue colleagues raised, reported issues back to Sage for resolution and followed them through.',
      'Kept fixes in-house: where a fix was needed on our side, my technology team made it, rather than waiting on third parties.',
    ],
    results: [
      { value: 'Core', label: 'most acquired businesses moved onto Microsoft Dynamics and Sage' },
      { value: 'Staged', label: 'adoption and training for each acquired business' },
      { value: 'In-house', label: 'fixes handled by my own technology team' },
      { value: 'Every day', label: 'business-critical accounting platforms kept running' },
    ],
  },
  {
    id: 'employmenthero',
    org: 'Nova Pangaea', system: 'Employment Hero HR & payroll',
    when: 'Live January 2024', pace: 'About four months after I joined',
    image: 'img/nova-pangaea.webp',
    situation: 'I joined Nova Pangaea as the only IT hire, building a technology function from nothing while the business prepared for its British Airways partnership and funding round. HR needed a proper people platform, and the HR Director had used Employment Hero before and knew how it worked, so we built on that experience to move quickly rather than start from scratch.',
    people: ['HR Director', 'HR leadership team', 'About 60 employees'],
    did: [
      'Worked closely with the HR leadership to implement Employment Hero, using the HR Director’s knowledge of the platform to keep the rollout fast and focused.',
      'Moved the employee records into the new platform myself.',
      'Set up sign-in so every employee could get into the platform from day one.',
    ],
    results: [
      { value: '~60', label: 'employees onto the platform' },
      { value: 'Jan 2024', label: 'live, about four months after I joined' },
      { value: 'Hands-on', label: 'records migration and sign-in done myself' },
      { value: 'Twice', label: 'recommended: at Nova Pangaea and again at Enselia' },
    ],
    followUp: 'I later recommended Employment Hero to Enselia, as their Principal Technology Consultant. Enselia had adopted Microsoft products early on for speed, but wanted to move towards Google Cloud. Employment Hero bridged that gap perfectly: a strong people platform that did not tie them to the Microsoft stack.',
  },
];
