import { MainPage } from '../pages/main-page/main-page';

type AppProps = {
  offersCount: number;
};

const App = ({ offersCount }: AppProps) => (
  <MainPage offersCount={offersCount} />
);

export { App };
