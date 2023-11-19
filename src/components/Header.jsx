import ThemeSwitch from './ThemeSwitch';
import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const Header = () => {
  const { state } = useContext(QuizContext);

  const { quizSection, themeMode } = state;
  return (
    <header className='d-flex align-center space-between'>
      <div className='header-quiz-section d-flex align-center'>
        {quizSection?.icon && <img src={quizSection.icon} alt='' />}
        {quizSection?.title && (
          <h3 className={`heading-s fw-medium primary-text-clr-${themeMode}`}>
            {quizSection.title}
          </h3>
        )}
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
