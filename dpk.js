const crypto = require('crypto')

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0'
  const MAX_PARTITION_KEY_LENGTH = 256
  const generateHashFromValue = (value) => {
    const data = JSON.stringify(value)
    return crypto.createHash('sha3-512').update(data).digest('hex')
  }

  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }

  let candidate = event.partitionKey || generateHashFromValue(event)

  if (typeof candidate !== 'string') {
    candidate = JSON.stringify(candidate)
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash('sha3-512').update(candidate).digest('hex')
  }

  return candidate
}
