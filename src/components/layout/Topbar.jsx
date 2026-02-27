import React from 'react';

function IconButton({ children, onClick, isPrimary = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-12 w-12 rounded-[14px] border flex items-center justify-center transition ${
        isPrimary
          ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
          : 'border-[#E5E5E4] bg-white text-slate-500 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  );
}

const SearchIcon = () => (
  <svg
    className="h-4 w-4 text-slate-400"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M10 6.5V10.2L12.3 11.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4.5V11.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M7.5 9.5L10 12L12.5 9.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 14H15"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5H16L12 9.5V13L8 15V9.5L4 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RepeatIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H15V4L17 6L15 8V6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14H5V16L3 14L5 12V14"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NoteIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="10"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path d="M7 8H11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M7 11H10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function Topbar({ viewMode, onChangeViewMode }) {
  return (
    <header className="border-b border-slate-100 px-5 sm:px-8 pt-5 pb-4 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold text-slate-900">People</h1>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#E5E5E4] bg-white px-4 py-2 text-xs text-slate-500">
            <span className="font-medium text-slate-700">MST</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#E5E5E4] bg-white px-4 py-2 text-xs text-slate-700">
            <ClockIcon />
            <span>02:03:02</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <IconButton>
              <RepeatIcon />
            </IconButton>
            <IconButton>
              <NoteIcon />
            </IconButton>
          </div>
          <button
            type="button"
            className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-xs font-medium text-slate-700"
          >
            PR
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 rounded-full border border-[#E5E5E4] bg-[#F6F7FB] px-5 py-3">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by Employee Name or Number"
              className="w-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <IconButton>
            <DownloadIcon />
          </IconButton>
          <IconButton>
            <FilterIcon />
          </IconButton>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-slate-900 px-4 text-sm font-medium text-white"
          >
            +
          </button>
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1">
            <button
              type="button"
              onClick={() => onChangeViewMode('grid')}
              className={`h-7 w-7 rounded-full text-[11px] font-medium ${
                viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-400'
              }`}
            >
              ⬛
            </button>
            <button
              type="button"
              onClick={() => onChangeViewMode('list')}
              className={`h-7 w-7 rounded-full text-[13px] ${
                viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-400'
              }`}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;

