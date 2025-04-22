import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { label: '主页', path: '/' },
  { label: '音乐作品展示', path: '/music' },
  { label: '配乐作品展示', path: '/soundtrack' },
  { label: '联系方式', path: '/contact' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (hovered !== null && hovered !== location.pathname) {
      navigate(hovered);
    }
  }, [hovered]);

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 flex flex-col space-y-4 pl-2">
      {links.map(({ label, path }) => (
        <div
          key={path}
          onMouseEnter={() => setHovered(path)}
          className={\`cursor-pointer text-white px-4 py-2 rounded-r-lg transition duration-300 \${location.pathname === path ? 'bg-white text-black' : 'bg-black/50 hover:bg-white hover:text-black'}\`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}