/** Components */
import LeftSection from 'views/left-section';
import RightSection from 'views/right-section';

/** Styles */
import * as s from './s.module.scss';

function App() {
  return (
    <div className={s.container}>
      <div>
        <LeftSection />
      </div>
      <div>
        <RightSection />
      </div>
    </div>
  );
}

export default App;
