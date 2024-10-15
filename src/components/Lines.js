export const data = {
    AEL: {
        text: '機場快線',
        color: '#3d9ea0',
        sta: [
            { code: 'HOK', name: '香港' },
            { code: 'KOW', name: '九龍' },
            { code: 'TSY', name: '青衣' },
            { code: 'AIR', name: '機場' },
            { code: 'AWE', name: '亞洲國際博覽館' },
        ],
    },
    TKL: {
        text: '將軍澳線',
        color: '#8d45ab',
        sta: [
            { code: 'NOP', name: '北角' },
            { code: 'QUB', name: '鰂魚涌' },
            { code: 'YAT', name: '油塘' },
            { code: 'TIK', name: '調景嶺' },
            { code: 'TKO', name: '將軍澳' },
            { code: 'LHP', name: '康城' },
            { code: 'HAH', name: '坑口' },
            { code: 'POA', name: '寶琳' },
        ],
    },
}
export const Test = ({ input }) => {
    return <div>{input}</div>
}
// Q: 以下邊個係有效Component?
// Wil -> 2 5 7 8 9
// kenny -> 2 3 5 8 9
export const Lines1 = () => {
    return data
}

export const Lines2 = () => {
    return <div>{data.TKL.text}</div>
}

export const Lines3 = () => {
    return data.TKL.text
}

export const Lines4 = () => {
    return data.TKL.sta
}

export const Lines5 = () => {
    return Lines2
}

export const Lines6 = () => {
    return [<div>Hi</div>, <div>Lam</div>]
}

export const Lines7 = () => {
    return [Lines2]
}

export const Lines8 = () => {
    return [<Lines2 />]
}

export const Lines9 = () => {
    return [[<Lines2 />], <Lines2 />, [[[<Lines2 />]]]]
}

export default {
    Lines1,
    Lines2,
    Lines3,
    Lines4,
    Lines5,
    Lines6,
    Lines7,
    Lines8,
    Lines9,
}
