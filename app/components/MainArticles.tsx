import PrimaryArticle from "~/components/PrimaryArticle";

const MainArticles = ({ articles }) => (
  <div className="main-layout">
    <div className="main-layout__articles-grid-placeholder">
      <PrimaryArticle article={articles.data[0]} />

      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
        distinctio illum inventore quidem rem veritatis? Aliquid autem
        consequatur, corporis ea eaque eligendi fugit ipsam porro provident quis
        tenetur unde voluptate.
      </article>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
        distinctio illum inventore quidem rem veritatis? Aliquid autem
        consequatur, corporis ea eaque eligendi fugit ipsam porro provident quis
        tenetur unde voluptate.
      </article>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
        distinctio illum inventore quidem rem veritatis? Aliquid autem
        consequatur, corporis ea eaque eligendi fugit ipsam porro provident quis
        tenetur unde voluptate.
      </article>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
        distinctio illum inventore quidem rem veritatis? Aliquid autem
        consequatur, corporis ea eaque eligendi fugit ipsam porro provident quis
        tenetur unde voluptate.
      </article>
    </div>

    <div className="main-layout__top-news-placeholder">
      <aside className="top-news">
        <h2 className="top-news__section-title">Останні новини</h2>
        {articles.data.map((article) => (
          <article className="top-news__item">
            <h5 className="top-news__item-title">{article.attributes.title}</h5>
            <time
              className="top-news__item-publication-time"
              dateTime="08-08-2022"
            >
              08 серпня 2022, 19:05
            </time>
          </article>
        ))}
      </aside>
    </div>
  </div>
);

export default MainArticles;
