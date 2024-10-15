import { line } from '../components/Object'

function App_object() {
    console.log('line', line)
    console.log('Object.keys', Object.keys(line))
    console.log('Object.values', Object.values(line))
    console.log('Object.entries', Object.entries(line))

    const arr1 = [1, 2, 3]
    const arr2 = [...arr1] // clone - shallow copy / deep copy

    const obj1 = { name: 'joey' }
    const obj2 = { ...obj1 }
    // console.log(obj1, obj2)

    // obj1.name = 'jack'
    // console.log(obj1, obj2)

    let obj3 = {}
    const age = 30
    obj3 = {
        ...obj3,
        // age: age,
        age,
    }

    console.log('2', obj3)

    return (
        <div>
            <div>Object</div>
            <hr />
            {/* <Component /> */}
        </div>
    )
}

export default App_object
