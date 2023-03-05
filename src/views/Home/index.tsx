import Panl from '@/components/TypingCard'
import { token, userInfo } from '@/store/Module/user'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [text, setText] = useRecoilState(userInfo)
  const tokenRec = useRecoilValue(token)

  return (
    <Panl title="主页" source={'图表及配置信息'}>
      图表及配置信息
    </Panl>
  )
}

export default Home
