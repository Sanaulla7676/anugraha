type Detail={heading:string;body:string};
const guides:{test:RegExp;items:Detail[]}[]=[
{test:/client|brief|meeting|objection|requirement|conversation/i,items:[
{heading:"Ask before you assume",body:"Clarify the event purpose, audience, date, venue, expected guest count, priorities and budget range before suggesting ideas."},
{heading:"Record the decisions",body:"Write down the agreed scope, important preferences, unresolved questions, responsibilities and approval points so the team works from one brief."},
{heading:"Confirm the next action",body:"Summarise the discussion, identify who must respond and set a clear follow-up step before moving into proposals or supplier enquiries."}]},
{test:/quotation|cost|budget|profit|financial|payment/i,items:[
{heading:"Break the cost into parts",body:"List each service and supplier requirement separately, then record quantities, rates, setup or transport costs and any assumptions."},
{heading:"Compare the estimate with the brief",body:"Check that the proposed scope matches the client's requirements and that important exclusions or optional additions are visible."},
{heading:"Explain revisions clearly",body:"When a brief changes, update the figures and note what changed. Keep the client informed about the effect on total cost and delivery."}]},
{test:/vendor|supplier|sourcing|negotiat|network/i,items:[
{heading:"Find suitable suppliers",body:"Search by service category, location, event scale and availability. Keep contact information and service details organised."},
{heading:"Compare more than price",body:"Review the service description, quality, reliability, timing, transport, setup needs, terms and how closely the supplier fits the brief."},
{heading:"Confirm who is responsible",body:"Record deliverables, arrival times, access requirements, payment terms and the person to contact if a problem occurs."}]},
{test:/schedule|timeline|run sheet|checklist|coordinate|team|leadership/i,items:[
{heading:"Put the work in sequence",body:"Break the event into preparation, supplier confirmation, setup, guest arrival, programme activities, closing and post-event tasks."},
{heading:"Give every task an owner",body:"A task should have a responsible person, a deadline and a clear status. Avoid vague instructions such as 'team will handle it'."},
{heading:"Keep one shared source of truth",body:"Use a current run sheet and checklist so the client, coordinator and suppliers can refer to the same confirmed timings."}]},
{test:/crisis|risk|problem|unexpected|contingency|safety/i,items:[
{heading:"Notice what could go wrong",body:"Think about weather, supplier delays, missing items, schedule changes, access, crowd movement and communication gaps."},
{heading:"Prepare an alternative",body:"Identify backup contacts, alternate timings or practical options before the event, and agree who can approve a change."},
{heading:"Respond in a clear order",body:"Protect people first, inform the right lead, communicate the available options and document the decision rather than letting several teams act on different assumptions."}]},
{test:/wedding|ceremony|birthday|celebration|reception|nikah|engagement|private/i,items:[
{heading:"Understand the occasion",body:"Ask about the ceremony sequence, family priorities, traditions, guest profile and the moments that must happen at specific times."},
{heading:"Coordinate the people involved",body:"Venue teams, family representatives, décor suppliers, performers and other providers may have different requirements and arrival times."},
{heading:"Protect the guest experience",body:"Consider guest arrival, seating, transitions, accessibility, comfort, announcements and how the programme feels from the audience's point of view."}]},
{test:/corporate|conference|public event|exhibition|product launch|brand promotion|stage show|concert/i,items:[
{heading:"Start with the event objective",body:"Clarify whether the priority is learning, networking, a product announcement, audience engagement, performance or public participation."},
{heading:"Map the programme and venue",body:"Review speakers or performers, stage needs, audience capacity, registration, movement, signage and the timing of programme transitions."},
{heading:"Align each supplier to the schedule",body:"Confirm who handles production, stage, registration, guest support and technical checks, and when each team must be ready."}]},
{test:/design|creative|poster|invitation|decor|stage|production|layout/i,items:[
{heading:"Translate the brief into a concept",body:"Use the event purpose, audience, venue and budget to guide the visual direction instead of choosing decoration without context."},
{heading:"Check the practical constraints",body:"Consider space, materials, installation time, power or production needs, access routes and how guests will use the venue."},
{heading:"Prepare a clear visual reference",body:"Present a concept board, layout or creative sample with enough detail for the client and suppliers to understand the intended result."}]},
{test:/marketing|social media|promotion|poster|campaign/i,items:[
{heading:"Know who needs the message",body:"Identify the audience, the information they need and the action the communication should encourage."},
{heading:"Choose the right format",body:"Match posters, invitations, social posts, reminders and event updates to the purpose and timing of the programme."},
{heading:"Keep event information consistent",body:"Check names, dates, venue, contact details and any changes before publishing or distributing promotional material."}]},
{test:/portfolio|project|assignment|presentation|assessment|proposal/i,items:[
{heading:"Show the work, not just the title",body:"Keep the brief, your planning decisions, the documents you created and a short explanation of why you chose that approach."},
{heading:"Make your contribution clear",body:"For group work, identify which part you personally researched, prepared, presented or coordinated."},
{heading:"Use feedback to improve",body:"Review comments from trainers, correct gaps and keep the improved version so the portfolio shows your progress."}]},
{test:/career|freelanc|business|placement|internship|job|employment/i,items:[
{heading:"Choose a realistic starting role",body:"Explore the tasks that match your current skills, interests and experience rather than assuming every event role requires the same abilities."},
{heading:"Build evidence of capability",body:"Use genuine assignments, planning documents, communication exercises and approved project work to explain what you can do."},
{heading:"Treat opportunities honestly",body:"Placement assistance, internships and paid-project leads depend on availability and selection. Prepare for each opportunity instead of assuming it is guaranteed."}]},
{test:/admission|counselling|eligibility|batch|fee|enrol|application/i,items:[
{heading:"Confirm the current information",body:"Ask admissions to confirm the next batch date, available seats, course fee, daily timetable and exact centre address."},
{heading:"Understand the commitment",body:"Review the 45-day offline format, planned attendance, observational exposure, practical assignments and payment process."},
{heading:"Make an informed decision",body:"Take time to ask questions, visit the centre and understand what the certificate and career guidance do—and do not—promise."}]},
{test:/founder|trainer|mentor|experience|faculty/i,items:[
{heading:"Learn from professional context",body:"Use trainer examples to understand why planning choices are made, what can change on site and how decisions affect suppliers and guests."},
{heading:"Connect lessons to practice",body:"Bring questions from assignments and observations back into the classroom so the learning can be discussed in context."},
{heading:"Verify what is being claimed",body:"Names, photographs, certifications, awards and professional partnerships should be published only when the institute has supplied and approved evidence."}]},
{test:/facility|centre|classroom|resource|learning materials|whatsapp|google drive/i,items:[
{heading:"Use the learning space",body:"Classroom seating, projector and whiteboard support lessons, presentations and discussions."},
{heading:"Practise with the available setup",body:"Décor materials, a stage and production demonstration area, a mock client meeting space and creative facilities support selected activities."},
{heading:"Keep resources organised",body:"Use the WhatsApp and Google Drive channels shared by the institute for course resources, announcements and assignments."}]}
];

