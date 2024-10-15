import { line } from '../components/Object'

function App_array() {
    const list = line.TKL.sta
    list.forEach((elem, index) => (elem.num = index % 2))
    console.log('list', list)

    /*
     * for loop
     */
    log('for loop', () => {
        for (let i = 0; i < list.length; i++) {
            console.log(list[i], i)
        }
    })

    /*
     * forEach
     */
    log('forEach', () =>
        list.forEach((elem, index, array) => {
            console.log(elem, index)
        })
    )

    /*
     * forEach ---
     */
    log('forEach ---', () => {
        let result = {
            num0: 0,
            num1: 0,
        }
        list.forEach((elem, index, array) => {
            console.log(elem, index)
            if (elem.num === 0) {
                result.num0++
            } else {
                result.num1++
            }
        })
        return result
    })

    /*
     * reduce
     */
    log('reduce', () =>
        list.reduce((result, elem, index, array) => {
            console.log(elem, index)

            // result[elem.code] = elem.name
            // result[elem.name] = elem.code
            // result[index] = index
            // return result

            return {
                ...result,
                [elem.code]: elem.name,
                [elem.name]: elem.code,
                index,
            }
            // return {
            //     ...result,
            //     [elem.code]: elem.name,
            // }
        }, {})
    )

    /*
     * map
     */
    log('map', () =>
        list.map((elem, index, array) => {
            console.log(elem, index)
            return elem.name
        })
    )

    /*
     * find
     */
    log('find', () =>
        // find one
        // return value
        list.find((elem, index, array) => {
            console.log(elem, index)
            return elem.code === null
            // return Boolean
        })
    )

    /*
     * findIndex
     */
    log('findIndex', () =>
        // find one
        // return index
        list.findIndex((elem, index, array) => {
            console.log(elem, index)
            return elem.code === 'YAT'
            // return Boolean
        })
    )

    /*
     * filter
     */
    log('filter', () =>
        // find muti
        // return value array
        list.filter((elem, index, array) => {
            console.log(elem, index)
            return index > 5
            // return Boolean
        })
    )

    /*
     * every
     */
    log('every', () =>
        // return boolean
        list.every((elem, index, array) => {
            console.log(elem, index)
            return elem.num === 10
        })
    )

    /*
     * some
     */
    log('some', () =>
        // return boolean
        list.some((elem, index, array) => {
            console.log(elem, index)
            return elem.num !== 10
        })
    )

    const arr1 = Array(5)
        .fill('')
        .map((v, i) => i)
    const arr2 = Array.from({ length: 5 }, (value, index) => index)
    console.log('arr1', arr1)
    console.log('arr2', arr2)

    return (
        <div>
            <div>Array</div>
            <hr />
        </div>
    )
}

function log(name, callback) {
    console.groupCollapsed(name)
    const result = callback()
    console.log('return', result)
    console.groupEnd()
}

export default App_array
