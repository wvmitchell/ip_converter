const ipUnstringer = (ip) => ip.split('.').map(ip => parseInt(ip))

const ipTotaler = (ip) => {
     return ip.reduce((acc, cV, index) => {
        acc += cV * Math.pow(256, ip.length - 1 - index)
        return acc
    }, 0)
}

module.exports = {
    ipDiff: (a, b) => Math.abs(ipTotaler((ipUnstringer(a))) - ipTotaler(ipUnstringer(b)))
}