import React from 'react';

function EmployeeCard({ person }) {
  return (
    <article className="relative flex flex-col items-center rounded-[24px] border border-[#E5E5E4] bg-white px-6 py-7 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
      <div className="relative mb-5">
        <div className="h-[133px] w-[133px] rounded-full bg-[#ECEFF4] flex items-center justify-center overflow-hidden">
          {person.avatar ? (
            <img
              src={person.avatar}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-lg font-semibold text-slate-700">{person.initials}</span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 h-11 w-11 rounded-[18px] bg-slate-900 flex items-center justify-center text-[10px] font-semibold uppercase tracking-wide text-white">
          {person.badge}
        </div>
      </div>

      <h3 className="text-[15px] font-semibold text-slate-900">{person.name}</h3>
      <p className="mt-1 text-[13px] text-[#B38A55] text-center">{person.role}</p>

      <div className="mt-4 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#1CC88A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F6C23E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E74A3B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#36B9CC]" />
      </div>
    </article>
  );
}

export default EmployeeCard;

