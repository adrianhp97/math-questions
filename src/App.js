/** Components */
import RightSection from 'views/right-section';

/** Styles */
import * as s from './s.module.scss';

function App() {
  return (
    <div className={s.container}>
      <div>
        test
      </div>
      <div>
        <RightSection />
      </div>
    </div>
  );
}

export default App;
