import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import {
  Home,
  Building2,
  CircleDollarSign,
  Users,
  MessageCircle,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  Calendar,
  Video,
  CreditCard
} from 'lucide-react';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center py-2.5 px-4 rounded-md transition-colors ${
          isActive
            ? 'bg-primary-50 text-primary-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </NavLink>
  );
};

export const Sidebar: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  // ENTREPRENEUR MENU
  const entrepreneurItems = [
    { to: '/dashboard/entrepreneur', icon: <Home size={20} />, text: 'Dashboard' },
    { to: '/profile/entrepreneur/' + user.id, icon: <Building2 size={20} />, text: 'My Startup' },
    { to: '/investors', icon: <CircleDollarSign size={20} />, text: 'Find Investors' },

    // NEW: PAYMENTS
    { to: '/payments', icon: <CreditCard size={20} />, text: 'Payments' },

    { to: '/calendar', icon: <Calendar size={20} />, text: 'Meetings' },
    { to: '/messages', icon: <MessageCircle size={20} />, text: 'Messages' },
    { to: '/notifications', icon: <Bell size={20} />, text: 'Notifications' },
    { to: '/documents', icon: <FileText size={20} />, text: 'Documents' },
    { to: '/video-call', icon: <Video size={20} />, text: 'Video Calls' },
  ];

  // INVESTOR MENU
  const investorItems = [
    { to: '/dashboard/investor', icon: <Home size={20} />, text: 'Dashboard' },
    { to: '/profile/investor/' + user.id, icon: <CircleDollarSign size={20} />, text: 'My Portfolio' },
    { to: '/entrepreneurs', icon: <Users size={20} />, text: 'Find Startups' },

    // NEW: PAYMENTS
    { to: '/payments', icon: <CreditCard size={20} />, text: 'Payments' },

    { to: '/calendar', icon: <Calendar size={20} />, text: 'Meetings' },
    { to: '/messages', icon: <MessageCircle size={20} />, text: 'Messages' },
    { to: '/notifications', icon: <Bell size={20} />, text: 'Notifications' },
    { to: '/deals', icon: <FileText size={20} />, text: 'Deals' },
    { to: '/video-call', icon: <Video size={20} />, text: 'Video Calls' },
  ];

  const items = user.role === 'entrepreneur'
    ? entrepreneurItems
    : investorItems;

  const commonItems = [
    { to: '/settings', icon: <Settings size={20} />, text: 'Settings' },
    { to: '/help', icon: <HelpCircle size={20} />, text: 'Help & Support' },
  ];

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">

        <div className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 space-y-1">
            {items.map((item, i) => (
              <SidebarItem key={i} {...item} />
            ))}
          </div>

          <div className="mt-8 px-3">
            <h3 className="px-4 text-xs text-gray-500 uppercase">
              Settings
            </h3>

            {commonItems.map((item, i) => (
              <SidebarItem key={i} {...item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};