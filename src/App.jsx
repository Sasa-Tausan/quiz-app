import Header from './components/Header';
import { motion } from 'framer-motion';
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
      <motion.div
        className='page-wrapper d-flex flex-col'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Header />
        {pageIndex === 0 && <Home />}
        {pageIndex === 1 && <QuizPage />}
        {pageIndex === 2 && <QuizScore />}
      </motion.div>
    </div>
  );
};

export default App;
