import marked from 'marked'
import 'github-markdown-css'

const toHtml = text => {
    let renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
        return `<a href="${href}"${title ? 'title="${title}"' : ''}target="_blank" rel="nofollow">${text}</a>`;
    };

    marked.setOptions({
        renderer,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        },
    });
    return marked(text)
}

export default {
    toHtml
}