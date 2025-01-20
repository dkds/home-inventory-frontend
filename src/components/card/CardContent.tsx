export interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div className="card__content font-normal px-4 py-2 text-gray-700 dark:text-gray-400">
      {children}
    </div>
  );
};

export default CardContent;
