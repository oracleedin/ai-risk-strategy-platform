import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { ConsoleHeader } from './ConsoleHeader';

export const ConsoleLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#0f1623]">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <ConsoleHeader />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ConsoleLayout;