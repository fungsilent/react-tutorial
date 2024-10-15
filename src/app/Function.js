import { line } from '../components/Object'

function App_function() {
    const num = 10
    let count = 0

    const func1 = num => num + 5

    const func2 = num => num * 2

    // const func3 = num => {
    //     console.log(num)
    //     return num * 2
    // }

    const func4 = async (num, callback1, callback2) => {
        // func4
        num = 100
        count++

        // func1
        // callback(num) -> call func1
        // result num + 5
        num += 5

        num = callback2(num)
        num = callback1(num)
    }

    // //              arg1  arg2  rest arg
    // const func5 = (num1, num2, ...rest) => {
    //     console.log('num', num1, num2)
    //     console.log('rest', rest)
    //     return 1
    // }

    return (
        <div>
            <p>App_arrowFunction</p>
            <p>Num : {num}</p>
            {/* <p>fun1 = {func1(num)}</p>
            <p>fun2 = {Object.values(func2(num))}</p>
            <p>fun3 = {func3(num)}</p> */}
            <hr />
            <p>fun4 = {func4(num, func1, func2)}</p>
            <hr />
            {/* <p>fun5 = {func5(1, 2, 3, 4, 5, 6)}</p> */}
        </div>
    )
}

export default App_function
