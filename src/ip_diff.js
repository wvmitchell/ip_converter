const ipStringHandler = (ip) => ip.split('.').map(ip => parseInt(ip))

const findHigherIp = (a, b) => {
    let higherIp
    let i = 0
    while(!higherIp && i < 4) {
        if (a[i] > b[i]) {
            higherIp = {hi: a, lo: b}
        } else if (a[i] < b[i]) {
            higherIp = {hi: b, lo: a}
        } else if (a[i] === b[i]) {
            i++
        }
    }
    return higherIp
}

const calculateDiff = (ipObj) => {
    const {hi, lo} = ipObj
    return ()
}

module.exports = {
    ipDiff(a, b) {
        if (a === b) {
            return 0
        }
        const ipSort = findHigherIp(ipStringHandler(a), ipStringHandler(b))

        console.log(ipSort)
    }
}