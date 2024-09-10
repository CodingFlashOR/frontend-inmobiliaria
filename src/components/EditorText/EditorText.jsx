import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import QuillMarkdown from 'quilljs-markdown';
import 'quill/dist/quill.snow.css';
import 'quilljs-markdown/dist/quilljs-markdown-common-style.css';
import TurndownService from 'turndown';

/**
 * EditorText is a rich text editor component that uses Quill to allow text formatting and then converts the HTML content to Markdown using TurndownService.
 *
 * @param {Function} setMarkdown - Callback function to set the Markdown content. It is called whenever the text changes in the editor.
 * @returns {JSX.Element} - The rendered Quill editor component.
 *
 * @example
 * <EditorText setMarkdown={markdown => console.log(markdown)} />
 */
const EditorText = ({ setMarkdown }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const toolbarOptions = [
      ['bold', 'italic', 'underline'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['clean']
    ];

    const editor = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    });

    new QuillMarkdown(editor, {});

    const turndownService = new TurndownService();

    turndownService.addRule('bold', {
      filter: ['strong'],
      replacement: function (content) {
        return `**${content}**`;
      }
    });

    turndownService.addRule('underline', {
      filter: ['u'],
      replacement: function (content) {
        return `<u>${content}</u>`;
      }
    });

    turndownService.addRule('unorderedList', {
      filter: function (node) {
        return node.nodeName === 'UL';
      },
      replacement: function (content, node) {
        const items = Array.from(node.children);
        return '\n' + items.map(item => `- ${item.textContent}`).join('\n') + '\n';
      }
    });

    const cleanHtml = (html) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      tempDiv.querySelectorAll('li[data-list="bullet"]').forEach(li => {
        const parent = li.parentNode;
        if (parent.tagName === 'OL') {
          const newUl = document.createElement('ul');
          newUl.innerHTML = parent.innerHTML;
          parent.replaceWith(newUl);
        }
      });

      return tempDiv.innerHTML;
    };

    editor.on('text-change', () => {
      let htmlContent = editor.root.innerHTML;
      htmlContent = cleanHtml(htmlContent);
      const markdownContent = turndownService.turndown(htmlContent);
      setMarkdown(markdownContent);
    });

  }, [setMarkdown]);

  return <div ref={editorRef} style={{ height: '400px' }} />;
};

export default EditorText;
