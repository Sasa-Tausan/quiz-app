import { createContext, useReducer } from 'react';

export const QuizContext = createContext();

const initialState = {
  isDarkMode: false,
  themeMode: 'light',
  pageIndex: 2,
  quizSection: null,
  questionIndex: null,
  questionNumber: 1,
  progressBar: 10,
  userAnswer: null,
  correctAnswers: 0,
  isAnswerCorrect: null,
  isAnswered: false,
  isAnswerSubmitted: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {
        ...state,
        isDarkMode: action.payload,
        themeMode: action.payload ? 'dark' : 'light',
      };
    case 'SELECT_QUIZ_SECTION':
      return {
        ...state,
        quizSection: action.payload,
        pageIndex: 1,
        questionIndex: 0,
      };
    case 'SELECT_ANSWER':
      return {
        ...state,
        userAnswer: action.payload,
      };
    case 'NUMBER_CORRECT_ANSWERS':
      return {
        ...state,
        correctAnswers: action.payload,
      };
    case 'UPDATE_IS_ANSWER_CORRECT': {
      return {
        ...state,
        isAnswerCorrect: action.payload,
      };
    }
    case 'UPDATE_IS_ANSWERED': {
      return {
        ...state,
        isAnswered: true,
      };
    }
    case 'IS_ANSWER_SUBMITTED': {
      return {
        ...state,
        isAnswerSubmitted: true,
      };
    }

    case 'NEXT_QUESTION': {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        questionNumber: state.questionNumber + 1,
        progressBar: state.progressBar + 10,
        userAnswer: null,
        isAnswerCorrect: null,
        isAnswered: false,
        isAnswerSubmitted: false,
      };
    }
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
