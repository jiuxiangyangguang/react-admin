import Panl from '@/components/TypingCard'

const Menu = () => {
  const cardContent =
    '在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。'
  return (
    <Panl title="用户管理" source={cardContent}>
      删除增加用户
    </Panl>
  )
}

export default Menu
