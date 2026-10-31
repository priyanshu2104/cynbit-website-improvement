'use client'

import { SERVICES, BUDGETS, TIMELINES, type LeadFormData } from '@/lib/chatTypes'

function getLabel(list: { id: string; label: string }[], id: string) {
  return list.find(item => item.id === id)?.label ?? id
}

export default function ReviewCard({ data }: { data: LeadFormData }) {
  return (
    <div className="bg-cynbit-card border border-cynbit-border rounded-xl p-3 text-xs space-y-2">
      <p className="text-cynbit-muted uppercase tracking-wide text-[10px] font-semibold">Summary</p>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Name</span>
        <span className="text-white">{data.name}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Service</span>
        <span className="text-white">{getLabel(SERVICES, data.service)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Project</span>
        <span className="text-white flex-1 break-words">{data.projectDescription}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Budget</span>
        <span className="text-white">{getLabel(BUDGETS, data.budget)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Timeline</span>
        <span className="text-white">{getLabel(TIMELINES, data.timeline)}</span>
      </div>
      <div className="flex gap-2">
        <span className="text-cynbit-muted w-14 shrink-0">Email</span>
        <span className="text-white">{data.email}</span>
      </div>
    </div>
  )
}
