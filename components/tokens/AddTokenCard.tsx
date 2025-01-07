import { Plus } from 'lucide-react';
import { Card } from '../ui/card';

interface AddTokenCardProps {
  onClick: () => void;
}

export const AddTokenCard = ({ onClick }: AddTokenCardProps) => {
  return (
    <Card
      className="hover:shadow-lg transition-all cursor-pointer flex items-center justify-center h-full min-h-[120px] w-full border-dashed"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-700">
        <Plus className="h-8 w-8" />
        <span className="text-sm font-medium">Add Token</span>
      </div>
    </Card>
  );
}; 