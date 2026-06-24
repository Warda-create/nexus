import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Bell,
  MessageCircle,
  User,
  LogOut,
  Building2,
  CircleDollarSign,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';

interface NavbarProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const dashboardRoute =
    user?.role === 'entrepreneur'
      ? '/dashboard/entrepreneur'
      : '/dashboard/investor';

  const profileRoute = user
    ? `/profile/${user.role}/${user.id}`
    : '/login';

  const navLinks = [
    {
      icon:
        user?.role === 'entrepreneur' ? (
          <Building2 size={18} />
        ) : (
          <CircleDollarSign size={18} />
        ),
      text: 'Dashboard',
      path: dashboardRoute,
    },
    {
      icon: <MessageCircle size={18} />,
      text: 'Messages',
      path: user ? '/messages' : '/login',
    },
    {
      icon: <Bell size={18} />,
      text: 'Notifications',
      path: user ? '/notifications' : '/login',
    },
    {
      icon: <User size={18} />,
      text: 'Profile',
      path: profileRoute,
    },
  ];

  return (
    <nav className="bg-white shadow-md relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Mobile Sidebar Button */}
            {user && (
              <button
                onClick={() =>
                  setMobileSidebarOpen(!mobileSidebarOpen)
                }
                className="md:hidden mr-3 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              >
                {mobileSidebarOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="text-lg font-bold text-gray-900">
                Business Nexus
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:ml-6">
            {user ? (
              <div className="flex items-center space-x-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    <span className="mr-2">
                      {link.icon}
                    </span>
                    {link.text}
                  </Link>
                ))}

                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  leftIcon={<LogOut size={18} />}
                >
                  Logout
                </Button>

                <Link
                  to={profileRoute}
                  className="flex items-center space-x-2 ml-2"
                >
                  <Avatar
                    src={user.avatarUrl}
                    alt={user.name}
                    size="sm"
                    status={
                      user.isOnline
                        ? 'online'
                        : 'offline'
                    }
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline">
                    Log in
                  </Button>
                </Link>

                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile User Avatar */}
          {user && (
            <div className="md:hidden flex items-center">
              <Link to={profileRoute}>
                <Avatar
                  src={user.avatarUrl}
                  alt={user.name}
                  size="sm"
                  status={
                    user.isOnline
                      ? 'online'
                      : 'offline'
                  }
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};