import Prism from 'prismjs';
import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createHljsTheme({ baseConfig, codeBlockClass }) {
  const baseTheme = createBaseTheme(baseConfig);

  baseTheme.extend((md) => {
    md.set({
      highlight: createHighlightRender({
        hasLang: (lang) => Prism.languages[lang],
        codeBlockClass,
        highlight: (str, lang) => Prism.highlight(str, Prism.languages[lang], lang),
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    extend(callback) {
      baseTheme.extend((...arg) => {
        callback(...arg, Prism);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
