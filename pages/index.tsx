import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Тест</Htag>
      <Button appearance="primary" arrow="right" className="asdasdasd">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Маленький</Tag>
      <Tag size="m" color="red">RED</Tag>
      <Tag size="s" color="green">GREEN</Tag>
      <Tag color="primary">Маленький</Tag>
    </>
  );
}
