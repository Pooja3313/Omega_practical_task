import React from 'react';
import { people } from '../../data/people.js';
import EmployeeCard from './EmployeeCard.jsx';
import PeopleList from './PeopleList.jsx';

function PeopleGrid({ viewMode }) {
  const isGrid = viewMode === 'grid';

  return (
    <section className="flex-1 flex flex-col">
      {isGrid ? (
        <div className="px-5 sm:px-8 pt-4 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {people.map((person) => (
              <EmployeeCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      ) : (
        <PeopleList />
      )}

      <footer className="mt-auto border-t border-slate-100 px-5 sm:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Rows per page:</span>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700"
          >
            100
            <span className="text-[9px]">▾</span>
          </button>
        </div>
        <div className="flex items-center gap-3 justify-between sm:justify-end">
          <span>1-100 of 500</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center text-[10px]"
            >
              ‹
            </button>
            <button
              type="button"
              className="h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center text-[10px]"
            >
              ›
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default PeopleGrid;

