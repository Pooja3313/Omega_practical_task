import React from 'react';
import { people } from '../../data/people.js';

function PeopleList() {
  return (
    <div className="px-5 sm:px-8 pt-4 pb-6">
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/60">
        <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)] gap-4 border-b border-slate-100 bg-white px-5 py-3 text-[11px] font-medium text-slate-500">
          <span>Name</span>
          <span>Role</span>
          <span className="text-right">Status</span>
        </div>

        <ul className="divide-y divide-slate-100 text-sm">
          {people.map((person) => (
            <li
              key={person.id}
              className="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)] gap-4 px-5 py-3 bg-slate-50/70 hover:bg-white transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {person.initials}
                </div>
                <span className="text-sm font-medium text-slate-900">{person.name}</span>
              </div>
              <div className="flex items-center text-xs text-slate-500">{person.role}</div>
              <div className="flex items-center justify-end gap-1">
                <span className="h-1.5 w-4 rounded-full bg-emerald-400" />
                <span className="h-1.5 w-4 rounded-full bg-amber-400" />
                <span className="h-1.5 w-4 rounded-full bg-rose-400" />
                <span className="h-1.5 w-4 rounded-full bg-sky-400" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PeopleList;

