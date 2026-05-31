import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: '总览', path: '/risk-console' },
  { label: '风险案件', path: '/risk-console/cases' },
  { label: '规则配置', path: '/risk-console/rules' },
  { label: '阈值模拟', path: '/risk-console/simulator' },
  { label: '策略看板', path: '/risk-console/dashboard' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/risk-console') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-56 min-h-screen bg-[#1a2234] flex flex-col shrink-0">
      <nav className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-[#2a3a5c] text-white'
                      : 'text-[#8b9dc3] hover:text-white hover:bg-[#232f47]'
                  }`}
                >
                  {active && (
                    <span className="w-1 h-5 rounded-full bg-[#4f8aff] mr-3 -ml-1" />
                  )}
                  <span className={active ? 'ml-1' : 'ml-4'}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;