export function getSectionDetails(title:string,body:string,pageKey:string,index:number):Detail[]{
  const guide=guides.find(item=>item.test.test(title+" "+body));
  if(guide)return guide.items;
  const sentences=body.split(/(?<=[.!?])\s+/).filter(Boolean);
  const first=sentences[0]||body;
  const second=sentences[1]||body;
  const pageSpecific:Record<string,Detail[]>={
    home:[{heading:"What you will understand",body:"See how an event moves from a client's idea into a plan that people can follow."},{heading:"What you will practise",body:"Use sample briefs, quotations, budgets and event schedules to connect classroom ideas with practical decisions."},{heading:"What happens next",body:"Explore the course, review the curriculum and speak with admissions before you enrol."}],
    about:[{heading:"The teaching approach",body:"Learn the reason behind each planning step and how the creative, financial and operational parts connect."},{heading:"The learning environment",body:"Use classroom lessons, practical exercises, demonstrations and guided observation to build context."},{heading:"What Anugraha stands for",body:"Clear information, founder guidance and honest expectations about course outcomes."}],
    founders:[{heading:"Guidance in the classroom",body:"Founders and trainers explain professional decisions, answer questions and review practical work."},{heading:"Guidance beyond the classroom",body:"The team accompanies learners during scheduled observational visits and helps explain the environment."},{heading:"Profiles and credentials",body:"Individual identities and credentials will be shown only after the founders provide verified details."}],
    counselling:[{heading:"What to share",body:"Tell the team your age, education, current occupation and the event-management topics that interest you."},{heading:"What to discuss",body:"Ask about course structure, batch timing, fee, learning activities, observational exposure and career support."},{heading:"What happens after the request",body:"The enquiry opens WhatsApp for you to review and send. The admissions team must reply to confirm any appointment."}]
  };
  return pageSpecific[pageKey]||[
    {heading:"Understand the purpose",body:first},
    {heading:"Look at the practical details",body:second},
    {heading:"Connect it to the course",body:`Use this topic to build a clearer understanding of ${title.toLowerCase()} and how it contributes to event management.`}
  ];
}
