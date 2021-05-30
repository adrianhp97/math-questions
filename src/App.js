/** Components */
import LeftSection from 'views/left-section';
import RightSection from 'views/right-section';

/** Store */
import ToastContainer from '_shared/toast';
import { PageProvider } from '_shared/toast/store';

/** Styles */
import * as s from './s.module.scss';

function App() {
  return (
    <PageProvider>
      <ToastContainer />
      <div className={s.container}>
        <div>
          <LeftSection />
        </div>
        <div>
          <RightSection />
        </div>
      </div>
    </PageProvider>
  );
}

export default App;
