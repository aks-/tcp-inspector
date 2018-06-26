const pcap = require('pcap2')
const through2 = require('through2')

const th = through2(function (chunk, enc, cb) {
  this.push(Buffer.from(chunk))
  cb()
})

const getTCPPackets = (_interface) => {
  const pcap_session = new pcap.Session(_interface, {
    filter: 'ip proto \\tcp'
  })

  pcap_session.on('packet', rawPacket => {
    const packet = pcap.decode.packet(rawPacket);
    th.write(String(packet.payload.payload.payload))
  })

  return th
}

module.exports = getTCPPackets
