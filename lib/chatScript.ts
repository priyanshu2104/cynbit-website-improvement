import type { ChatStep, LeadFormData } from './chatTypes'

// returns the bot message for each step
export function getBotMessage(step: ChatStep, data: Partial<LeadFormData>): string {
  switch (step) {
    case 'welcome':
      return "Hey! 👋 I'm Aria, Cynbit's assistant.\n\nI can help you figure out what you need and get your project started. Takes about 2 minutes — want to go?"

    case 'ask_name':
      return "Cool! What's your name?"

    case 'ask_service':
      return `Nice, ${data.name}! 🎉\n\nWhat kind of help are you looking for?`

    case 'ask_description':
      return `Got it! Tell me a bit about the project — what are you trying to build or fix?`

    case 'ask_budget':
      return "What's your rough budget for this?"

    case 'ask_timeline':
      return "And when are you thinking to get started?"

    case 'ask_email':
      return `Almost done! What's the best email to reach you on, ${data.name}?`

    case 'review':
      return "Here's what I've got — does everything look right?"

    case 'submitting':
      return "Sending this over to the team... ⏳"

    case 'success':
      return `All done, ${data.name}! 🎉 We'll email you at ${data.email} within 24 hours.\n\nFeel free to check out our work at cynbit.in in the meantime.`

    case 'error':
      return "Hmm, something went wrong on our end. Try again or just email us at opportunities@cynbit.in"

    default:
      return "Hey there! How can I help?"
  }
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
