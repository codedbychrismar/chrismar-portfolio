import { Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { MISSION_ITEMS, SITE_PROFILE, SOCIAL_LINKS } from '../constants'
import { createContactMailtoUrl } from '../services'
import type { ContactFormState } from '../types'
import { smoothScrollToId } from '../utils'
import { GameButton, PixelPanel, SectionHeading } from '@/shared/components'

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [status, setStatus] = useState<'idle' | 'drafted' | 'missing-email'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!SITE_PROFILE.contactEmail) {
      setStatus('missing-email')
      return
    }

    window.location.href = createContactMailtoUrl(form, SITE_PROFILE.contactEmail)
    setStatus('drafted')
    setForm(initialFormState)
  }

  return (
    <section id="contact" className="relative z-[1] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="[ Quest Board ]"
          title="CONTACT"
          description="Have a project you would like to discuss or simply want to connect?"
        />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 reveal reveal-delay-1">
            <PixelPanel className="h-full p-6">
              <div className="mb-5 font-heading text-[0.55rem] uppercase tracking-[3px] text-accent">
                [ Mission Brief ]
              </div>

              <div className="grid gap-5">
                {MISSION_ITEMS.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="border border-secondary/40 px-2 py-1 font-heading text-[0.45rem] text-secondary">
                        {item.marker}
                      </span>
                      <span className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                    <div className="pl-1 font-mono text-sm text-primary">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-primary/20 pt-5">
                <div className="mb-3 font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                  Find me on
                </div>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      className="border border-primary/40 px-3 py-2 font-heading text-[0.5rem] uppercase tracking-[1px] text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onClick={(event) => {
                        if (!link.external) {
                          event.preventDefault()
                          smoothScrollToId('#contact')
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </PixelPanel>
          </div>

          <PixelPanel className="p-6 md:col-span-3 reveal reveal-delay-2">
            <div className="mb-5 flex items-center gap-2 font-heading text-[0.55rem] uppercase tracking-[3px] text-accent">
              <Mail aria-hidden size={15} />
              [ Send A Message ]
            </div>

            {status !== 'idle' ? (
              <div className="mb-5 border border-primary/40 bg-primary/10 p-3 text-center font-heading text-[0.55rem] uppercase tracking-[2px] text-primary">
                {status === 'drafted'
                  ? 'Message draft opened in your email client.'
                  : 'Add VITE_CONTACT_EMAIL before deploying the contact form.'}
              </div>
            ) : null}

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2">
                <span className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                  Your Name
                </span>
                <input
                  className="border border-primary/30 bg-black/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition focus:border-primary"
                  type="text"
                  placeholder="> Enter your name..."
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                  Email Address
                </span>
                <input
                  className="border border-primary/30 bg-black/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition focus:border-primary"
                  type="email"
                  placeholder="> Enter your email..."
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="font-heading text-[0.5rem] uppercase tracking-[2px] text-muted-foreground">
                  Message
                </span>
                <textarea
                  className="min-h-36 resize-y border border-primary/30 bg-black/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition focus:border-primary"
                  placeholder="> Type your message here..."
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  required
                />
              </label>

              <GameButton className="w-full justify-center py-3" type="submit">
                <Send aria-hidden className="mr-2 inline-block" size={14} />
                Send Message
              </GameButton>
            </form>
          </PixelPanel>
        </div>
      </div>
    </section>
  )
}
