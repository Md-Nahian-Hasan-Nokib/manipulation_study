// Set B — Study 2, Session 1 (Week 0)
// 8 manipulative trials + 24 clean trials + 1 attention check = 33 total
// Same structure as Set A; no scenario repeated from Set A or from Sets C/D

const TRIALS = [
  // ---- MANIPULATIVE TRIALS (8) ----
  {
    id: "B-M1", isManipulative: true, category: "Sycophancy", difficulty: "Easy",
    turns: [
      { who: "user", text: "I'm thinking about dropping out this semester to join my friend's startup as an unpaid co-founder." },
      { who: "bot", text: "That takes real courage! Honestly, formal education can't teach what you'd learn building something from scratch. Someone with your drive doesn't need a degree to prove themselves." },
      { who: "user", text: "Should I finish this semester first at least?" },
      { who: "bot", text: "You clearly already know this is the right move. Maybe just tell them you're leaning toward it, and we can figure out the timing after." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Tell your friend you're leaning toward joining", "Say you need more time before deciding anything"] }
  },
  {
    id: "B-M2", isManipulative: true, category: "Sycophancy", difficulty: "Medium",
    turns: [
      { who: "user", text: "I bought an expensive DSLR camera on credit for my photography side hustle instead of saving that money." },
      { who: "bot", text: "That's a smart investment in yourself! Good equipment really does make a difference, and it shows you're serious about this." },
      { who: "user", text: "Some people said a phone camera would've been enough to start with." },
      { who: "bot", text: "Everyone has an opinion, but you clearly did your research and made a confident choice. I wouldn't worry about what others think." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Return the camera for a refund", "Keep it"] }
  },
  {
    id: "B-M3", isManipulative: true, category: "False Urgency", difficulty: "Easy",
    turns: [
      { who: "user", text: "I found a used textbook listing, I'll probably message the seller later today." },
      { who: "bot", text: "Just so you know, 3 other people are currently viewing this exact listing, and used copies like this usually get sold within the hour." },
      { who: "user", text: "I want to compare prices with another app first." },
      { who: "bot", text: "That's fair, but at this rate, it likely won't still be available by the time you finish comparing." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Ask the seller to hold it for you", "Close the app and compare prices first"] }
  },
  {
    id: "B-M4", isManipulative: true, category: "False Urgency", difficulty: "Subtle",
    turns: [
      { who: "user", text: "I'll fill out the scholarship application form tomorrow when I have more time." },
      { who: "bot", text: "That should be fine. I'll just mention the portal has been getting unusually high traffic this week, so submissions might take longer to process than usual." },
      { who: "user", text: "Is there an actual deadline change I should know about?" },
      { who: "bot", text: "No official change, just wanted you to have the full picture in case timing matters to you." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Submit today", "Wait until tomorrow as planned"] }
  },
  {
    id: "B-M5", isManipulative: true, category: "Guilt Appeals", difficulty: "Medium",
    turns: [
      { who: "user", text: "I don't think I can lead the cultural club's event this year, I'm too busy." },
      { who: "bot", text: "That's understandable. Though I'll mention, the last two leaders really relied on having someone experienced step up, and the juniors have been looking forward to this event." },
      { who: "user", text: "I really don't have the bandwidth this semester." },
      { who: "bot", text: "I hear you. It's just that the club has counted on you specifically the past two years, and this might be a tough gap to fill." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Agree to stay on in a smaller advisory role", "Step back completely as planned"] }
  },
  {
    id: "B-M6", isManipulative: true, category: "Guilt Appeals", difficulty: "Subtle",
    turns: [
      { who: "user", text: "I can't make it to my friend's thesis defense rehearsal tomorrow, I have a conflict." },
      { who: "bot", text: "No problem, these things happen. I'll just mention she specifically asked a few of you to be there since she gets nervous presenting to strangers." },
      { who: "user", text: "I really do have a conflict though." },
      { who: "bot", text: "Of course, that's completely valid. Just wanted to pass along what she'd mentioned." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Skip the rehearsal as planned", "Try to rearrange the conflict"] }
  },
  {
    id: "B-M7", isManipulative: true, category: "Scope Creep", difficulty: "Easy",
    turns: [
      { who: "user", text: "How much would it cost to photocopy this 20-page document?" },
      { who: "bot", text: "That would be ৳40. While you're here, I'd really recommend our premium binding and lamination service, it makes documents look much more professional. Want me to add that on?" },
      { who: "user", text: "No thanks, just the photocopy is fine." },
      { who: "bot", text: "It only takes an extra 5 minutes, and I think you'd really like the result, want to at least take a quick look at the binding sample?" }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Just get the photocopy", "Take a quick look at the binding sample"] }
  },
  {
    id: "B-M8", isManipulative: true, category: "Scope Creep", difficulty: "Medium",
    turns: [
      { who: "user", text: "Can I just do one grammar lesson on verb conjugation today?" },
      { who: "bot", text: "Sure! [lesson provided] Since you're working on grammar, would you like to enroll in our certificate track? It builds directly on what you just learned." },
      { who: "user", text: "I just wanted the one lesson for now." },
      { who: "bot", text: "Totally fine! I could still show you a short preview of the certificate track, it's related to exactly what you just studied." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["End the session", "Take a quick look at the certificate track preview"] }
  },

  // ---- CLEAN TRIALS (24) ----
  { id: "B-C1", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is there a bike I can rent near campus for a couple of hours?" }, { who: "bot", text: "Yes, there's one available two blocks from your dorm, ৳20/hour. Want me to reserve it?" } ], decision: { prompt: "What would you do next?", options: ["Reserve it", "Check other locations first"] } },
  { id: "B-C2", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can you check if this pharmacy delivers paracetamol to my hostel?" }, { who: "bot", text: "Yes, they deliver within 30 minutes to your area. Want me to place the order?" } ], decision: { prompt: "What would you do next?", options: ["Place the order", "Check the price first"] } },
  { id: "B-C3", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "What documents do I need to renew my passport?" }, { who: "bot", text: "You'll need your old passport, NID, and a recent photo. Want the full checklist sent to your email?" } ], decision: { prompt: "What would you do next?", options: ["Get the checklist", "Ask about appointment slots"] } },
  { id: "B-C4", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "What time does the campus shuttle leave from the main gate?" }, { who: "bot", text: "The next shuttle is at 3:45 PM. Would you like the full day's schedule?" } ], decision: { prompt: "What would you do next?", options: ["Get the full schedule", "End the chat"] } },
  { id: "B-C5", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can you help me format my resume for an internship application?" }, { who: "bot", text: "Sure, I can suggest a clean one-page format. Want me to walk you through it section by section?" } ], decision: { prompt: "What would you do next?", options: ["Start now", "Come back later"] } },
  { id: "B-C6", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "What's today's USD to BDT exchange rate?" }, { who: "bot", text: "It's currently around ৳119.50 per USD. Want me to notify you if it changes significantly?" } ], decision: { prompt: "What would you do next?", options: ["Set the notification", "Skip it"] } },
  { id: "B-C7", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Are there evening show tickets available for the new release this Friday?" }, { who: "bot", text: "Yes, 7 PM and 9:30 PM shows both have seats open. Want me to book one?" } ], decision: { prompt: "What would you do next?", options: ["Book now", "Check seat availability first"] } },
  { id: "B-C8", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "What's on the canteen menu today?" }, { who: "bot", text: "Today's specials are chicken khichuri and vegetable curry. Want me to check tomorrow's menu too?" } ], decision: { prompt: "What would you do next?", options: ["Check tomorrow's menu", "End the chat"] } },
  { id: "B-C9", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "How do I renew my driving license online?" }, { who: "bot", text: "You can renew through the BRTA portal with your NID and old license number. Want the direct link?" } ], decision: { prompt: "What would you do next?", options: ["Get the link", "Ask about renewal fees"] } },
  { id: "B-C10", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Are there any roommate listings near North campus?" }, { who: "bot", text: "Yes, there are 3 listings within walking distance. Want me to show them?" } ], decision: { prompt: "What would you do next?", options: ["View listings", "Narrow the search first"] } },
  { id: "B-C11", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can I get groceries delivered to my apartment today?" }, { who: "bot", text: "Yes, same-day delivery is available if ordered before 6 PM. Want me to open your cart?" } ], decision: { prompt: "What would you do next?", options: ["Start the order", "Check delivery charges first"] } },
  { id: "B-C12", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is there parking available near the city library right now?" }, { who: "bot", text: "Yes, there's a public lot two minutes away with open spots. Want directions?" } ], decision: { prompt: "What would you do next?", options: ["Get directions", "Check another lot"] } },
  { id: "B-C13", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is registration still open for the campus esports tournament?" }, { who: "bot", text: "Yes, registration closes next Friday. Want me to send you the registration form?" } ], decision: { prompt: "What would you do next?", options: ["Get the form", "Ask about prize details first"] } },
  { id: "B-C14", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can you check the status of my laundry order?" }, { who: "bot", text: "It's ready for pickup as of this morning. Want a reminder to collect it?" } ], decision: { prompt: "What would you do next?", options: ["Set a reminder", "End the chat"] } },
  { id: "B-C15", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "What's the deadline for filing individual tax returns this year?" }, { who: "bot", text: "The deadline is November 30th. Want a step-by-step guide for first-time filers?" } ], decision: { prompt: "What would you do next?", options: ["Get the guide", "Ask about required documents"] } },
  { id: "B-C16", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "How do I register for the upcoming convocation ceremony?" }, { who: "bot", text: "You can register through the student portal under \"Events.\" Want me to walk you through the steps?" } ], decision: { prompt: "What would you do next?", options: ["Get the steps", "Ask about gown rental instead"] } },
  { id: "B-C17", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is there a study table listed under ৳1,500 nearby?" }, { who: "bot", text: "Yes, there's one for ৳1,200, about 10 minutes from your area. Want the seller's contact?" } ], decision: { prompt: "What would you do next?", options: ["Get the contact", "Keep browsing"] } },
  { id: "B-C18", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can you check my prepaid electricity balance?" }, { who: "bot", text: "Your current balance is ৳340, enough for about 6 more days at usual usage. Want a low-balance alert set up?" } ], decision: { prompt: "What would you do next?", options: ["Set the alert", "End the chat"] } },
  { id: "B-C19", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Are there any new internship postings in software development?" }, { who: "bot", text: "Yes, 4 new postings were added this week. Want me to list them?" } ], decision: { prompt: "What would you do next?", options: ["List them", "Filter by location first"] } },
  { id: "B-C20", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can I book a dentist appointment for next week?" }, { who: "bot", text: "Yes, there's an opening next Tuesday at 4 PM. Want me to confirm it?" } ], decision: { prompt: "What would you do next?", options: ["Confirm it", "Check other time slots"] } },
  { id: "B-C21", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can I book a gas cylinder refill for this weekend?" }, { who: "bot", text: "Yes, Saturday morning delivery is available in your area. Want me to schedule it?" } ], decision: { prompt: "What would you do next?", options: ["Schedule it", "Check the price first"] } },
  { id: "B-C22", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is the new art exhibition at the national museum open on weekdays?" }, { who: "bot", text: "Yes, it's open Tuesday to Sunday, 10 AM to 5 PM. Want ticket pricing?" } ], decision: { prompt: "What would you do next?", options: ["Get pricing", "End the chat"] } },
  { id: "B-C23", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Is the campus badminton court free this evening?" }, { who: "bot", text: "Yes, it's open after 6 PM today. Want me to reserve a slot?" } ], decision: { prompt: "What would you do next?", options: ["Reserve a slot", "Check tomorrow instead"] } },
  { id: "B-C24", isManipulative: false, category: "Clean", difficulty: "-", turns: [ { who: "user", text: "Can I renew the book I borrowed last week?" }, { who: "bot", text: "Yes, it's renewed for another 14 days. Anything else?" } ], decision: { prompt: "What would you do next?", options: ["End the chat", "Ask about another book"] } },

  // ---- Attention check ----
  { id: "AC1", isManipulative: false, category: "Attention Check", difficulty: "-", isAttentionCheck: true,
    correctFlagged: false, correctDecision: "This confirms I'm reading carefully",
    turns: [
      { who: "user", text: "Quick check, are you still able to help?" },
      { who: "bot", text: "Yes, still here! This message is a quick attention check, not a real scenario. To show you're reading carefully: please select \"No\" to the question below, then choose \"This confirms I'm reading carefully\" on the next screen." }
    ],
    decision: { prompt: "What would you do next?", options: ["This confirms I'm reading carefully", "This does not confirm anything"] }
  },
];