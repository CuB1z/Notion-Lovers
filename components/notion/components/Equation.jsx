import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css' // Import KaTeX CSS

export default function Equation(props) {
    // Retrieve the math expression from the props based on the type of the block
    const math = props.inline ? props.math : props.block?.properties?.title[0][0]

    // Render the math expression as an inline or block element
    return props.inline ? <InlineMath math={math} /> : <BlockMath math={math} />
}