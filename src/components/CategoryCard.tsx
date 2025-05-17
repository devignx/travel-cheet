import React from 'react';
import { Category } from '../types/types';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

// Create a mapping of icon names to Lucide React components
const iconMap: Record<string, React.ComponentType<any>> = {
  'map': Icons.Map,
  'hotel': Icons.Hotel,
  'utensils': Icons.Utensils,
  'shopping-bag': Icons.ShoppingBag,
  'first-aid': Icons.FirstAid,
  'map-pin': Icons.MapPin,
  'users': Icons.Users,
  'wifi': Icons.Wifi,
  // Add more icons as needed
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const IconComponent = iconMap[category.icon] || Icons.HelpCircle;
  
  return (
    <button
      className="flex items-center p-4 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-1"
      style={{ backgroundColor: category.color }}
      onClick={() => onClick(category)}
      aria-label={`View ${category.name} phrases`}
    >
      <div className="p-3 mr-4 bg-white rounded-full">
        <IconComponent size={24} />
      </div>
      <h3 className="text-lg font-medium">{category.name}</h3>
    </button>
  );
};

export default CategoryCard;