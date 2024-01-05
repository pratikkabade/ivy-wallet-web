import './styles/App.css';
import './styles/Tailwind.css';
import './styles/Animations.css';
import { ProjectRoutes } from './routes/Routes';
import { NewHome } from './pages/NewHome';

function App() {
  return (
    <div className='bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200'>
      {/* <ProjectRoutes /> */}
      <NewHome />
    </div>
  );
}

export default App;