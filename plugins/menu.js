exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'مࢪڪز التحميلات',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'مࢪڪز الڪࢪوبات',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'TEXT MAKER',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'USER INFO',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }, {
         title: 'UTILITIES',
         rowId: `${isPrefix}menutype 5`,
         description: ``
      }, {
         title: 'مࢪڪز المطوࢪ',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }, {
         title: 'SPECIAL',
         rowId: `${isPrefix}menutype 7`,
         description: ``
      }]
      await client.sendList(m.chat, '', global.db.setting.msg, '© neoxr-bot v2.2.0', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
