import './style/App.css';
import './style/Tailwind.css';
import './style/Animations.css';
import { ProjectRoutes } from './routes/ProjectRoutes';

function App() {
  return (
    <div className='bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200'>
      <ProjectRoutes />
    </div>
  );
}

export default App;