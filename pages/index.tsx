import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Тест</Htag>
      <Button appearance="primary" arrow="right" className="asdasdasd">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </>
  );
}
