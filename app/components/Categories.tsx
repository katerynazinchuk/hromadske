const Categories = ({ categories }) => (
  <nav className="sub-header">
    <div className="sub-header__container">
      {categories.data.map((categoryItem) => (
        <a href="#" className="sub-header__item">
          {categoryItem.attributes.Title}
        </a>
      ))}
    </div>
  </nav>
);

export default Categories;
