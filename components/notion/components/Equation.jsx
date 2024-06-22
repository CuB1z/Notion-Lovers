import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // Import KaTeX CSS

export default function Equation({ math, inline }) {
    return inline ? <InlineMath math={math} /> : <BlockMath math={math} />
}