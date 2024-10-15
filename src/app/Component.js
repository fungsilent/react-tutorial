import { Children, useState } from 'react'
import linesComponents, { data, Test } from '../components/Lines'
import { line } from '../components/Object'

// function App_component() {
//     const [selectedLine, setLine] = useState(null)
//     // const buttons = Object.entries(data).map(([lineCode, lineValue]) => {
//     //     return (
//     //         // https://react.dev/reference/react/Fragment
//     //         // <></> = <Fragment key={key}></Fragment>
//     //         <>
//     //             <Test
//     //                 key={lineCode}
//     //                 input={lineValue.text}
//     //             />
//     //         </>
//     //     )
//     // })

//     // JSX
//     return (
//         <div>
//             {/* <Section>
//                 <Test input={'Hi 0'} />
//                 <Test input={'Hi 1'} />
//                 <Test input={'Hi 2'} />
//                 <Test input={'Hi 3'} />
//             </Section> */}

//             <Section />
//         </div>
//     )

//     // return (
//     //     <div>
//     //         <p>{buttons}</p>
//     //     </div>
//     // )

//     // const componentName = 'Lines9'
//     // const Component = linesComponents[componentName]
//     // console.log(Component)
//     // return (
//     //     <>
//     //         <div>Component {componentName}</div>
//     //         <hr />
//     //         <Component />
//     //     </>
//     // )
// }

// function Section({ children }) {
//     console.log('section', children)
//     return (
//         <>
//             {/* {Children.map(children, (child, index) => {
//                 if (index % 2 === 0) {
//                     return child
//                 }
//                 return null
//             })} */}

//             <ul>im div</ul>
//             <div>
//                 <div></div>
//                 {children}
//             </div>
//         </>
//     )
// }

function App_component() {
    const [selectedLine, setLine] = useState('none')

    const onButtonClick = lineCode => {
        setLine(lineCode)
        // fetch data
        return 111
    }

    // JSX
    return (
        <div>
            <LineButton1 onButtonClick={() => onButtonClick('TKL')} />
            <LineButton1 onButtonClick={() => onButtonClick('HUE')} />
            <LineButton1 onButtonClick={() => onButtonClick('HUI')} />

            <LineButton2
                onButtonClick={onButtonClick}
                lineCode={'TKL'}
            />
            <LineButton2
                onButtonClick={onButtonClick}
                lineCode={'HUE'}
            />
            <LineButton2
                onButtonClick={onButtonClick}
                lineCode={'HUI'}
            />
            <LineDisplay lineCode={selectedLine} />
        </div>
    )
}

function LineButton1({ onButtonClick }) {
    return (
        <button onClick={onButtonClick}>
            <p>button</p>
        </button>
    )
}

function LineButton2({ onButtonClick, lineCode }) {
    return (
        <button onClick={() => onButtonClick(lineCode)}>
            <p>button</p>
        </button>
    )
}

function LineDisplay({ lineCode }) {
    return <div>lineCode: {lineCode}</div>
}

export default App_component
