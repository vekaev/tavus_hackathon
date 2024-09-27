
import './App.css'
import ReactMarkdown from 'react-markdown';

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [remarkMath, [remarkGfm, { singleTilde: false }]],
  rehypePlugins: [rehypeKatex],
  components: {
    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
  }
});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;


function App() {
  const data = window.initData || {
    content_type: 'latex',
    content: `
  Given a **formula** below:
  $$
  s = ut + \\frac{1}{2}at^{2}
  $$
  $$
  L = \\frac{1}{2} \\pi v^2 S C_L 
  $$
  $$
  \\int_0^1 x^2 dx
  $$
  Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$
  `
  }

  return (
    <div>
      <p>{ new Date().toISOString() }</p>
      {<Markdown>{data.content}</Markdown>}
    </div>
  )
}

export default App
