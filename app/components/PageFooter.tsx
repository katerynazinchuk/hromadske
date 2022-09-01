const PageFooter = () => (
  <footer className="page-footer">
    <h2 className="myHeader">Підпишись на розсилку</h2>
    <h4>Щонеділі наші редактори відбирають для вас найкращі історії тижня</h4>
    <form>
      <input type="text" />
      <button>Підписатись</button>
    </form>
    <div className="containerFooter">
      <div className="column1Footer"></div>
      <div className="column2Footer">
        <a href="">Про Громадське</a>
        <a href="">Вакансії</a>
        <a href="">Наші політики</a>
      </div>
      <div className="column3Footer">
        <a href="">Контакти</a>
        <a href="">Фінансові звіти</a>
        <a href="">Тендери</a>
      </div>
      <div className="column4Footer">
        <a href="">Структура власності</a>
        <a href="">Реклама</a>
      </div>
      <div className="column5Footer">
        <p>
          Підтримай Громадське. Ми працюємо для тебе та завдяки тобі. Будь нашим
          другом
        </p>
        <button>Підтримати</button>
      </div>
    </div>
  </footer>
);

export default PageFooter;
