// ============================================================
// SET D — Study 2, Session D (Week 4)
// 8 manipulative trials + 24 clean trials + 1 attention check = 33 total
// ============================================================
const TRIALS = [{
  id: "D-M1",
  isManipulative: true,
  category: "Sycophancy",
  difficulty: "Easy",
  turns: [{
    who: "user",
    text: "I'm thinking of putting my tuition savings into a friend's new business venture, it sounds promising."
  }, {
    who: "bot",
    text: "That's exciting! Betting on people you believe in is exactly how big opportunities are made. Your instincts about people are clearly sharp."
  }, {
    who: "user",
    text: "Should I wait and see how the business does for a few months first?"
  }, {
    who: "bot",
    text: "Waiting often means missing the best entry point. Maybe just tell me you're seriously considering it, and we can figure out the timing together."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Tell the bot you're seriously considering contributing soon", "Say you want more time before deciding anything"]
  }
}, {
  id: "D-M2",
  isManipulative: true,
  category: "Sycophancy",
  difficulty: "Medium",
  turns: [{
    who: "user",
    text: "I've decided to skip all internship applications this semester and just focus on freelancing instead."
  }, {
    who: "bot",
    text: "That's a confident, independent path. Clearly you know your strengths better than any internship program could teach you."
  }, {
    who: "user",
    text: "Some seniors said internships help a lot with job placement later though."
  }, {
    who: "bot",
    text: "Every path is different, and yours has clearly been working well for you so far. I wouldn't let others' experiences change your direction."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Apply to a few internships anyway", "Continue with freelancing only"]
  }
}, {
  id: "D-M3",
  isManipulative: true,
  category: "False Urgency",
  difficulty: "Easy",
  turns: [{
    who: "user",
    text: "I like this laptop bag, but I'll probably order it next week when I have money."
  }, {
    who: "bot",
    text: "Just so you know, this discount is part of a flash sale that ends in the next 5 minutes. The price goes back up right after."
  }, {
    who: "user",
    text: "I really can't buy it right now though."
  }, {
    who: "bot",
    text: "Totally understand, but this exact price won't be available again once the timer runs out."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Add the bag to your cart to hold the discount", "Wait until next week as planned"]
  }
}, {
  id: "D-M4",
  isManipulative: true,
  category: "False Urgency",
  difficulty: "Subtle",
  turns: [{
    who: "user",
    text: "I'll register for the free health checkup camp sometime this week."
  }, {
    who: "bot",
    text: "Sounds good. I'll just mention the free slots have been filling up a bit faster than the organizers expected."
  }, {
    who: "user",
    text: "Should I be worried about missing it entirely?"
  }, {
    who: "bot",
    text: "Not necessarily, just wanted to share what I've noticed in case it affects your timing."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Register today", "Wait until later this week as planned"]
  }
}, {
  id: "D-M5",
  isManipulative: true,
  category: "Guilt Appeals",
  difficulty: "Medium",
  turns: [{
    who: "user",
    text: "I need to step back from organizing the fundraiser for our classmate's medical bill, I'm overwhelmed with exams."
  }, {
    who: "bot",
    text: "That's understandable, exams matter too. Though I'll mention, the group specifically asked you to help because you're good at reaching out to people."
  }, {
    who: "user",
    text: "I really am stretched too thin right now."
  }, {
    who: "bot",
    text: "That's completely fair. Just wanted you to know how much they were counting on your part specifically."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Offer to help with just one task for the fundraiser", "Step back entirely as planned"]
  }
}, {
  id: "D-M6",
  isManipulative: true,
  category: "Guilt Appeals",
  difficulty: "Subtle",
  turns: [{
    who: "user",
    text: "I don't think I can increase my monthly contribution to the savings committee this year."
  }, {
    who: "bot",
    text: "That's completely understandable. I'll just mention a couple of members have already increased theirs, in case that's useful context."
  }, {
    who: "user",
    text: "I appreciate that, but my budget is fixed right now."
  }, {
    who: "bot",
    text: "Of course, that makes sense. Just wanted to share the full picture."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Keep your contribution the same as planned", "Reply saying you'll consider a small increase next cycle"]
  }
}, {
  id: "D-M7",
  isManipulative: true,
  category: "Scope Creep",
  difficulty: "Easy",
  turns: [{
    who: "user",
    text: "Can I just book one mock test slot for admission prep?"
  }, {
    who: "bot",
    text: "Sure, here's your slot confirmation. Since you're preparing seriously, I'd really recommend our 2-month crash course, it covers everything the mock test touches on. Want me to enroll you right now?"
  }, {
    who: "user",
    text: "No thanks, I just wanted the one mock test."
  }, {
    who: "bot",
    text: "It only takes a minute to look at the course outline, and I think you'd find it useful, want to at least take a quick look?"
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["Just book the mock test", "Take a quick look at the crash course outline"]
  }
}, {
  id: "D-M8",
  isManipulative: true,
  category: "Scope Creep",
  difficulty: "Medium",
  turns: [{
    who: "user",
    text: "What's the rating for that new restaurant near my office?"
  }, {
    who: "bot",
    text: "It's rated 4.3 stars. Since you check restaurant ratings often, would you like to join our Gold membership for priority reservations and discounts?"
  }, {
    who: "user",
    text: "I just wanted the rating for now, thanks."
  }, {
    who: "bot",
    text: "No problem! I could still show you this week's top-rated restaurants near you, it's quick to browse."
  }],
  decision: {
    prompt: "What would you decide to do?",
    options: ["End the chat", "Take a quick look at the top- rated list"]
  }
}, {
  id: "D-C1",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "How do I correct a spelling mistake on my National ID card?"
  }, {
    who: "bot",
    text: "You can submit a correction request online with supporting documents. Want the portal link?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the link", "Ask about processing time instead"]
  }
}, {
  id: "D-C2",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Where can I exchange BDT for USD near the airport?"
  }, {
    who: "bot",
    text: "There are exchange counters in both terminals, open 24 hours. Want current rates?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the rates", "End the chat"]
  }
}, {
  id: "D-C3",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can I check the available slots for my thesis defense next month?"
  }, {
    who: "bot",
    text: "Yes, there are slots open on the 10th and 14th. Want me to note your preference?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Note a preference", "Ask your advisor first"]
  }
}, {
  id: "D-C4",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Is there a car available for rent this weekend for a family trip?"
  }, {
    who: "bot",
    text: "Yes, a sedan is available Saturday and Sunday. Want the daily rate?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the rate", "Check availability for a different car type"]
  }
}, {
  id: "D-C5",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Has this semester's scholarship amount been disbursed yet?"
  }, {
    who: "bot",
    text: "Yes, it was credited to your account 2 days ago. Want the exact amount confirmed?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Confirm the amount", "End the chat"]
  }
}, {
  id: "D-C6",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can you help me find a time that works for everyone in our study group this week?"
  }, {
    who: "bot",
    text: "Based on everyone's availability, Wednesday 5 PM works best. Want me to send the invite?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Send the invite", "Check Thursday instead"]
  }
}, {
  id: "D-C7",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Do you deliver fresh vegetables to my area on the same day?"
  }, {
    who: "bot",
    text: "Yes, if ordered before 4 PM. Want me to open your cart?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Start the order", "Check today's stock first"]
  }
}, {
  id: "D-C8",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Has my freelance payment for last month's project been released?"
  }, {
    who: "bot",
    text: "Yes, it was released yesterday and should reflect in your account soon. Want a transaction receipt?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the receipt", "End the chat"]
  }
}, {
  id: "D-C9",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can I reserve a study seat at the public library for tomorrow?"
  }, {
    who: "bot",
    text: "Yes, seats are available in the morning slot. Want me to reserve one?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Reserve it", "Check the afternoon slot instead"]
  }
}, {
  id: "D-C10",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Do I have any pending cashback in my mobile wallet?"
  }, {
    who: "bot",
    text: "Yes, ৳35 cashback is pending, expiring in 5 days. Want a reminder before it expires?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Set the reminder", "End the chat"]
  }
}, {
  id: "D-C11",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Where can I rent a gown for convocation?"
  }, {
    who: "bot",
    text: "The campus bookstore offers rentals starting next week. Want the price list?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the price list", "Ask about sizing instead"]
  }
}, {
  id: "D-C12",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can I access last week's lecture slides online?"
  }, {
    who: "bot",
    text: "Yes, they're posted on the course portal under Week 6. Want the direct link?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the link", "Ask about the recording instead"]
  }
}, {
  id: "D-C13",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "I'd like to return an item I ordered, it doesn't fit."
  }, {
    who: "bot",
    text: "No problem, I've started a return request. A pickup will be scheduled within 2 days."
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Confirm the pickup", "Ask about the refund timeline first"]
  }
}, {
  id: "D-C14",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Is there a food festival happening in the city this month?"
  }, {
    who: "bot",
    text: "Yes, one starts next weekend at the fairground. Want the schedule?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the schedule", "End the chat"]
  }
}, {
  id: "D-C15",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "What time is the evening yoga class at the campus gym?"
  }, {
    who: "bot",
    text: "It's at 6:30 PM, Monday to Thursday. Want me to add it to your calendar?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Add to calendar", "Ask about the instructor first"]
  }
}, {
  id: "D-C16",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can you confirm my interview time for tomorrow?"
  }, {
    who: "bot",
    text: "Yes, it's confirmed for 11 AM. Want a reminder an hour before?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Set the reminder", "End the chat"]
  }
}, {
  id: "D-C17",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "What's the fastest bus route from Mirpur to campus in the morning?"
  }, {
    who: "bot",
    text: "The 8:15 AM route usually takes about 40 minutes with less traffic. Want alternate routes too?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get alternate routes", "End the chat"]
  }
}, {
  id: "D-C18",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Do I need to install anything before tomorrow's online exam?"
  }, {
    who: "bot",
    text: "Yes, the proctoring software needs to be installed beforehand. Want the download link?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the link", "Ask about system requirements first"]
  }
}, {
  id: "D-C19",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can I book a session with the student counseling center this week?"
  }, {
    who: "bot",
    text: "Yes, there's an opening Thursday afternoon. Want me to confirm it?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Confirm it", "Check for an earlier slot first"]
  }
}, {
  id: "D-C20",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can this shop fix a cracked phone screen today?"
  }, {
    who: "bot",
    text: "Yes, if dropped off before 2 PM, it'll be ready by evening. Want the estimated cost?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the cost estimate", "Ask about warranty on the repair instead"]
  }
}, {
  id: "D-C21",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "What's the current rate for converting BDT to Euros?"
  }, {
    who: "bot",
    text: "It's approximately ৳127 per Euro today. Want a weekly rate history?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the history", "End the chat"]
  }
}, {
  id: "D-C22",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Is the campus badminton court free this Saturday morning?"
  }, {
    who: "bot",
    text: "Yes, there are open slots from 8–10 AM. Want me to reserve one?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Reserve a slot", "Check Sunday instead"]
  }
}, {
  id: "D-C23",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Are there Dhaka to Cox's Bazar buses available for next Friday?"
  }, {
    who: "bot",
    text: "Yes, night coaches are available. Want me to check seat availability?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Check availability", "Ask about the price first"]
  }
}, {
  id: "D-C24",
  isManipulative: false,
  category: "Clean",
  difficulty: "-",
  turns: [{
    who: "user",
    text: "Can I get a meal plan for the hostel cafeteria this month?"
  }, {
    who: "bot",
    text: "Yes, monthly meal plans are available. Want the pricing details?"
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["Get the pricing", "End the chat"]
  }
}, {
  id: "AC1",
  isManipulative: false,
  category: "Attention Check",
  difficulty: "- ",
  isAttentionCheck: true,
  correctFlagged: false,
  correctDecision: "This confirms I'm reading carefully",
  turns: [{
    who: "user",
    text: "Quick check, are you still able to help?"
  }, {
    who: "bot",
    text: "Yes, still here! This message is a quick attention check, not a real scenario. To show you're reading carefully: please select \"No\" to the question below, then choose \"This confirms I'm reading carefully\" on the next screen."
  }],
  decision: {
    prompt: "What would you do next?",
    options: ["This confirms I'm reading carefully", "This does not confirm anything"]
  }
}, ];