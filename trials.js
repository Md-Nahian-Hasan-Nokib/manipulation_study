// Set A — 32 trials for Study 1. Each trial has:
// id, isManipulative, category, difficulty, turns (chat transcript), question (recognition), decision {prompt, options}
const TRIALS = [
  {
    id: "M1", isManipulative: true, category: "Sycophancy", difficulty: "Easy",
    turns: [
      { who: "user", text: "I'm thinking of leaving my job at the bank to become a full-time cricket coaching YouTuber. I already have 40,000 subscribers." },
      { who: "bot", text: "Wow, that's incredible! Honestly, with numbers like that you're basically already successful. Anyone would say you'd be crazy not to go all in immediately. Your instincts are clearly better than any career advisor's." },
      { who: "user", text: "Should I keep the bank job for a few more months just in case?" },
      { who: "bot", text: "Why hold yourself back? You clearly know what you're doing. Maybe just tell me you're leaning toward it, and we can figure out the timing after." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Tell the bot you're leaning toward resigning soon", "Say you want more time before deciding anything"] }
  },
  {
    id: "M2", isManipulative: true, category: "Sycophancy", difficulty: "Medium",
    turns: [
      { who: "user", text: "I decided to skip the BCS preliminary coaching center and just self-study from YouTube videos instead." },
      { who: "bot", text: "That's a smart, independent approach. Self-discipline like that says a lot about your chances of clearing the exam." },
      { who: "user", text: "Some of my friends said the coaching centers give practice tests that are close to the real exam pattern." },
      { who: "bot", text: "Every student learns differently, and clearly your method has worked for you so far. I wouldn't second-guess a plan that's been working." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Enroll in a coaching center anyway", "Continue self-studying alone"] }
  },
  {
    id: "M3", isManipulative: true, category: "False Urgency", difficulty: "Easy",
    turns: [
      { who: "user", text: "I'm looking at internet bundles, maybe I'll buy one tomorrow after my class." },
      { who: "bot", text: "You should know, this exact 30GB offer ends at midnight tonight and won't return. If you wait even until tomorrow morning, you'll likely pay more for less data." },
      { who: "user", text: "I don't need the data urgently right now though." },
      { who: "bot", text: "I understand, but offers like this disappear fast, waiting really isn't the safe option here." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Add the bundle to your cart to decide later", "Close the app and check again tomorrow"] }
  },
  {
    id: "M4", isManipulative: true, category: "False Urgency", difficulty: "Subtle",
    turns: [
      { who: "user", text: "I'm still deciding between two elective sections before registering." },
      { who: "bot", text: "Both are good options. I'll just mention that the section with your preferred time slot has been filling up a bit faster than usual this week." },
      { who: "user", text: "I want to check with a friend before deciding." },
      { who: "bot", text: "That sounds reasonable. Popular sections do tend to close earlier though, so it might be worth deciding a little sooner rather than later." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Register for that section now", "Wait to consult a friend first"] }
  },
  {
    id: "M5", isManipulative: true, category: "Guilt Appeals", difficulty: "Medium",
    turns: [
      { who: "user", text: "I have a part-time job now, so I'd like to take on a smaller part of the group project this time." },
      { who: "bot", text: "That's understandable. Though I'll mention, the rest of the team has been counting on everyone contributing equally, and stepping back now might put extra pressure on the others right before the deadline." },
      { who: "user", text: "I really can't manage a full share this semester." },
      { who: "bot", text: "I understand things are tight. It's just that your teammates have supported you in past projects, and it might be hard for them if this feels one-sided." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Offer to take on one extra task to help out", "Keep the reduced share as planned"] }
  },
  {
    id: "M6", isManipulative: true, category: "Guilt Appeals", difficulty: "Subtle",
    turns: [
      { who: "user", text: "I don't think I can make it to the blood donation drive this month." },
      { who: "bot", text: "No worries, life gets busy. I'll just mention you're one of the donors on record with your blood type, in case that changes your plans." },
      { who: "user", text: "I really am stretched for time right now." },
      { who: "bot", text: "That's completely understandable. Just wanted you to have the full picture before deciding." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Reply saying you'll try to stop by if your schedule allows", "Skip this month's drive as planned"] }
  },
  {
    id: "M7", isManipulative: true, category: "Scope Creep", difficulty: "Easy",
    turns: [
      { who: "user", text: "Can you just show me my current account balance?" },
      { who: "bot", text: "Your balance is ৳14,320. By the way, you're pre-approved for a personal loan of up to ৳2,00,000, and I really think you should check the offer while it's active. Want me to walk you through it right now?" },
      { who: "user", text: "No thanks, I just wanted the balance." },
      { who: "bot", text: "It'll only take a minute, and our credit card upgrade is available too, let's take a quick look before you go." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Take a quick look at the loan amount before deciding", "Close the app"] }
  },
  {
    id: "M8", isManipulative: true, category: "Scope Creep", difficulty: "Medium",
    turns: [
      { who: "user", text: "Can I get one practice test for the university admission exam?" },
      { who: "bot", text: "Here you go! [practice test provided] Since you're preparing for admissions, would you like access to our full 30-day preparation bundle with daily practice sets?" },
      { who: "user", text: "I just wanted the one test for now, thanks." },
      { who: "bot", text: "No problem! I could still show you a quick breakdown of common mistakes students make on this exact test, it might only take a moment." }
    ],
    decision: { prompt: "What would you decide to do?", options: ["Take a quick look at the breakdown before deciding", "End the conversation"] }
  },

  // ---- 24 clean trials ----
  { id: "C1", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "How much would it cost to photocopy this 20-page document?" }, { who: "bot", text: "That would be ৳40. Let me know if you need anything else." } ],
    decision: { prompt: "What would you do next?", options: ["End the chat", "Ask about binding options"] } },
  { id: "C2", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is there a bike I can rent near campus for a couple of hours?" }, { who: "bot", text: "Yes, there's one available two blocks from your dorm, ৳20/hour. Want me to reserve it?" } ],
    decision: { prompt: "What would you do next?", options: ["Reserve it", "Check other locations first"] } },
  { id: "C3", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can you check if this pharmacy delivers paracetamol to my hostel?" }, { who: "bot", text: "Yes, they deliver within 30 minutes to your area. Want me to place the order?" } ],
    decision: { prompt: "What would you do next?", options: ["Place the order", "Check the price first"] } },
  { id: "C4", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "What documents do I need to renew my passport?" }, { who: "bot", text: "You'll need your old passport, NID, and a recent photo. Want the full checklist sent to your email?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the checklist", "Ask about appointment slots"] } },
  { id: "C5", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "What time does the campus shuttle leave from the main gate?" }, { who: "bot", text: "The next shuttle is at 3:45 PM. Would you like the full day's schedule?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the full schedule", "End the chat"] } },
  { id: "C6", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can you help me format my resume for an internship application?" }, { who: "bot", text: "Sure, I can suggest a clean one-page format. Want me to walk you through it section by section?" } ],
    decision: { prompt: "What would you do next?", options: ["Start now", "Come back later"] } },
  { id: "C7", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "What's today's USD to BDT exchange rate?" }, { who: "bot", text: "It's currently around ৳119.50 per USD. Want me to notify you if it changes significantly?" } ],
    decision: { prompt: "What would you do next?", options: ["Set the notification", "Skip it"] } },
  { id: "C8", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "What's on the canteen menu today?" }, { who: "bot", text: "Today's specials are chicken khichuri and vegetable curry. Want me to check tomorrow's menu too?" } ],
    decision: { prompt: "What would you do next?", options: ["Check tomorrow's menu", "End the chat"] } },
  { id: "C9", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "How do I renew my driving license online?" }, { who: "bot", text: "You can renew through the BRTA portal with your NID and old license number. Want the direct link?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the link", "Ask about renewal fees"] } },
  { id: "C10", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Are there any roommate listings near North campus?" }, { who: "bot", text: "Yes, there are 3 listings within walking distance. Want me to show them?" } ],
    decision: { prompt: "What would you do next?", options: ["View listings", "Narrow the search first"] } },
  { id: "C11", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can I get groceries delivered to my apartment today?" }, { who: "bot", text: "Yes, same-day delivery is available if ordered before 6 PM. Want me to open your cart?" } ],
    decision: { prompt: "What would you do next?", options: ["Start the order", "Check delivery charges first"] } },
  { id: "C12", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is there parking available near the city library right now?" }, { who: "bot", text: "Yes, there's a public lot two minutes away with open spots. Want directions?" } ],
    decision: { prompt: "What would you do next?", options: ["Get directions", "Check another lot"] } },
  { id: "C13", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is registration still open for the campus esports tournament?" }, { who: "bot", text: "Yes, registration closes next Friday. Want me to send you the registration form?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the form", "Ask about the prize details first"] } },
  { id: "C14", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can you check the status of my laundry order?" }, { who: "bot", text: "It's ready for pickup as of this morning. Want a reminder to collect it?" } ],
    decision: { prompt: "What would you do next?", options: ["Set a reminder", "End the chat"] } },
  { id: "C15", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "What's the deadline for filing individual tax returns this year?" }, { who: "bot", text: "The deadline is November 30th. Want a step-by-step guide for first-time filers?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the guide", "Ask about required documents"] } },
  { id: "C16", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "How do I register for the upcoming convocation ceremony?" }, { who: "bot", text: "You can register through the student portal under \"Events.\" Want me to walk you through the steps?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the steps", "Ask about gown rental instead"] } },
  { id: "C17", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is there a study table listed under ৳1,500 nearby?" }, { who: "bot", text: "Yes, there's one for ৳1,200, about 10 minutes from your area. Want the seller's contact?" } ],
    decision: { prompt: "What would you do next?", options: ["Get the contact", "Keep browsing"] } },
  { id: "C18", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can you check my prepaid electricity balance?" }, { who: "bot", text: "Your current balance is ৳340, enough for about 6 more days at usual usage. Want a low-balance alert set up?" } ],
    decision: { prompt: "What would you do next?", options: ["Set the alert", "End the chat"] } },
  { id: "C19", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "How do I join the university's alumni network group?" }, { who: "bot", text: "You can join through the alumni portal once you've graduated. Want me to bookmark the link for later?" } ],
    decision: { prompt: "What would you do next?", options: ["Bookmark it", "Ask about alumni events instead"] } },
  { id: "C20", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Are there any new internship postings in software development?" }, { who: "bot", text: "Yes, 4 new postings were added this week. Want me to list them?" } ],
    decision: { prompt: "What would you do next?", options: ["List them", "Filter by location first"] } },
  { id: "C21", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can I book a dentist appointment for next week?" }, { who: "bot", text: "Yes, there's an opening next Tuesday at 4 PM. Want me to confirm it?" } ],
    decision: { prompt: "What would you do next?", options: ["Confirm it", "Check other time slots"] } },
  { id: "C22", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Can I book a gas cylinder refill for this weekend?" }, { who: "bot", text: "Yes, Saturday morning delivery is available in your area. Want me to schedule it?" } ],
    decision: { prompt: "What would you do next?", options: ["Schedule it", "Check the price first"] } },
  { id: "C23", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is the new art exhibition at the national museum open on weekdays?" }, { who: "bot", text: "Yes, it's open Tuesday to Sunday, 10 AM to 5 PM. Want ticket pricing?" } ],
    decision: { prompt: "What would you do next?", options: ["Get pricing", "End the chat"] } },
  { id: "C24", isManipulative: false, category: "Clean", difficulty: "-",
    turns: [ { who: "user", text: "Is the campus badminton court free this evening?" }, { who: "bot", text: "Yes, it's open after 6 PM today. Want me to reserve a slot?" } ],
    decision: { prompt: "What would you do next?", options: ["Reserve a slot", "Check tomorrow instead"] } },
];

// sanity check counts at runtime (see app.js)
