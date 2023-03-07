const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })

  it('returns partitionKey if it exists in the event object', () => {
    const event = { partitionKey: 'partitionKey' }
    expect(deterministicPartitionKey(event)).toBe('partitionKey')
  })

  it('generates hashed partition key if the event object does not have a partitionKey property', () => {
    const event = { property: 'value' }
    const hash =
      '118dd3237b94e86dc939bf28cdfbb24265101e754178c29b80f46efcaedc84aa5c2c9711a5b6438389c87f9f0ba0a2f105ec272412b69bcbeeba8eb96cfb7771'
    expect(deterministicPartitionKey(event)).toBe(hash)
  })

  it('returns truncated key if event.partitionKey is bigger than 256', () => {
    const event = { partitionKey: 'partitionKey'.repeat(256) }
    const truncatedHash =
      '0ace18235169344d38cad3ed4edae26f9f814e9523f4ea467bb8b2a9d827747fccc03cef2c588891652a56bf85068216ba177ada1e3f4d6a2e0a469af30de909'
    expect(deterministicPartitionKey(event)).toBe(truncatedHash)
  })
})
