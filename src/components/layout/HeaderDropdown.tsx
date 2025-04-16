import { motion } from 'framer-motion';
import Link from 'next/link';

type DropdownItem = {
  name: string;
  path: string;
};

interface HeaderDropdownProps {
  items: DropdownItem[];
  id: string;
}

const HeaderDropdown = ({ items, id }: HeaderDropdownProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50"
      id={id}
      role="menu"
    >
      <div className="absolute top-0 left-4 w-3 h-3 bg-white transform -translate-y-1/2 rotate-45" />
      
      <div className="relative z-10 bg-white rounded-md">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            role="menuitem"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default HeaderDropdown; 