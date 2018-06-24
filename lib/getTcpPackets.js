const pcap = require('pcap2')
const { Readable } = require('stream')

const getTCPPackets = (_interface, cb) => {
  const readableStream = Readable()

  const pcap_session = new pcap.Session(_interface, {
    filter: 'ip proto \\tcp'
  })

  readableStream._read = function () {
    pcap_session.on('packet', rawPacket => {
      const packet = pcap.decode.packet(rawPacket);
      readableStream.push(String(packet.payload.payload.payload))
    })
  }

  readableStream.on('data', data => {
    cb(data)
  })

  // readableStream.pipe(process.stdout)
}

module.exports = getTCPPackets
