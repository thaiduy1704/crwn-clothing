import "./category-item.styles.scss";

export interface ICategory {
  imageUrl: string;
  title: string;

  id: number;
}
const CategoryItem = ({ imageUrl, title, id }: ICategory) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
