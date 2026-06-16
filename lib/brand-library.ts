export const aklBrandLibrary = {
  identity: {
    name: "Auckland Airport",
    shortName: "AKL",
    fullName: "Auckland International Airport",
    taglines: [
      "Where Journeys Begin",
      "The Gateway to New Zealand",
      "Connecting New Zealand to the World",
    ],
    maoriName: "Tāmaki Makaurau",
    description:
      "Auckland Airport is New Zealand's largest and busiest airport, serving as the primary gateway between New Zealand and the rest of the world. Located in Māngere, South Auckland, it connects over 30 international destinations and domestic routes across the country.",
  },

  brandPersonality: {
    summary:
      "Auckland Airport is warm, confident, and distinctly Kiwi. We're the first and last impression of New Zealand — a place where journeys begin and memories are made. We're proud of our country, our people, and the connections we create.",
    traits: [
      {
        trait: "Warm & Welcoming",
        description:
          "We greet every traveller as a guest, embodying the spirit of manaakitanga. We make people feel at ease whether they're arriving or departing.",
        doExample: "Welcome aboard, New Zealand awaits.",
        dontExample: "Passengers must comply with screening procedures.",
      },
      {
        trait: "Confident & Proud",
        description:
          "We're proud of New Zealand and our role as its gateway. We speak with quiet confidence, not arrogance.",
        doExample:
          "We're proud to connect New Zealand to over 30 international destinations.",
        dontExample: "We are the best airport in the Southern Hemisphere.",
      },
      {
        trait: "Distinctly Kiwi",
        description:
          "We're grounded in New Zealand culture, values, and language. We use te reo Māori naturally and celebrate what makes New Zealand unique.",
        doExample: "Haere mai — welcome to Aotearoa.",
        dontExample: "New Zealand is a great destination for tourists.",
      },
      {
        trait: "Helpful & Clear",
        description:
          "We communicate clearly, especially when it matters most. Information is always easy to find and understand.",
        doExample: "Your gate closes in 30 minutes. Head to Gate 12 now.",
        dontExample:
          "Passengers are advised to proceed to their designated departure gate.",
      },
      {
        trait: "Optimistic & Energising",
        description:
          "Travel is exciting. We share in that excitement and celebrate the possibilities that every journey holds.",
        doExample:
          "Adventure is just a boarding pass away. Where are you headed?",
        dontExample: "Please ensure all documentation is prepared prior to departure.",
      },
    ],
  },

  toneOfVoice: {
    principles: [
      {
        principle: "Human first",
        description:
          "Write as a person talking to a person. Avoid bureaucratic or corporate language. Use contractions, first person, and natural sentence structures.",
      },
      {
        principle: "Positive framing",
        description:
          "Lead with what's possible, not what's prohibited. Transform restrictions into empowering guidance.",
      },
      {
        principle: "Kiwi without trying too hard",
        description:
          "Be naturally New Zealand — understated, genuine, not showy. Don't force slang or over-use 'kiwi'.",
      },
      {
        principle: "Specific over generic",
        description:
          "Name things. Say 'our Food Hall' not 'our dining options'. Say 'Terminal 2' not 'the building'.",
      },
      {
        principle: "Active over passive",
        description:
          "Make sentences do something. 'We fly you there' beats 'Destinations can be flown to'.",
      },
    ],
    wordsToUse: [
      "journey",
      "adventure",
      "connection",
      "discover",
      "explore",
      "whānau",
      "manaakitanga",
      "gateway",
      "wander",
      "arrive",
      "depart",
      "home",
      "world",
      "Aotearoa",
      "haere mai",
      "haere rā",
      "kia ora",
      "experience",
      "community",
      "together",
    ],
    wordsToAvoid: [
      { word: "cheap", use: "great value / affordable" },
      { word: "deal", use: "offer / saving" },
      { word: "problem", use: "challenge / situation" },
      { word: "complaint", use: "feedback" },
      { word: "passengers", use: "travellers / guests" },
      { word: "utilise", use: "use" },
      { word: "facilitate", use: "help / enable" },
      { word: "leverage", use: "use / build on" },
      { word: "synergies", use: "(avoid entirely)" },
      { word: "stakeholders", use: "partners / community" },
    ],
    punctuationRules: [
      "Use contractions — it's, we're, you'll",
      "Em dashes for emphasis — use them sparingly",
      "Avoid exclamation marks unless genuinely exciting (max one per post)",
      "Oxford comma: always in body copy, optional in headlines",
      "Ellipsis only for deliberate pauses, not uncertainty",
    ],
  },

  contentPillars: [
    {
      id: "travel-inspiration",
      name: "Travel Inspiration & Destinations",
      description:
        "Spark wanderlust. Celebrate the destinations we connect to and inspire people to explore the world from AKL.",
      examples: [
        "Dreaming of sakura season? Direct flights to Tokyo are now available. 🌸",
        "Bali calling your name? We'll get you there. Book your next escape from AKL.",
        "From Queenstown to Queenstown (New York, that is). Where will your next adventure take you?",
      ],
      hashtags: ["#TravelNZ", "#WhereNextAKL", "#AucklandAirport", "#AKL"],
    },
    {
      id: "airport-experience",
      name: "Airport Experience",
      description:
        "Showcase the world-class retail, dining, lounges and amenities that make AKL more than just an airport.",
      examples: [
        "Start your journey the right way. Our Food Hall is open from 5am — because great coffee shouldn't wait.",
        "Tax-free shopping? Yes please. Browse over 100 stores before you fly. 🛍️",
        "The Air New Zealand Lounge: your calm before the adventure. Available to eligible passengers in the International Terminal.",
      ],
      hashtags: ["#AKLDining", "#TaxFree", "#AucklandAirport"],
    },
    {
      id: "operational",
      name: "Operational & Wayfinding",
      description:
        "Keep travellers informed with clear, helpful updates about the airport, services and processes.",
      examples: [
        "International Terminal tip: arrive 3 hours before your flight. It's worth it.",
        "Free shuttle between terminals runs every 10 minutes, 24/7. No stress.",
        "Need to meet someone? The arrivals hall is on Level 1 of the International Terminal — follow the signs.",
      ],
      hashtags: ["#AKLTips", "#AucklandAirport"],
    },
    {
      id: "events",
      name: "Events & Activations",
      description:
        "Celebrate special moments, cultural events and airport activations that bring the community together.",
      examples: [
        "Matariki is here — and we're celebrating. Look out for special installations across both terminals this week. 🌟",
        "It's Rugby World Cup season and AKL is buzzing. Safe travels to all our teams heading overseas. 🏉",
        "Our annual Charity Golf Day raised over $100,000 for local community organisations. Tēnā koutou katoa.",
      ],
      hashtags: ["#AKLEvents", "#Matariki", "#AucklandAirport"],
    },
    {
      id: "sustainability",
      name: "Sustainability & Environment",
      description:
        "Share our commitment to a sustainable future — for the airport, Auckland, and Aotearoa New Zealand.",
      examples: [
        "We're committed to net zero carbon by 2030. Here's what we're doing this year to get there. 🌿",
        "Our new solar farm generates enough electricity to power 1,200 homes. Small steps. Big impact.",
        "Reusable cups at every café in the terminal. Because your flat white shouldn't cost the earth.",
      ],
      hashtags: [
        "#Sustainability",
        "#AKLGreen",
        "#NetZero",
        "#AucklandAirport",
      ],
    },
    {
      id: "community",
      name: "Community & Te Ao Māori",
      description:
        "Celebrate Auckland, Māori culture, and the communities we serve. We are part of the rohe of Manukau.",
      examples: [
        "Kia ora Auckland. We're proud to be part of this city and its incredible story.",
        "Our airport sits within the rohe of Manukau. We honour that connection every day.",
        "From the first flight to the last — we're here for every moment of your journey. Ngā mihi nui.",
      ],
      hashtags: [
        "#AucklandAirport",
        "#TeAoMaori",
        "#Manukau",
        "#Aotearoa",
        "#Auckland",
      ],
    },
    {
      id: "behind-scenes",
      name: "Behind the Scenes",
      description:
        "Lift the curtain on airport life. Show the people, processes and scale that keep AKL moving.",
      examples: [
        "Before 5am, 300 people are already at work keeping AKL running. Meet the night shift. 👏",
        "2.7 million bags handled every year. And yes, every one matters.",
        "From ramp crew to retail — the people of AKL make every journey possible.",
      ],
      hashtags: ["#AKLTeam", "#BehindTheScenes", "#AucklandAirport"],
    },
  ],

  platformGuidelines: {
    instagram: {
      name: "Instagram",
      emoji: "📸",
      characterLimit: 2200,
      idealLength: "138–150 characters in caption",
      tone: "Aspirational, visual-first, lifestyle-driven. Let the image do the heavy lifting — keep copy punchy.",
      format: [
        "Hook in the first line (before 'more')",
        "2–3 lines of copy max",
        "3–5 hashtags at end or in first comment",
        "Single emoji used purposefully",
      ],
      bestFor: [
        "Travel inspiration",
        "Airport experience",
        "Community moments",
        "Events",
      ],
      avoid: ["Long paragraphs", "Too many hashtags", "Corporate language"],
      examplePost:
        "Where will you go next? ✈️\n\nAuckland is your launchpad. 30+ destinations. Endless possibilities.\n\n#AucklandAirport #WhereJourneysBegin #TravelNZ",
    },
    facebook: {
      name: "Facebook",
      emoji: "👍",
      characterLimit: 63206,
      idealLength: "40–80 words",
      tone: "Community-focused, conversational, informative. A slightly warmer, more detailed voice than Instagram.",
      format: [
        "Lead with the most important information",
        "Can tell a fuller story than Instagram",
        "Ask a question to drive engagement",
        "1–3 hashtags max",
      ],
      bestFor: [
        "Operational updates",
        "Events",
        "Community news",
        "Longer stories",
      ],
      avoid: ["Overly corporate tone", "Too many hashtags", "Clickbait"],
      examplePost:
        "Heading away this school holidays? We've got you covered.\n\nArriving 3 hours before your international flight means time to shop, eat, and relax — not rush. Our Food Hall opens at 5am, and the kids will love the play zone near Gate 15.\n\nSafe travels, whānau. 🌏 #AucklandAirport",
    },
    twitter: {
      name: "X (Twitter)",
      emoji: "🐦",
      characterLimit: 280,
      idealLength: "Under 240 characters (leave room for replies)",
      tone: "Concise, witty, timely. Real-time updates and punchy observations. Be human, not a press release.",
      format: [
        "Get to the point immediately",
        "One idea per tweet",
        "1–2 hashtags max",
        "Use threads for more detail",
      ],
      bestFor: ["Breaking news", "Travel tips", "Reactive content", "Events"],
      avoid: [
        "Long paragraphs",
        "Too many hashtags",
        "Promotional language",
      ],
      examplePost:
        "3 hours before an international flight isn't early — it's smart. Trust us. ✈️ #AKL",
    },
    linkedin: {
      name: "LinkedIn",
      emoji: "💼",
      characterLimit: 3000,
      idealLength: "150–300 words",
      tone: "Professional, thought-leadership, proud. Speak to business travellers, industry partners, and future employees.",
      format: [
        "Start with a strong first line (the hook before 'see more')",
        "Share data, milestones, or insights",
        "End with a clear purpose or call to action",
        "2–3 relevant hashtags",
      ],
      bestFor: [
        "Business announcements",
        "Sustainability milestones",
        "Partner news",
        "Careers",
      ],
      avoid: [
        "Slang",
        "Emojis (use sparingly)",
        "Personal anecdotes",
        "Promotional retail posts",
      ],
      examplePost:
        "Auckland Airport is proud to announce the launch of three new international routes this winter season, adding 180,000 seats to our network.\n\nThis expansion reflects the strength of New Zealand's aviation recovery and our commitment to growing connections that matter — for business, tourism, and the communities we serve.\n\nFull details in the comments below.\n\n#AucklandAirport #Aviation #NewZealand",
    },
    tiktok: {
      name: "TikTok",
      emoji: "🎵",
      characterLimit: 2200,
      idealLength: "Under 150 characters",
      tone: "Fun, playful, authentic. Trend-aware but not try-hard. Behind-the-scenes and human moments work best.",
      format: [
        "Hook in first 3 seconds of caption",
        "Conversational and casual",
        "Use trending audio references where appropriate",
        "3–5 hashtags",
      ],
      bestFor: [
        "Behind the scenes",
        "Staff stories",
        "Fun facts",
        "Challenges",
      ],
      avoid: [
        "Corporate tone",
        "Formal language",
        "Overly produced content descriptions",
      ],
      examplePost:
        "POV: it's 3am and you're at AKL and somehow the airport is still vibing ✈️🌙 #AucklandAirport #AirportLife #NightShift",
    },
  },

  approvedHashtags: {
    primary: ["#AucklandAirport", "#AKL", "#WhereJourneysBegin"],
    destination: [
      "#TravelNZ",
      "#FlyAKL",
      "#WhereNextAKL",
      "#NewZealand",
      "#Aotearoa",
      "#Auckland",
    ],
    experience: [
      "#AKLDining",
      "#AKLShopping",
      "#TaxFree",
      "#AirportLife",
    ],
    culture: [
      "#TeAoMaori",
      "#Matariki",
      "#Manukau",
      "#Aotearoa",
    ],
    sustainability: [
      "#AKLGreen",
      "#NetZero",
      "#Sustainability",
      "#ClimateAction",
    ],
    community: ["#AKLTeam", "#BehindTheScenes", "#AKLEvents"],
  },

  keyMessages: [
    {
      id: "gateway",
      message: "Auckland Airport is New Zealand's gateway to the world.",
      pillar: "identity",
    },
    {
      id: "connection",
      message:
        "We connect New Zealand to over 30 international destinations and domestic routes across the country.",
      pillar: "connection",
    },
    {
      id: "experience",
      message:
        "AKL offers world-class retail, dining, and lounge experiences to make your journey exceptional.",
      pillar: "experience",
    },
    {
      id: "sustainability",
      message:
        "We're committed to reaching net zero carbon by 2030 and being a responsible steward of the environment.",
      pillar: "sustainability",
    },
    {
      id: "manaakitanga",
      message:
        "We embody manaakitanga — the Māori value of hospitality and respect — in everything we do.",
      pillar: "culture",
    },
    {
      id: "community",
      message:
        "Auckland Airport is part of the Auckland community, committed to the growth and wellbeing of the region.",
      pillar: "community",
    },
    {
      id: "innovation",
      message:
        "We invest in technology and infrastructure to make travel smoother, smarter, and more sustainable.",
      pillar: "innovation",
    },
    {
      id: "team",
      message:
        "The people of AKL — thousands of them — make every journey possible.",
      pillar: "people",
    },
  ],

  copyExamples: {
    promotional: [
      {
        platform: "instagram",
        copy: "Summer's calling and we've got the flights to answer. 🌞 Explore hundreds of routes from AKL this season — your next adventure is closer than you think. #AucklandAirport #TravelNZ",
        notes: "Seasonal promotional — aspirational, emoji used once",
      },
      {
        platform: "facebook",
        copy: "Treating yourself this summer? Our duty-free stores are stocked with the best perfumes, spirits and tech to start your holiday early. Browse before you board at AKL.\n\n#AucklandAirport #TaxFree",
        notes: "Retail promotional — community tone, question hook",
      },
      {
        platform: "linkedin",
        copy: "Auckland Airport has welcomed its 10 millionth international passenger of the year — a milestone that speaks to New Zealand's growing appeal and the strength of our global connections. Thank you to every traveller, partner, and team member who made this possible. #AucklandAirport #Aviation",
        notes: "Milestone — professional, grateful, data-driven",
      },
    ],
    informational: [
      {
        platform: "twitter",
        copy: "International departures: arrive 3 hours early. Domestic: 90 minutes. Your future self will thank you. ✈️ #AKL",
        notes: "Travel tip — punchy, helpful, witty",
      },
      {
        platform: "facebook",
        copy: "Good to know: the free inter-terminal shuttle runs every 10 minutes, 24 hours a day, 7 days a week. Whether you're connecting flights or collecting someone from arrivals — we've got you. 🚌 #AucklandAirport",
        notes: "Wayfinding — friendly, reassuring",
      },
    ],
    engagement: [
      {
        platform: "instagram",
        copy: "Window seat or aisle? Drop your answer below — we'll start. 🪟✈️ #AucklandAirport #TravelNZ",
        notes: "Community engagement — simple, fun, interactive",
      },
      {
        platform: "facebook",
        copy: "Where's the best place you've ever landed? 🌍 We want to hear your most unforgettable arrival — drop your destination in the comments below. ✈️ #WhereJourneysBegin",
        notes: "Story-driven engagement — open-ended question",
      },
    ],
    event: [
      {
        platform: "instagram",
        copy: "Matariki is here. 🌟 We're celebrating the Māori New Year with special installations across both terminals this week. Come find them. #Matariki #AucklandAirport #TeAoMaori",
        notes: "Cultural event — respectful, inviting, specific",
      },
      {
        platform: "linkedin",
        copy: "This week, Auckland Airport marks Matariki — the Māori New Year — with a series of cultural installations and performances across our terminals. As an airport located within the rohe of Manukau, we're proud to honour and celebrate te ao Māori as part of who we are. Tēnā koutou katoa. #Matariki #AucklandAirport #TeAoMaori",
        notes: "Cultural event (LinkedIn) — respectful, proud, deeper context",
      },
    ],
  },

  dosAndDonts: {
    dos: [
      "Write as a person, not a corporation",
      "Use te reo Māori naturally and correctly",
      "Lead with the most human element of any story",
      "Be specific — name the terminal, the gate, the café",
      "Celebrate New Zealand with genuine pride",
      "Use 'we' and 'you' to create a two-way relationship",
      "Keep hashtags relevant and minimal",
      "Match the tone to the platform",
      "Test copy out loud — if it sounds weird said out loud, rewrite it",
      "Always check character limits per platform",
    ],
    donts: [
      "Don't speak down to travellers — they're guests, not subjects",
      "Don't use jargon (PAX, pax load, aeronautical) in public-facing copy",
      "Don't overuse emojis — one or two max, and only when they add meaning",
      "Don't reference competitors or make comparisons",
      "Don't sensationalise delays or disruptions — be calm, clear, empathetic",
      "Don't use ALL CAPS for emphasis — use bold in posts that support it",
      "Don't write passive voice: 'it was decided' → 'we decided'",
      "Don't promise what can't be delivered",
      "Don't use Māori language tokenistically — use it meaningfully or not at all",
      "Don't post promotional content during a crisis or major disruption",
    ],
  },

  emojiGuidance: {
    approved: [
      { emoji: "✈️", use: "Flights, travel, departures/arrivals" },
      { emoji: "🌍🌏🌎", use: "Global connections, destinations" },
      { emoji: "🌿", use: "Sustainability, environment" },
      { emoji: "🌟⭐", use: "Matariki, celebrations, highlights" },
      { emoji: "🛍️", use: "Retail, shopping" },
      { emoji: "☕🍽️", use: "Dining, cafés, food" },
      { emoji: "❤️🧡", use: "Community, gratitude (use sparingly)" },
      { emoji: "👋", use: "Welcomes, farewells" },
      { emoji: "📍", use: "Location, wayfinding" },
      { emoji: "💼", use: "Business travel (LinkedIn only)" },
    ],
    rules: [
      "Max 2 emojis per post on Instagram and Facebook",
      "1 emoji max on Twitter/X",
      "Avoid emojis on LinkedIn (1 max if truly appropriate)",
      "Never use emojis in crisis or disruption communications",
      "Emoji at end of sentence, not mid-sentence",
    ],
  },

  targetAudiences: {
    internationalTravellers: {
      name: "International Travellers",
      description:
        "Visitors to New Zealand and Kiwis travelling overseas. Excited, slightly nervous about logistics, time-conscious.",
      messagingFocus: [
        "Inspiration and destination content",
        "Wayfinding and practical tips",
        "Retail and dining pre-flight",
      ],
    },
    domesticTravellers: {
      name: "Domestic Travellers",
      description:
        "Kiwis flying within New Zealand. Frequent flyers and occasional travellers, often time-poor.",
      messagingFocus: [
        "Quick tips and shortcuts",
        "Value offers at retail",
        "Efficiency messaging",
      ],
    },
    businessTravellers: {
      name: "Business Travellers",
      description:
        "Frequent flyers, corporates, and MICE market. Value their time above all else.",
      messagingFocus: [
        "Lounge and premium services",
        "Efficiency and connectivity",
        "Business route announcements",
      ],
    },
    families: {
      name: "Families",
      description:
        "Parents travelling with children. Often stressed, need reassurance and practical information.",
      messagingFocus: [
        "Family-friendly services",
        "Play zones and dining for kids",
        "Arriving early reassurance",
      ],
    },
    aucklandCommunity: {
      name: "Auckland Community",
      description:
        "Aucklanders who may not be travelling but engage with AKL as a local institution and employer.",
      messagingFocus: [
        "Community initiatives",
        "Local employment",
        "Sustainability and environment",
        "Events and activations",
      ],
    },
    tradeAndPartners: {
      name: "Trade & Industry Partners",
      description:
        "Airlines, tourism operators, retailers, and hospitality partners.",
      messagingFocus: [
        "Business milestones",
        "Partnership announcements",
        "Industry trends",
      ],
    },
  },
} as const;

export type Platform = "instagram" | "facebook" | "twitter" | "linkedin" | "tiktok";
export type ContentType =
  | "promotional"
  | "informational"
  | "engagement"
  | "event"
  | "behind-the-scenes"
  | "sustainability"
  | "community";
export type Audience = keyof typeof aklBrandLibrary.targetAudiences;
export type ContentPillar = (typeof aklBrandLibrary.contentPillars)[number]["id"];
