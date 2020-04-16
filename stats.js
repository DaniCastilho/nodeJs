const os = require('os');
const { freemem, totalmem } = os

const convertoToMb = value => parseInt(value /1024/1024)

const total = convertoToMb(totalmem())
const mem = convertoToMb(freemem())

const percents = parseInt((mem / total) * 100)

const stats = {
  free: `${mem} MB` ,
  total: `${total} MB` ,
  usage: `${percents}%` ,
}
console.table(stats)
