import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css' // Import KaTeX CSS

export default function Equation({ math, inline }) {
    if (inline) {
        return (
                <InlineMath math={math} />
        )
    }
}