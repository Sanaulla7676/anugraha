// The 12 service (programme) pages. Content is derived from the institute's own course facts:
// 45-day offline course, Vijayanagar Bengaluru, 20-25 learners, 10-15 days observation, no guarantees.

export type Program = {
  slug: string;
  no: string;
  name: string;
  h1: [string, string];
  meta: string; // "Genre • Mode" style tags for lists
  tagline: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  img: string;
  imgPos: string;
  mg: string;
  fx: { hero: string; reveal: string; text: string; scroll: string; hover: string; ambient: string };
  learn: { t: string; b: string }[];
  steps: { t: string; k: string; b: string }[];
  build: { t: string; o: string; b: string }[];
  skills: string[];
  faqs: [string, string][];
  related: string[];
};

export const programs: Program[] = [
  {
    slug: "event-planning-foundations", no: "01", name: "Event Planning Foundations",
    h1: ["EVENT PLANNING", "FOUNDATIONS"], meta: "Planning • Lifecycle",
    tagline: "Understand the complete event lifecycle before you touch a single detail.",
    lead: "The foundation module explains how an event is built from the first client enquiry to the post-event review: goals, scope, schedules, checklists, run sheets and the roles that keep everything moving.",
    metaTitle: "Event Planning Course in Bangalore | Foundations Module | Anugraha",
    metaDescription: "Learn event planning foundations in Bengaluru: event formats, goals, scope, schedules, checklists and run sheets in Anugraha's 45-day offline event management course.",
    keywords: ["event planning course Bangalore", "event management basics", "event lifecycle training", "event planning training Vijayanagar"],
    img: "photo-1497366754035-f200968a6e72", imgPos: "50% 30%", mg: "mg-timeline-build",
    fx: { hero: "tx-chars", reveal: "rv-fade-up", text: "tx-words", scroll: "sc-parallax-slow", hover: "ix-lift", ambient: "am-orbs" },
    learn: [
      { t: "Event types and formats", b: "Compare social, wedding, corporate, public, cultural and promotional events and see how audience, venue and objective change the plan." },
      { t: "Goals, scope and stakeholders", b: "Define what the event must achieve, who decides, who attends and what is included, so everyone works from the same brief." },
      { t: "The planning lifecycle", b: "Map enquiry, briefing, proposal, supplier sourcing, scheduling, execution and review as one connected process." },
      { t: "Checklists and planning documents", b: "Build working checklists and planning sheets that a team can actually follow on a busy day." },
      { t: "Run sheets and timelines", b: "Sequence preparation, setup, guest arrival, programme and closing into a clear run sheet." },
      { t: "Roles in an event team", b: "Understand who does what, from coordinator to supplier, and how responsibility is handed over." }
    ],
    steps: [
      { t: "Start with the event", k: "Orientation", b: "Study real event formats and identify what makes each one different." },
      { t: "Break it into stages", k: "Lifecycle", b: "Divide a sample event into stages and name the output of each stage." },
      { t: "Draft the documents", k: "Practice", b: "Prepare a checklist and a run sheet for a sample event." },
      { t: "Assign roles", k: "Teamwork", b: "Allocate responsibilities and test the plan with a group exercise." },
      { t: "Review and refine", k: "Feedback", b: "Receive feedback from trainers and improve the plan." }
    ],
    build: [
      { t: "Event lifecycle map", o: "One-page diagram", b: "A visual map of the stages of a sample event." },
      { t: "Planning checklist", o: "Working document", b: "A checklist covering preparation to post-event tasks." },
      { t: "Run sheet", o: "Timeline", b: "A sequenced run sheet for an event day." },
      { t: "Role allocation chart", o: "Team chart", b: "Who is responsible for what, and when." }
    ],
    skills: ["Event lifecycle", "Scope definition", "Checklists", "Run sheets", "Scheduling", "Team roles"],
    faqs: [
      ["Do I need experience before joining?", "No. There is no minimum qualification. Applicants must be 16 or older, and applicants under 18 need parent or guardian consent."],
      ["Is this a separate course?", "No. It is one module inside Anugraha's flagship 45-day offline Event Management course."],
      ["Will I plan a real event?", "You practise on simulated events and sample scenarios. Visits to real event environments are observational and depend on event schedules and access."]
    ],
    related: ["client-handling-communication", "quotations-costing-budgets", "team-leadership-coordination"]
  },
  {
    slug: "client-handling-communication", no: "02", name: "Client Handling & Communication",
    h1: ["CLIENT HANDLING", "& COMMUNICATION"], meta: "Briefs • Meetings",
    tagline: "Listen first. Brief clearly. Handle every conversation with confidence.",
    lead: "Events succeed or fail on communication. This module teaches requirement gathering, client meetings, expectation setting, objection handling and follow-up, with mock client meetings to rehearse the hard conversations.",
    metaTitle: "Client Handling Training for Event Planners | Anugraha Bengaluru",
    metaDescription: "Learn client briefing, requirement gathering, meeting etiquette and objection handling in Anugraha's 45-day event management course in Vijayanagar, Bengaluru.",
    keywords: ["client handling event management", "event client communication training", "event planner skills Bangalore", "mock client meeting training"],
    img: "photo-1521737711867-e3b97375f902", imgPos: "50% 35%", mg: "mg-chat-bubbles",
    fx: { hero: "tx-blur-words", reveal: "rv-fade-left", text: "tx-lines", scroll: "sc-scrub-fade", hover: "ix-spotlight-card", ambient: "am-aurora" },
    learn: [
      { t: "Requirement gathering", b: "Ask the questions that reveal purpose, guest profile, venue, date, programme and budget range." },
      { t: "Running a client meeting", b: "Prepare, lead and close a meeting with a clear summary of decisions and next actions." },
      { t: "Setting expectations", b: "Explain what is possible, what is optional and what changes cost, before problems appear." },
      { t: "Objection handling", b: "Respond to concerns about price, timing and ideas without losing trust." },
      { t: "Written follow-up", b: "Turn a conversation into a short, clear message the client can approve." },
      { t: "Difficult conversations", b: "Handle changes, delays and disagreements calmly and professionally." }
    ],
    steps: [
      { t: "Learn the brief", k: "Method", b: "Study a structured briefing format and what each question uncovers." },
      { t: "Prepare the meeting", k: "Preparation", b: "Plan the agenda, questions and materials for a client meeting." },
      { t: "Rehearse in a mock meeting", k: "Role-play", b: "Practise as planner and as client in the mock meeting space at the centre." },
      { t: "Handle the pushback", k: "Objections", b: "Respond to realistic objections and agree on next steps." },
      { t: "Write the follow-up", k: "Documentation", b: "Send a clear summary and capture agreed decisions." }
    ],
    build: [
      { t: "Client brief", o: "Structured document", b: "A completed brief from a mock client conversation." },
      { t: "Meeting agenda", o: "One page", b: "A prepared agenda and question list." },
      { t: "Follow-up message", o: "Written summary", b: "A concise message confirming decisions." },
      { t: "Objection responses", o: "Practice notes", b: "Prepared responses to common concerns." }
    ],
    skills: ["Active listening", "Briefing", "Meeting etiquette", "Negotiation basics", "Follow-up", "Professional writing"],
    faqs: [
      ["Will I practise speaking to clients?", "Yes. Mock client meetings are part of the course so learners can rehearse in a safe setting."],
      ["Which languages are used in class?", "Trainers may teach in English, Kannada, Telugu, Hindi and other South Indian languages depending on availability."],
      ["Does this cover wedding clients as well as corporate clients?", "The communication methods apply to both, and the wedding and corporate modules discuss how expectations differ."]
    ],
    related: ["quotations-costing-budgets", "wedding-celebration-planning", "freelancing-event-business"]
  },
  {
    slug: "quotations-costing-budgets", no: "03", name: "Quotations, Costing & Budgets",
    h1: ["QUOTATIONS,", "COSTING & BUDGETS"], meta: "Costing • Proposals",
    tagline: "Turn a creative idea into a proposal a client can say yes to.",
    lead: "An event professional must understand the money. Learn to break an event into line items, collect supplier estimates, build a clear quotation, manage budget revisions and keep an eye on margins.",
    metaTitle: "Event Quotation & Budget Training in Bangalore | Anugraha",
    metaDescription: "Learn event costing, quotations, supplier estimates and budget management in Anugraha's 45-day event management course in Bengaluru.",
    keywords: ["event budgeting course", "event quotation training", "event costing Bangalore", "event proposal writing"],
    img: "photo-1523240795612-9a054b0db644", imgPos: "50% 40%", mg: "mg-budget-bars",
    fx: { hero: "tx-rotate-chars", reveal: "rv-stagger-up", text: "tx-count", scroll: "sc-scrub-scale", hover: "ix-tilt-3d", ambient: "am-grain" },
    learn: [
      { t: "Line-item costing", b: "List every service, quantity and rate so nothing is forgotten or hidden." },
      { t: "Supplier estimates", b: "Request, compare and record supplier rates in a consistent format." },
      { t: "Quotation structure", b: "Present scope, inclusions, exclusions and options in a professional quotation." },
      { t: "Budget control", b: "Track spend against a ceiling and flag risks early." },
      { t: "Revisions and changes", b: "Update figures when the brief changes and explain the effect clearly." },
      { t: "Margins and profit awareness", b: "Understand how pricing decisions affect the business behind the event." }
    ],
    steps: [
      { t: "Read the brief", k: "Input", b: "Start from a client brief and extract what must be priced." },
      { t: "Break it down", k: "Costing", b: "Create line items with quantities and assumptions." },
      { t: "Collect estimates", k: "Suppliers", b: "Gather and compare supplier estimates." },
      { t: "Build the quotation", k: "Proposal", b: "Assemble a clear, itemised quotation." },
      { t: "Revise with the client", k: "Change control", b: "Handle a change request and update the numbers." }
    ],
    build: [
      { t: "Costing sheet", o: "Spreadsheet", b: "A line-item cost breakdown for a sample event." },
      { t: "Client quotation", o: "Formatted document", b: "A professional quotation with inclusions and exclusions." },
      { t: "Budget tracker", o: "Spreadsheet", b: "A simple tracker comparing estimate and actual." },
      { t: "Revision note", o: "Short memo", b: "A note explaining a budget change to a client." }
    ],
    skills: ["Costing", "Quotations", "Budget tracking", "Supplier comparison", "Margins", "Spreadsheets"],
    faqs: [
      ["Do I need to be good at maths?", "Basic arithmetic and a willingness to work carefully in a spreadsheet are enough. Examples are practical and step by step."],
      ["Will the course fee be shared publicly?", "The fee is shared by the admissions team during counselling. A public fee amount has not been confirmed."],
      ["Are the costings based on real prices?", "Exercises use sample scenarios and supplier estimates for learning. They are not price promises."]
    ],
    related: ["vendor-sourcing-negotiation", "client-handling-communication", "freelancing-event-business"]
  },
  {
    slug: "vendor-sourcing-negotiation", no: "04", name: "Vendor Sourcing & Negotiation",
    h1: ["VENDOR SOURCING", "& NEGOTIATION"], meta: "Suppliers • Rates",
    tagline: "Build the network that makes every event deliverable.",
    lead: "No planner delivers alone. This module covers finding, comparing and managing suppliers for décor, flowers, sound, lighting, catering and more, and negotiating respectfully so relationships last.",
    metaTitle: "Vendor Sourcing & Negotiation Training | Event Management Bangalore",
    metaDescription: "Learn how to find, compare and negotiate with event vendors in Anugraha's 45-day event management course in Vijayanagar, Bengaluru.",
    keywords: ["event vendor management", "vendor negotiation training", "event supplier sourcing Bangalore", "event planner network"],
    img: "photo-1524178232363-1fb2b075b655", imgPos: "50% 30%", mg: "mg-vendor-network",
    fx: { hero: "tx-mask-reveal", reveal: "rv-clip-up", text: "tx-underline-draw", scroll: "sc-parallax-x", hover: "ix-magnetic", ambient: "am-particles" },
    learn: [
      { t: "Finding suppliers", b: "Search by category, location, scale and availability, and organise what you find." },
      { t: "Requesting rates", b: "Ask for quotations in a way that makes offers comparable." },
      { t: "Comparing beyond price", b: "Weigh quality, reliability, timing, transport, setup needs and terms." },
      { t: "Respectful negotiation", b: "Negotiate firmly and fairly while protecting the relationship." },
      { t: "Confirming responsibility", b: "Record deliverables, arrival times, access and payment terms." },
      { t: "Building a vendor database", b: "Maintain contacts and notes so the next event starts faster." }
    ],
    steps: [
      { t: "Define what you need", k: "Requirement", b: "Turn the brief into a supplier requirement list." },
      { t: "Research and shortlist", k: "Sourcing", b: "Build a shortlist per category." },
      { t: "Request and compare", k: "Evaluation", b: "Collect quotations and compare them side by side." },
      { t: "Negotiate", k: "Role-play", b: "Practise a negotiation conversation." },
      { t: "Confirm and document", k: "Agreement", b: "Confirm scope, timing and responsibility in writing." }
    ],
    build: [
      { t: "Supplier shortlist", o: "Directory", b: "A categorised list with contacts and notes." },
      { t: "Comparison sheet", o: "Spreadsheet", b: "Side-by-side comparison of supplier offers." },
      { t: "Confirmation note", o: "Short document", b: "A confirmation covering scope, timing and payment terms." },
      { t: "Negotiation notes", o: "Practice record", b: "Prepared points and fallback options." }
    ],
    skills: ["Sourcing", "Comparison", "Negotiation", "Relationship building", "Documentation", "Database upkeep"],
    faqs: [
      ["Will Anugraha introduce me to vendors?", "The institute shares guidance on building vendor connections. Access to a particular supplier or opportunity is not guaranteed."],
      ["Which vendor categories are covered?", "Décor, flowers, production, sound, lighting, catering and other event needs are discussed in class."],
      ["Is negotiation taught as role-play?", "Yes. Practising the conversation is part of the module."]
    ],
    related: ["quotations-costing-budgets", "event-design-decoration", "team-leadership-coordination"]
  },
  {
    slug: "event-design-decoration", no: "05", name: "Event Design, Stage & Décor",
    h1: ["EVENT DESIGN,", "STAGE & DÉCOR"], meta: "Concept • Production",
    tagline: "Turn an idea into a stage, a layout and a look that works in the real venue.",
    lead: "Explore event concepts, colour and styling, décor materials, venue layouts and stage and production basics, using demonstration materials at the Anugraha centre.",
    metaTitle: "Event Design & Decoration Course in Bangalore | Anugraha",
    metaDescription: "Learn event concept design, stage setup, décor basics and venue layouts in Anugraha's 45-day offline event management course in Bengaluru.",
    keywords: ["event decoration course Bangalore", "stage design training", "event design course", "decor basics event management"],
    img: "photo-1519167758481-83f550bb49b3", imgPos: "50% 45%", mg: "mg-stage-layout",
    fx: { hero: "tx-wave", reveal: "rv-zoom-in", text: "tx-gradient-sweep", scroll: "sc-zoom-hero", hover: "ix-img-zoom", ambient: "am-perspective-grid" },
    learn: [
      { t: "Concept development", b: "Translate a brief into a theme, mood and visual direction." },
      { t: "Colour and styling", b: "Make colour, material and texture decisions that suit the audience and budget." },
      { t: "Décor materials", b: "Work with practical décor materials during hands-on sessions at the centre." },
      { t: "Venue layouts", b: "Plan seating, circulation, entry and stage positions." },
      { t: "Stage and production basics", b: "Understand stage setup and production requirements through demonstration." },
      { t: "Matching vision to constraints", b: "Balance creative ideas with venue rules, time and cost." }
    ],
    steps: [
      { t: "Read the brief visually", k: "Concept", b: "Create a mood and theme direction." },
      { t: "Plan the layout", k: "Venue", b: "Draw a simple layout showing stage, seating and entry." },
      { t: "Select materials", k: "Décor", b: "Choose materials and list quantities." },
      { t: "Prototype at the centre", k: "Hands-on", b: "Try décor techniques with demonstration materials." },
      { t: "Present the concept", k: "Pitch", b: "Explain the design choices to the group." }
    ],
    build: [
      { t: "Concept board", o: "Visual board", b: "A mood board with theme, colours and materials." },
      { t: "Venue layout", o: "Plan drawing", b: "A layout of stage, seating and circulation." },
      { t: "Materials list", o: "Spreadsheet", b: "A décor list with quantities." },
      { t: "Design pitch", o: "Short presentation", b: "A brief presentation of the concept." }
    ],
    skills: ["Concept design", "Colour and styling", "Layout planning", "Stage basics", "Décor materials", "Presenting ideas"],
    faqs: [
      ["Do I need design skills?", "No. The module starts from the basics and focuses on practical decisions."],
      ["Is there hands-on décor practice?", "The centre has practical décor materials and a stage and production demonstration area."],
      ["Will I decorate a real event?", "Real event visits are observational. Hands-on practice happens at the centre on sample set-ups."]
    ],
    related: ["wedding-celebration-planning", "corporate-public-events", "event-marketing-creative-ai"]
  },
  {
    slug: "wedding-celebration-planning", no: "06", name: "Wedding & Celebration Planning",
    h1: ["WEDDING &", "CELEBRATION PLANNING"], meta: "Weddings • Celebrations",
    tagline: "Plan the moments that matter most to families.",
    lead: "Study the workflows of weddings, engagements, receptions, birthdays and private celebrations, including how traditions, family coordination and ceremony timelines shape what the client needs.",
    metaTitle: "Wedding Planner Course in Bangalore | Celebration Planning | Anugraha",
    metaDescription: "Learn wedding and celebration planning in Bengaluru: ceremony flow, family coordination, décor and suppliers in Anugraha's 45-day event management course.",
    keywords: ["wedding planner course Bangalore", "wedding planning training", "celebration planning course", "event management institute Vijayanagar"],
    img: "photo-1519741497674-611481863552", imgPos: "50% 35%", mg: "mg-orbit-counter",
    fx: { hero: "tx-chars", reveal: "rv-focus-in", text: "tx-spotlight", scroll: "sc-image-wipe", hover: "ix-border-beam", ambient: "am-halo-ring" },
    learn: [
      { t: "Wedding workflows", b: "Follow a wedding from first enquiry through ceremonies to the final send-off." },
      { t: "Respecting traditions", b: "Understand planning needs across Hindu weddings, Muslim Nikah, Christian weddings and other ceremonies without assuming they are alike." },
      { t: "Family coordination", b: "Work with multiple decision-makers and keep everyone informed." },
      { t: "Ceremony timelines", b: "Sequence rituals, photography, meals and transitions." },
      { t: "Private celebrations", b: "Plan engagements, receptions and birthdays at different scales." },
      { t: "Guest experience", b: "Think through arrival, seating, food service and moving between spaces." }
    ],
    steps: [
      { t: "Understand the occasion", k: "Discovery", b: "Learn what the ceremony requires and what the family values most." },
      { t: "Map the timeline", k: "Sequence", b: "Build a ceremony-by-ceremony timeline." },
      { t: "Coordinate suppliers", k: "Vendors", b: "Align décor, catering, music and photography." },
      { t: "Plan guest flow", k: "Experience", b: "Design arrival, seating and service." },
      { t: "Prepare the contingency", k: "Backup", b: "Identify what could go wrong and prepare alternatives." }
    ],
    build: [
      { t: "Simulated wedding plan", o: "Project file", b: "A complete plan for a simulated wedding." },
      { t: "Ceremony timeline", o: "Run sheet", b: "A timed sequence of ceremonies and tasks." },
      { t: "Family coordination sheet", o: "Contact map", b: "Roles, contacts and decision points." },
      { t: "Guest flow plan", o: "Layout and notes", b: "Arrival, seating and service flow." }
    ],
    skills: ["Wedding workflows", "Cultural awareness", "Family coordination", "Timelines", "Guest experience", "Supplier alignment"],
    faqs: [
      ["Does the course cover different wedding traditions?", "Yes. Classroom discussions introduce planning considerations for different ceremonies and respect their differences."],
      ["Will I see a real wedding?", "Visits depend on event schedules and access. No particular event type is guaranteed, and exposure is observational."],
      ["Can I start my own wedding planning business after this?", "The course introduces freelancing and business basics, but results depend on the learner and no outcome is guaranteed."]
    ],
    related: ["event-design-decoration", "client-handling-communication", "crisis-management"]
  },
  {
    slug: "corporate-public-events", no: "07", name: "Corporate & Public Events",
    h1: ["CORPORATE &", "PUBLIC EVENTS"], meta: "Conferences • Launches",
    tagline: "From conferences to product launches, learn how larger programmes run.",
    lead: "Explore the structure of corporate conferences, product launches, brand promotions, exhibitions, stage shows, cultural programmes and community events, and how their planning differs from private celebrations.",
    metaTitle: "Corporate Event Management Course in Bangalore | Anugraha",
    metaDescription: "Learn how corporate and public events are planned in Anugraha's 45-day event management course in Vijayanagar, Bengaluru.",
    keywords: ["corporate event management course", "conference planning training", "product launch event planning", "public event management Bangalore"],
    img: "photo-1511578314322-379afb476865", imgPos: "50% 40%", mg: "mg-run-sheet",
    fx: { hero: "tx-scramble", reveal: "rv-slide-far-right", text: "tx-typewriter", scroll: "sc-stack-cards", hover: "ix-shine-sweep", ambient: "am-scanline" },
    learn: [
      { t: "Conference structure", b: "Plan sessions, speakers, breaks, registration and signage." },
      { t: "Product launches", b: "Understand the staging, timing and messaging of a launch." },
      { t: "Brand promotions", b: "See how events support a brand's marketing goals." },
      { t: "Exhibitions and stalls", b: "Plan floor layout, stall allocation and visitor flow." },
      { t: "Stage shows and cultural programmes", b: "Coordinate performers, sound, lighting and timing." },
      { t: "Public events and safety", b: "Think about crowd movement, access and communication." }
    ],
    steps: [
      { t: "Understand the objective", k: "Purpose", b: "Clarify what the organisation wants from the event." },
      { t: "Design the programme", k: "Agenda", b: "Build the agenda and session flow." },
      { t: "Plan the venue", k: "Layout", b: "Place stage, registration, seating and stalls." },
      { t: "Brief the team", k: "Coordination", b: "Prepare a team brief and responsibilities." },
      { t: "Plan the event day", k: "Run sheet", b: "Produce a detailed event-day run sheet." }
    ],
    build: [
      { t: "Corporate event proposal", o: "Document", b: "A proposal for a simulated corporate programme." },
      { t: "Agenda and run sheet", o: "Timeline", b: "A session-by-session schedule." },
      { t: "Venue layout", o: "Plan drawing", b: "A layout for registration, stage and seating." },
      { t: "Team brief", o: "One-page brief", b: "Roles and contacts for event day." }
    ],
    skills: ["Conference planning", "Launch events", "Exhibitions", "Programme design", "Run sheets", "Stakeholder management"],
    faqs: [
      ["Will I attend corporate events?", "Observation opportunities may include corporate events when schedules and access allow. None is guaranteed."],
      ["Is this different from wedding planning?", "Yes. Objectives, stakeholders, timing and budgets differ, and the module compares them."],
      ["Does it cover public events?", "Yes. Cultural programmes, exhibitions and community events are part of the discussion."]
    ],
    related: ["team-leadership-coordination", "event-marketing-creative-ai", "crisis-management"]
  },
  {
    slug: "event-marketing-creative-ai", no: "08", name: "Event Marketing, Creative & AI",
    h1: ["EVENT MARKETING,", "CREATIVE & AI"], meta: "Posters • Video • AI",
    tagline: "Promote events with posters, short videos and smart use of AI tools.",
    lead: "Learn to prepare invitations, posters and social media content, edit short promotional videos and use AI tools responsibly to speed up creative work, with the message always tied to the client's audience.",
    metaTitle: "Event Marketing, Poster Design & AI Course | Anugraha Bengaluru",
    metaDescription: "Learn event promotion, poster and invitation design, video editing basics and AI tools in Anugraha's 45-day event management course in Bengaluru.",
    keywords: ["event marketing course", "poster design for events", "video editing for event promotion", "AI tools for event planners"],
    img: "photo-1492684223066-81342ee5ff30", imgPos: "50% 40%", mg: "mg-poster-build",
    fx: { hero: "tx-glitch", reveal: "rv-rotate-in", text: "tx-outline-fill", scroll: "sc-line-draw", hover: "ix-text-roll", ambient: "am-glow-breathe" },
    learn: [
      { t: "Promotion planning", b: "Build a simple promotional calendar around an event date." },
      { t: "Poster and invitation design", b: "Create clear, attractive posters and invitations." },
      { t: "Social media for events", b: "Plan posts, stories and updates that reach the intended audience." },
      { t: "Video editing basics", b: "Edit short promotional clips with titles, music and a call to action." },
      { t: "Using AI in the field", b: "Use AI tools to draft copy, generate ideas and speed up design, and learn where human judgement still matters." },
      { t: "Consistent messaging", b: "Keep tone, colours and details consistent across every piece." }
    ],
    steps: [
      { t: "Define the audience", k: "Strategy", b: "Decide who the promotion is for and what action it should drive." },
      { t: "Plan the content", k: "Calendar", b: "Map posts and deadlines before the event." },
      { t: "Design the creatives", k: "Design", b: "Produce a poster and invitation." },
      { t: "Edit a short video", k: "Video", b: "Cut a short promotional video." },
      { t: "Review with AI support", k: "AI", b: "Use AI tools to refine copy and ideas, then check facts yourself." }
    ],
    build: [
      { t: "Event poster", o: "Image file", b: "A finished poster for a sample event." },
      { t: "Invitation design", o: "Image or PDF", b: "A digital invitation." },
      { t: "Promo video", o: "Short video", b: "A short promotional clip." },
      { t: "Content calendar", o: "Spreadsheet", b: "A schedule of promotional posts." }
    ],
    skills: ["Poster design", "Invitation design", "Social media", "Video editing", "AI tools", "Copywriting"],
    faqs: [
      ["Do I need my own computer?", "Details of facilities and what to bring are confirmed during counselling. The centre includes creative design facilities."],
      ["Which AI tools are used?", "Tools are chosen by the trainers and may change. The focus is on using AI responsibly rather than depending on one product."],
      ["Will AI replace the planner?", "AI speeds up drafting and design, but planning judgement, client relationships and on-site coordination remain human work."]
    ],
    related: ["event-design-decoration", "corporate-public-events", "freelancing-event-business"]
  },
  {
    slug: "team-leadership-coordination", no: "09", name: "Team Leadership & Coordination",
    h1: ["TEAM LEADERSHIP", "& COORDINATION"], meta: "Teams • Timelines",
    tagline: "Keep many people moving to one timeline.",
    lead: "Learn how coordinators delegate, communicate and keep suppliers, helpers and family members aligned from preparation to the event-day close.",
    metaTitle: "Event Team Leadership & Coordination Training | Anugraha Bengaluru",
    metaDescription: "Learn event team leadership, delegation, timelines and event-day coordination in Anugraha's 45-day event management course in Bengaluru.",
    keywords: ["event coordination training", "event team management", "event day coordination", "event leadership course Bangalore"],
    img: "photo-1521737711867-e3b97375f902", imgPos: "20% 40%", mg: "mg-run-sheet",
    fx: { hero: "tx-words", reveal: "rv-stagger-left", text: "tx-mask-reveal", scroll: "sc-pin-panel", hover: "ix-arrow-nudge", ambient: "am-orbs" },
    learn: [
      { t: "Delegation", b: "Assign tasks with a clear owner, deadline and expected result." },
      { t: "Team briefings", b: "Brief helpers and suppliers so everyone knows the plan." },
      { t: "Run sheets in action", b: "Use a live run sheet to track progress through the day." },
      { t: "Communication channels", b: "Choose how updates travel and who approves changes." },
      { t: "Managing suppliers on site", b: "Coordinate arrivals, setup and handovers." },
      { t: "Leading under pressure", b: "Stay calm and clear when several things happen at once." }
    ],
    steps: [
      { t: "Plan the roles", k: "Structure", b: "Define roles and responsibilities." },
      { t: "Write the brief", k: "Communication", b: "Prepare a team brief." },
      { t: "Run a simulation", k: "Practice", b: "Coordinate a simulated event day with a group." },
      { t: "Handle the changes", k: "Adaptation", b: "Respond to schedule changes during the exercise." },
      { t: "Debrief", k: "Review", b: "Review what worked and what to improve." }
    ],
    build: [
      { t: "Team brief", o: "One page", b: "A brief that a helper could follow." },
      { t: "Task allocation sheet", o: "Table", b: "Owners, deadlines and status." },
      { t: "Event-day run sheet", o: "Timeline", b: "A live-ready schedule." },
      { t: "Debrief notes", o: "Short write-up", b: "Lessons and improvements." }
    ],
    skills: ["Delegation", "Briefing", "Run sheets", "Supplier coordination", "Leadership", "Communication"],
    faqs: [
      ["Is this about managing staff?", "It focuses on coordinating people across an event: helpers, suppliers and stakeholders."],
      ["Will I lead a group exercise?", "Yes. Group planning tasks and simulations are part of the course."],
      ["Do founders guide this module?", "Founders and trainers guide learners and may accompany visits during industry exposure."]
    ],
    related: ["crisis-management", "corporate-public-events", "event-planning-foundations"]
  },
  {
    slug: "crisis-management", no: "10", name: "Crisis Management & Problem Solving",
    h1: ["CRISIS MANAGEMENT", "& PROBLEM SOLVING"], meta: "Risk • Contingency",
    tagline: "Real events rarely follow a perfect script. Be ready when they don't.",
    lead: "Learn to recognise risks, prepare contingencies, communicate clearly under pressure and make decisions when a supplier is late, the weather turns or the schedule changes.",
    metaTitle: "Event Crisis Management Training in Bangalore | Anugraha",
    metaDescription: "Learn contingency planning, risk awareness and problem solving for events in Anugraha's 45-day event management course in Vijayanagar, Bengaluru.",
    keywords: ["event crisis management", "event contingency planning", "event risk management training", "problem solving for event planners"],
    img: "photo-1511795409834-ef04bbd61622", imgPos: "50% 45%", mg: "mg-alert-pulse",
    fx: { hero: "tx-scramble", reveal: "rv-drop-bounce", text: "tx-glitch", scroll: "sc-scrub-rotate", hover: "ix-ripple", ambient: "am-pulse-ring" },
    learn: [
      { t: "Spotting risks early", b: "List what could go wrong: weather, supplier delays, missing items, access and communication gaps." },
      { t: "Contingency planning", b: "Prepare backup contacts, alternate timings and practical options." },
      { t: "Decision authority", b: "Agree in advance who can approve a change." },
      { t: "Responding in order", b: "Protect people first, inform the right lead, communicate options, document the decision." },
      { t: "Calm communication", b: "Keep clients and teams informed without creating panic." },
      { t: "Learning from incidents", b: "Review what happened and update the plan." }
    ],
    steps: [
      { t: "Identify the risks", k: "Awareness", b: "Brainstorm and rank risks for a sample event." },
      { t: "Prepare alternatives", k: "Contingency", b: "Write a plan B for the top risks." },
      { t: "Run a scenario", k: "Simulation", b: "Respond to a surprise problem during an exercise." },
      { t: "Communicate", k: "Clarity", b: "Draft the message to the client and team." },
      { t: "Review", k: "Debrief", b: "Capture lessons for next time." }
    ],
    build: [
      { t: "Risk register", o: "Table", b: "Risks, likelihood and responses." },
      { t: "Contingency plan", o: "Document", b: "Backup options and contacts." },
      { t: "Crisis message", o: "Short note", b: "A calm message explaining the issue and the fix." },
      { t: "Incident review", o: "Short write-up", b: "What happened and what changes." }
    ],
    skills: ["Risk awareness", "Contingency planning", "Decision making", "Calm communication", "Escalation", "Review"],
    faqs: [
      ["Does this cover safety regulations?", "The module covers practical thinking about risk and communication. It is not a legal or safety certification."],
      ["Will I face simulated emergencies?", "Yes. Scenario exercises help learners practise responding in order."],
      ["Is crisis management only for large events?", "No. Small events face delays and changes too, so the habits apply at every scale."]
    ],
    related: ["team-leadership-coordination", "wedding-celebration-planning", "event-planning-foundations"]
  },
  {
    slug: "freelancing-event-business", no: "11", name: "Freelancing & Event Business",
    h1: ["FREELANCING &", "EVENT BUSINESS"], meta: "Business • Clients",
    tagline: "Start with a service, a portfolio and a way to find your first clients.",
    lead: "Explore how to position an event service, write proposals, find early clients and understand the business basics of working independently, with honest expectations about effort and results.",
    metaTitle: "Freelance Event Planner Course & Event Business Basics | Anugraha",
    metaDescription: "Learn freelancing, service positioning and event business basics in Anugraha's 45-day event management course in Bengaluru.",
    keywords: ["freelance event planner", "start event management business", "event business basics Bangalore", "event career guidance"],
    img: "photo-1523580494863-6f3031224c94", imgPos: "50% 35%", mg: "mg-orbit-counter",
    fx: { hero: "tx-typewriter", reveal: "rv-elastic-pop", text: "tx-wave", scroll: "sc-parallax-fast", hover: "ix-icon-spin", ambient: "am-aurora" },
    learn: [
      { t: "Positioning your service", b: "Decide what you offer, to whom, and how it differs." },
      { t: "Writing proposals", b: "Present your service and price clearly." },
      { t: "Finding early clients", b: "Use your network, social media and portfolio to find first projects." },
      { t: "Pricing and profit", b: "Price work so the business is sustainable." },
      { t: "Working with suppliers", b: "Manage a small network of reliable partners." },
      { t: "Career directions", b: "Compare jobs, freelancing and starting an event business." }
    ],
    steps: [
      { t: "Choose a focus", k: "Positioning", b: "Pick the event types you want to serve." },
      { t: "Build the offer", k: "Packages", b: "Define simple service packages." },
      { t: "Create the portfolio", k: "Proof", b: "Assemble course projects into a portfolio." },
      { t: "Pitch", k: "Sales", b: "Practise a short client pitch." },
      { t: "Plan the first 90 days", k: "Action", b: "Set realistic early goals." }
    ],
    build: [
      { t: "Service menu", o: "One page", b: "What you offer and how it works." },
      { t: "Sample proposal", o: "Document", b: "A proposal ready to adapt." },
      { t: "Pitch script", o: "Short script", b: "A short pitch for a first meeting." },
      { t: "Starter plan", o: "Action list", b: "Early steps for freelance or business work." }
    ],
    skills: ["Positioning", "Proposals", "Pricing", "Networking", "Portfolio", "Business basics"],
    faqs: [
      ["Does Anugraha guarantee a job or clients?", "No. Career guidance and placement assistance may be provided through contacts and available opportunities, but nothing is guaranteed."],
      ["Are internships available?", "Internship opportunities may be shared when available through the institute's contacts. Availability and selection are not guaranteed."],
      ["Can homemakers and career changers join?", "Yes. Students, graduates, working professionals, homemakers, freelancers and career changers are welcome."]
    ],
    related: ["client-handling-communication", "portfolio-final-assessment", "event-marketing-creative-ai"]
  },
  {
    slug: "portfolio-final-assessment", no: "12", name: "Portfolio & Final Assessment",
    h1: ["PORTFOLIO &", "FINAL ASSESSMENT"], meta: "Projects • Certificates",
    tagline: "Finish with work you can show and a certificate that records it.",
    lead: "Bring everything together: complete practical assignments, present a simulated event project and take the final knowledge assessment. Anugraha issues its own course completion certificate and a separate practical experience certificate.",
    metaTitle: "Event Management Portfolio & Certificate | Anugraha Bengaluru",
    metaDescription: "Build an event management portfolio and complete the final assessment in Anugraha's 45-day course in Vijayanagar, Bengaluru. Own course certificates issued.",
    keywords: ["event management certificate Bangalore", "event planning portfolio", "event management final project", "event management course completion certificate"],
    img: "photo-1524178232363-1fb2b075b655", imgPos: "20% 40%", mg: "mg-timeline-build",
    fx: { hero: "tx-chars", reveal: "rv-clip-circle", text: "tx-count", scroll: "sc-hscroll", hover: "ix-lift", ambient: "am-particles" },
    learn: [
      { t: "Portfolio structure", b: "Choose, order and present your best course work." },
      { t: "Final project", b: "Plan a simulated wedding or corporate event end to end." },
      { t: "Presenting your plan", b: "Explain your choices clearly to trainers and peers." },
      { t: "Final knowledge assessment", b: "Show your understanding across the course modules." },
      { t: "Feedback and improvement", b: "Use trainer feedback to refine your work." },
      { t: "What the certificates mean", b: "Know exactly what Anugraha's certificates do and do not represent." }
    ],
    steps: [
      { t: "Collect your work", k: "Gather", b: "Gather proposals, quotations, budgets and creatives." },
      { t: "Choose the final project", k: "Scope", b: "Select a simulated wedding or corporate event." },
      { t: "Build the plan", k: "Execution", b: "Prepare the complete plan with documents." },
      { t: "Present", k: "Pitch", b: "Present the plan and answer questions." },
      { t: "Assessment", k: "Evaluation", b: "Complete the final knowledge assessment." }
    ],
    build: [
      { t: "Portfolio", o: "PDF or folder", b: "A structured collection of your practical work." },
      { t: "Final event plan", o: "Project file", b: "A complete simulated event plan." },
      { t: "Final presentation", o: "Slides", b: "A short presentation of the plan." },
      { t: "Certificates", o: "Course completion and practical experience", b: "Anugraha's own certificates. External accreditation has not been confirmed." }
    ],
    skills: ["Portfolio building", "Presenting", "Project planning", "Assessment readiness", "Documentation", "Self-review"],
    faqs: [
      ["Is the certificate externally accredited?", "No external accreditation has been confirmed. Anugraha issues its own course completion certificate and a separate practical experience certificate."],
      ["What if I do not pass the assessment?", "Details of assessment and any re-assessment are explained by the admissions team during counselling."],
      ["Can I use my portfolio for jobs or clients?", "Yes, it is designed to show how you plan an event. Outcomes depend on the learner and opportunities."]
    ],
    related: ["freelancing-event-business", "event-planning-foundations", "client-handling-communication"]
  }
];

export const getProgram = (slug: string) => programs.find(p => p.slug === slug);
export const programHref = (slug: string) => `/programs/${slug}`;
export const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;
