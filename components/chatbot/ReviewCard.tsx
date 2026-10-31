'use client'

import { SERVICES, BUDGETS, TIMELINES, type LeadFormData } from '@/lib/chatTypes'

function getLabel(list: { id: string; label: string }[], id: string) {
  return list.find((item) => item.id === id)?.label ?? id
}

export default function ReviewCard({ data }: { data: LeadFormData }) {
  return (
    <div className="bg-surface-container rounded-2xl p-3.5 text-xs space-y-2 border border-outline-variant/25">
      <p className="text-primary uppercase tracking-wider text-[10px] font-bold">
        Inquiry Summary
      </p>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Name:</span>
        <span className="text-on-surface font-semibold">{data.name}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Interest:</span>
        <span className="text-on-surface font-semibold">{getLabel(SERVICES, data.service)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Overview:</span>
        <span className="text-on-surface flex-1 break-words font-medium">{data.projectDescription}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Budget:</span>
        <span className="text-on-surface font-semibold">{getLabel(BUDGETS, data.budget)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Timeline:</span>
        <span className="text-on-surface font-semibold">{getLabel(TIMELINES, data.timeline)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-on-surface-variant w-16 shrink-0 font-medium">Email:</span>
        <span className="text-primary font-semibold">{data.email}</span>
      </div>
    </div>
  )
}
