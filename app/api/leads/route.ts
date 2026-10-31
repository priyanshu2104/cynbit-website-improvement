import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  projectDescription: z.string().min(10),
  budget: z.string().min(1),
  timeline: z.string().optional(),
})

// storing in memory for now, would use a db in prod
const leads: any[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = LeadSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ success: false, errors: result.error.flatten().fieldErrors }, { status: 422 })
    }

    const newLead = {
      ...result.data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }

    leads.push(newLead)
    console.log('new lead submitted:', newLead) // TODO: replace with proper logging

    return NextResponse.json({ success: true, message: "Got it! We'll be in touch soon.", id: newLead.id }, { status: 201 })
  } catch (err) {
    console.error('lead submission error:', err)
    return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 })
  }
}

// quick GET to see all leads (for testing only, remove before prod)
export async function GET() {
  return NextResponse.json({ count: leads.length, leads })
}
