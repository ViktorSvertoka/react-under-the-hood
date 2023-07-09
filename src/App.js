import './App.css';
import { useState, useCallback } from 'react';
import Button from './components/UI/Button';
import ParagraphOutput from './components/Output/ParagraphOutput';

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const [isTogglingActivated, setIsTogglingActivated] = useState(false);

  console.log('App Component');

  const toogleParagraph = useCallback(() => {
    if (isTogglingActivated) {
      setIsParagraphShown(prevIsParagraphShown => !prevIsParagraphShown);
    }
  }, [isTogglingActivated]);

  const activateToggling = () => {
    setIsTogglingActivated(true);
  };

  return (
    <div className="app">
      <h1>React під Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown} />
      <Button onClick={activateToggling}>Активувати Перемикання</Button>
      <Button onClick={toogleParagraph}>Показати / Приховати</Button>
    </div>
  );
}

export default App;
