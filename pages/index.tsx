import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Тест</Htag>
      <Button appearance="primary" arrow="right" className="asdasdasd">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
    </>
  );
}
