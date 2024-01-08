import './App.scss';
import Appbar from './components/Appbar';
import AppLayout from './layout/AppLayout';
function App() {
  return (
    <div>
      <Appbar />
      <AppLayout>
        <div>sidebar!</div>
        <div>content!</div>
      </AppLayout>
    </div>
  );
}

export default App;
