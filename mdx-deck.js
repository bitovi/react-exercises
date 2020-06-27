import React from 'react';
import deepmerge from 'deepmerge';

import { prism, dark } from '@mdx-deck/themes';
import { nightOwl } from '@code-surfer/themes';
import prismStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export const theme = deepmerge.all([
  prism,
  dark,
  {
    styles: {
      CodeSurfer: {
        tokens: nightOwl.styles.CodeSurfer.tokens,
      },
    },
  },
]);

const code = theme.components.code;
theme.components.code = (props) => code({ ...props, style: prismStyle });

export function Half({ children, style, ...props }) {
  return (
    <div {...props} style={{ width: '50%', textAlign: 'center', ...style }}>
      {children}
    </div>
  )
}
