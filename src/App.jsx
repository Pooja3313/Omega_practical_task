import React from 'react';
import Sidebar from './components/layout/Sidebar.jsx';
import Topbar from './components/layout/Topbar.jsx';
import PeopleGrid from './components/people/PeopleGrid.jsx';

function App() {
  const [viewMode, setViewMode] = React.useState('grid');

  return (
    <div className="min-h-screen bg-[#E2E4EF] flex items-center justify-center px-3 py-4 md:px-6 md:py-6 lg:px-10">
      <div className="w-full max-w-6xl bg-background rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 flex flex-col bg-white rounded-t-[32px] md:rounded-t-none md:rounded-l-none md:rounded-r-[32px]">
          <Topbar viewMode={viewMode} onChangeViewMode={setViewMode} />
          <PeopleGrid viewMode={viewMode} />
        </main>
      </div>
    </div>
  );
}

export default App;

