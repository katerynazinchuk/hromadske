import handlebars from "https://cdn.skypack.dev/handlebars";

const getTemplate = async (template) => {
    try {
        return template.trim().startsWith("http") || template.trim().startsWith("/")
            ? (await fetch(template)).text()
            : template;
    } catch (err) {
        return template;
    }
};

const getData = async (data) => {
    if (typeof data === "string") {
        return (await fetch(data)).json();
    }

    return data;
};

export default async (selector, templateSrc, data) => {
    [templateSrc, data] = await Promise.all([
        getTemplate(templateSrc),
        getData(data),
    ]);

    const template = handlebars.compile(templateSrc);

    document.querySelector(selector).innerHTML = template(data);
};
