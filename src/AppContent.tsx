import FloatingShapes from './components/FloatingShapes';
import Header from './components/header/Header';
import Settings from './components/settings/Settings';
import Title from './components/Title';

const AppContent = () => {
  return (
    <div className="app-content">
      <FloatingShapes />
      <div className="app-content-wrapper">
        <Title />
        <Header />
        <Settings />
      </div>
    </div>
  );
};
export default AppContent;
