import "./styles.css";

interface IProps {
  listText ?: string;
  listTitle ?: string;
}

const List: React.FC<IProps> = ({ listText, listTitle }) => {
  return (
    <div className="footer-components">
      <h2>{listTitle}</h2>
      <p>{listText}</p>
    </div>
  );
};

export default List;
