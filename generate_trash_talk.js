function generateTrashTalk(target) {
  const targetTask = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const taskOptions = targetTask[target]
  if (!target) {
    return `Warning: 請選擇一個職業`
  }
  const task = taskOptions[Math.floor(Math.random() * taskOptions.length)]
  return `身為一個${target}，${task}，${phrase[Math.floor(Math.random() * phrase.length)]}吧！`
}

module.exports = generateTrashTalk
