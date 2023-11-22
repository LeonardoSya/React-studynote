import Section from './Section';
import Heading from './Heading';
import './App.css'

// Context让父组件为它下面的整个组件树提供数据

export default function Page() {
  return (
    <Section>
      <Heading>header</Heading>
      <Section>
        <Heading>header</Heading>
        <Heading>header</Heading>
        <Section>
          <Heading>header</Heading>
          <Heading>header</Heading>
          <Heading>header</Heading>
        </Section>
      </Section>
    </Section>
  )
}

// 使用context前：先考虑传递props，或者将jsx作为children传递

// Context 的使用场景
// 主题： 如果你的应用允许用户更改其外观（例如暗夜模式），你可以在应用顶层放一个 context provider，并在需要调整其外观的组件中使用该 context。
// 当前账户： 许多组件可能需要知道当前登录的用户信息。将它放到 context 中可以方便地在树中的任何位置读取它。某些应用还允许你同时操作多个账户（例如，以不同用户的身份发表评论）。在这些情况下，将 UI 的一部分包裹到具有不同账户数据的 provider 中会很方便。
// 路由： 大多数路由解决方案在其内部使用 context 来保存当前路由。这就是每个链接“知道”它是否处于活动状态的方式。如果你创建自己的路由库，你可能也会这么做。
// 状态管理： 随着你的应用的增长，最终在靠近应用顶部的位置可能会有很多 state。许多遥远的下层组件可能想要修改它们。通常 将 reducer 与 context 搭配使用来管理复杂的状态并将其传递给深层的组件来避免过多的麻烦。