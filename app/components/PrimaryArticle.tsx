const PrimaryArticle = ({ article }) => (
  <h1>
    {article.attributes.image}
    <img src={article.attributes.image} alt="" />
    {article.attributes.title}
  </h1>
);

export default PrimaryArticle;
