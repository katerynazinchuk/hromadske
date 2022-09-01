import MainHeader from "~/components/MainHeader";
import PageFooter from "~/components/PageFooter";
import Categories from "~/components/Categories";
import { fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MainArticles from "~/components/MainArticles";

export const loader = async () => {
  const categories = await (
    await fetch("http://192.168.178.116:1337/api/categories/")
  ).json();

  const articles = await (
    await fetch("http://192.168.178.116:1337/api/articles/")
  ).json();

  return { categories, articles };
};

export default () => {
  const { categories, articles } = useLoaderData();

  return (
    <>
      <header id="main-header" className="page-layout__header">
        <MainHeader />
      </header>
      <div id="sub-header" className="page-layout__navigation-placeholder">
        <Categories categories={categories} />
      </div>
      <main className="page-layout__container">
        <MainArticles articles={articles} />
      </main>
      <PageFooter />
    </>
  );
};
