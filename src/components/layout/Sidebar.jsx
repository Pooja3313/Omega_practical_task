import React from 'react';

const navItems = [
  { label: 'Home', active: false },
  { label: 'My info', active: false },
  { label: 'People', active: true },
  { label: 'Team Management', active: false },
  { label: 'Project Setup', active: false },
  { label: 'Hiring', active: false },
  { label: 'Report', active: false },
];

function Sidebar() {
  return (
    <aside className="bg-sidebar text-white w-full md:w-72 lg:w-72 px-5 py-6 flex flex-col gap-8 rounded-b-none md:rounded-l-[32px] md:rounded-r-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-white flex items-center justify-center text-sm font-semibold text-sidebar">
            CORE
          </div>
        </div>
        <button
          type="button"
          className="hidden md:flex h-7 w-7 items-center justify-center rounded-full border border-sidebarMuted text-xs"
        >
          ‹
        </button>
      </div>

      <nav className="flex-1 space-y-2 text-sm">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={[
              'w-full flex items-center gap-3 px-3 py-2 rounded-2xl transition',
              item.active
                ? 'bg-sidebarActive text-sidebarActiveText shadow-sm'
                : 'text-gray-200 hover:bg-sidebarMuted/60',
            ].join(' ')}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sidebarMuted/70 text-xs">
              ▢
            </span>
            <span className="flex-1 text-left">{item.label}</span>
            {item.active && <span className="text-xs text-amber-400">●</span>}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          type="button"
          className="w-full flex items-center justify-between px-3 py-2 rounded-2xl bg-sidebarMuted/80 text-sm text-gray-100"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-sidebar text-xs">
              ⚙
            </span>
            <span>Settings</span>
          </span>
          <span className="text-xs text-gray-300">›</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

