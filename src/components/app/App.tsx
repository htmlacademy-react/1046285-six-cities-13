import { Main } from "../main/main";

type AppProps = {
  offersCount: number;
};

const App = ({offersCount}: AppProps) => {
  return (
    <Main offersCount={offersCount} />
  );
}

export { App };
