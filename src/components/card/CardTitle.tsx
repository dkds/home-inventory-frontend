export interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h5 className="card__title px-4 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
};

export default CardTitle;
