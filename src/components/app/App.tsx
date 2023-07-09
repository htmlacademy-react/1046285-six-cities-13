import { Main } from '../main/main';

type AppProps = {
  offersCount: number;
};

const App = ({ offersCount }: AppProps) => (
  <Main offersCount={offersCount} />
);

export { App };
