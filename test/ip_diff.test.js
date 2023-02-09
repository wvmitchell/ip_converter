const { ipDiff } = require('../src/ip_diff.js')

describe("ipDiff", () => {
  test('it can provide the diff when ips are the same', () => {
    const ip1 = '0.0.0.255'
    const ip2 = '0.0.0.255'
    expect(ipDiff(ip1, ip2)).toBe(0)
  })

  test('it can provide the diff when ips are off by 1', () => {
    const ip1 = '0.0.0.255'
    const ip2 = '0.0.0.254'
    const ip3 = '0.0.1.0'

    // expect(ipDiff(ip1, ip2)).toBe(1)
    expect(ipDiff(ip1, ip3)).toBe(1)
  })

  test('it can provide the diff when other ips are off by 1', () => {
    const ip1 = '1.0.0.255'
    const ip2 = '1.0.0.254'
    const ip3 = '1.0.1.0'

    expect(ipDiff(ip1, ip2)).toBe(1)
    expect(ipDiff(ip1, ip3)).toBe(1)
  })

  test('it can provide the diff for various ips', () => {
    var correctNum = 256

    expect(ipDiff("150.0.0.0", "150.0.0.1")).toBe(1);
    expect(ipDiff("10.0.0.0", "10.0.0.50")).toBe(50);
    expect(ipDiff("20.0.0.10", "20.0.1.0")).toBe(246);
    expect(ipDiff("10.11.12.13", "10.11.13.0")).toBe(243);
    expect(ipDiff("160.0.0.0", "160.0.1.0")).toBe(256);
    expect(ipDiff("170.0.0.0", "170.1.0.0")).toBe(65536);
    expect(ipDiff("50.0.0.0", "50.1.1.1")).toBe(65793);
    expect(ipDiff("180.0.0.0", "181.0.0.0")).toBe(16777216);
    expect(ipDiff("1.2.3.4", "5.6.7.8")).toBe(67372036);
    expect(ipDiff("0.0.0.0", "255.255.255.255")).toBe(2 ** 32 - 1);
  })
})
