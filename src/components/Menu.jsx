import { quizData } from '../assets/data';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const Menu = () => {
  const { state, dispatch } = useContext(QuizContext);

  const selectQuizSection = (title) => {
    const section = quizData.find((item) => item.title === title);
    dispatch({ type: 'SELECT_QUIZ_SECTION', payload: section });
  };

  const { themeMode } = state;
  return (
    <ul className='quiz-section-list d-flex flex-col'>
      {quizData.map((item) => {
        const { icon, title } = item;
        return (
          <li
            key={title}
            className={`item d-flex align-center element-bg-${themeMode} box-shadow-${themeMode}`}
            onClick={() => selectQuizSection(title)}
          >
            <img src={icon} alt='' />
            <h3 className={`heading-s fw-medium primary-text-clr-${themeMode}`}>
              {title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
