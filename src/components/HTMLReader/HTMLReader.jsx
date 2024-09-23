import { marked } from 'marked';

/**
 * @param {string} markdown - Markdown string to be rendered
 * @returns {JSX.Element} - Rendered HTML
 * @description - This component renders Markdown string as HTML
 * @example
 * <HTMLReader markdown="# Hello World" />
 * @example
 * <HTMLReader markdown="# Hello World\n\nThis is a paragraph" />
 * @example
 * <HTMLReader markdown="# Hello World\n\nThis is a paragraph\n\n- Item 1\n- Item 2" />
 **/
function HTMLReader({ markdown }) {
  const html = marked(markdown);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

export default HTMLReader;
