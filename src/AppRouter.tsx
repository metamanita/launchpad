import * as React from 'react';
import {Routes,Route } from 'react-router-dom'
const Welcome = React.lazy(() => import('./routes/Welcome'));
const Dashboard = React.lazy(() => import('./routes/Dashboard'));
const DeployCollection = React.lazy(() => import('./routes/DeployCollection'));
const About = React.lazy(() => import('./routes/About'));
const Team = React.lazy(() => import('./routes/Team'));

const Loading = () => <p>Loading ...</p>;
const AppRouter = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
    <Route path='/' element={<Welcome/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/deploy' element={<DeployCollection/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/team' element={<Team/>} />
    </Routes>
  </React.Suspense>
);
}
export default AppRouter;