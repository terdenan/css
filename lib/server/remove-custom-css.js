module.exports = function removeCustomCSS(html) {
    const customStyle = '<style data-name=custom';
    const customStyleStartsAt = html.indexOf(customStyle);
    const search = '</style>';

    if (customStyleStartsAt !== -1) {
        // уже существуют кастомные стили для сайта, значит их нужно удалить
        const endsAt = html.indexOf(search, customStyleStartsAt);
        html = html.substr(0, customStyleStartsAt) + html.substr(endsAt + search.length);
    }

    // @TODO: find style selector in head only
    const index = html.lastIndexOf(search) + search.length;

    const before = html.substr(0, index);
    const after = html.substr(index);

    return before + '<!--custom-css-placeholder-->' + after;
};
