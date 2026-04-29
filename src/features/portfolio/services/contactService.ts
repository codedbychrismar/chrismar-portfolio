import type { ContactFormState } from '../types'

export function createContactMailtoUrl(form: ContactFormState, recipient: string) {
  const subject = `Portfolio inquiry from ${form.name}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    '',
    form.message,
  ].join('\n')

  const query = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${recipient}?${query.toString()}`
}
