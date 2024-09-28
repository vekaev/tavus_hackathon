import './App.css'
import ReactMarkdown from 'react-markdown';

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import logo from './assets/Tavus Platform Logo.svg';

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
$$
\\text{Assume for contradiction that } \\sqrt{2} \\text{ is rational. Then we can write } \\sqrt{2} = \\frac{a}{b} \\text{, where } a \\text{ and } b \\text{ are coprime integers (i.e., their greatest common divisor is 1) and } b \\neq 0.
$$

$$
\\text{Squaring both sides, we get:} \\quad 2 = \\frac{a^2}{b^2} \\quad \\Rightarrow \\quad 2b^2 = a^2
$$


$$
\\text{This contradicts our initial assumption that } a \\text{ and } b \\text{ are coprime. Therefore, our assumption that } \\sqrt{2} \\text{ is rational must be false.}
$$

$$
\\text{Hence, } \\sqrt{2} \\text{ is irrational.}
$$

$$
\\text{Assume for contradiction that } \\sqrt{2} \\text{ is rational. Then we can write } \\sqrt{2} = \\frac{a}{b} \\text{, where } a \\text{ and } b \\text{ are coprime integers (i.e., their greatest common divisor is 1) and } b \\neq 0.
$$

$$
\\text{Squaring both sides, we get:} \\quad 2 = \\frac{a^2}{b^2} \\quad \\Rightarrow \\quad 2b^2 = a^2
$$

$$
\\text{This implies that } a^2 \\text{ is even because it is equal to } 2b^2 \\text{, which is clearly even.}
$$

$$
\\text{Since } a^2 \\text{ is even, } a \\text{ must also be even (because the square of an odd number is odd).}
$$

$$
\\text{Let } a = 2k \\text{ for some integer } k.
$$

$$
\\text{Substituting } a = 2k \\text{ into the equation } 2b^2 = a^2 \\text{, we get:}
$$

$$
2b^2 = (2k)^2 \\quad \\Rightarrow \\quad 2b^2 = 4k^2 \\quad \\Rightarrow \\quad b^2 = 2k^2
$$

$$
\\text{This implies that } b^2 \\text{ is even, so } b \\text{ must also be even.}
$$

$$
\\text{Since both } a \\text{ and } b \\text{ are even, they share a common factor of 2.}
$$

$$
\\text{This contradicts our initial assumption that } a \\text{ and } b \\text{ are coprime. Therefore, our assumption that } \\sqrt{2} \\text{ is rational must be false.}
$$

$$
\\text{Hence, } \\sqrt{2} \\text{ is irrational.}
$$
  `
  }

  return (
    <>
    <div className="container">
      <h2>🦚</h2>
      <img className="logo" src={logo} alt="Tavus Platform Logo" />
        <div className="canvas"></div>
        <div className="toolbar">
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                    <path d="M13 13l6 6"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"/>
                    <line x1="8" y1="12" x2="21" y2="12"/>
                    <line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
            </button>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            </button>
        </div>
        {/* <div className="avatar">JD</div> */}
        <div className="content"><Markdown>{data.content}</Markdown></div>
    </div>
    </>
  )
}

export default App
