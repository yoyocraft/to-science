import { Account, Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import React from 'react'

const AptosAccount: React.FC = () => {
  console.log('进入AptosAccount组件')

  // Setup the client
  const config = new AptosConfig({ network: Network.TESTNET })
  const aptos = new Aptos(config)
  console.log(aptos)
  const { account, signAndSubmitTransaction } = useWallet()
  console.log(account?.address)

  // 定义一个状态来存储输出的文字
  const [outputText, setOutputText] = React.useState('')

  // 定义一个处理函数，用于更新状态并输出文字
  const handleButtonClick = () => {
    setOutputText('按钮被点击了！')
  }
  return (
    <div>
      {/* 按钮元素，点击时调用 handleButtonClick 函数 */}
      <button onClick={handleButtonClick}>点击我</button>
      {/* 显示输出文字的段落元素 */}
      <p>{outputText}</p>
    </div>
  )
}
export default AptosAccount
