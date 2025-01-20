import CardContent, { CardContentProps } from "./CardContent";
import CardTitle, { CardTitleProps } from "./CardTitle";

interface CardProps {
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  image: string;
  className: string;
  onClick: React.ComponentProps<"div">["onClick"];
}

const Card: React.FC<CardProps> & { Title: React.FC<CardTitleProps> } & {
  Content: React.FC<CardContentProps>;
} = ({ title, children, actions, image, className, onClick }) => {
  const classes = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`;
  return (
    <div className={classes} onClick={onClick}>
      {image && (
        <img className="card__image rounded-t-lg pb-1" src={image} alt="" />
      )}
      {title && <Card.Title>{title}</Card.Title>}
      {children}
      {actions && (
        <div className="card__actions inline-flex p-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {actions}
        </div>
      )}
    </div>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
export default Card;
