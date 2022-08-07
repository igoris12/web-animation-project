import { useReducer } from 'react';
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Page from "./components/page/Page";
import OptionsReducer from "./reducers/OptionsReducer";
import OptionsContext from "./reducers/OptionsContext";
import GalleryDatadReducer from './reducers/GalleryDataReducer';
import GalleryDataContext from './reducers/GalleryDataContext';
import data from './components/Portfolio/data/portfolioData';

function App() {
  const [opotions, dispatch] = useReducer(OptionsReducer, { animation: 1, color: '#00A3E1' })
  const [galleryData, galleryDatadispatch] = useReducer(GalleryDatadReducer, data)
  return (
    <OptionsContext.Provider value={{ optionsState: opotions, optionsDispatch: dispatch }}>
      <GalleryDataContext.Provider value={{ galleryData: galleryData, galleryDatadispatch: galleryDatadispatch }}>
        <div className="App">
          <LoadingPage />
          <Page />
        </div>
      </GalleryDataContext.Provider>
    </OptionsContext.Provider>
  );
}

export default App;
