import { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import Menu from './Menu';

const Home = () => {
  const { state } = useContext(QuizContext);
  const { themeMode } = state;
  return (
    <main className='page-container d-grid'>
      <section className='main-title-section d-flex flex-col'>
        <h1 className={`heading-l fw-light primary-text-clr-${themeMode}`}>
          Welcome to the <br />
          <span className='fw-medium'>Frontend Quiz!</span>
        </h1>
        <p className={`body-s italic secondary-text-clr-${themeMode}`}>
          Pick a subject to get started.
        </p>
      </section>
      <Menu />
    </main>
  );
};

export default Home;
