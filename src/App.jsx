import Header from './components/Header';

import { useContext } from 'react';
import { QuizContext } from './components/QuizProvider';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import QuizScore from './components/QuizScore';

const App = () => {
  const { state } = useContext(QuizContext);
  const { themeMode, pageIndex } = state;

  return (
    <div
      className={`app-container main-bg-${themeMode} bg-pattern bg-pattern-${themeMode}`}
    >
      <div className='page-wrapper d-flex flex-col'>
        <Header />
        {pageIndex === 0 && <Home />}
        {pageIndex === 1 && <QuizPage />}
        {pageIndex === 2 && <QuizScore />}
      </div>
    </div>
  );
};

export default App;
