import * as React from 'react';
import {Routes,Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon';
import { CollectionDetails } from './routes/NFTMinter/CollectionDetails';
import NFTMinter from './routes/NFTMinter/NFTMinter';
const Welcome = React.lazy(() => import('./routes/welcome/Welcome'));
const Dashboard = React.lazy(() => import('./routes/dashboard/Dashboard'));
const DeployCollection = React.lazy(() => import('./routes/DeployCollection'));


const Loading = () => <p>Loading ...</p>;
const AppRouter = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
    <Route path='/' element={<Welcome/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/deploy' element={<DeployCollection/>} />
      <Route path='/minter' element={<NFTMinter/>} />
      <Route path='/browse/:chainId/:contractAddress' element={<CollectionDetails/>} />
      <Route path='/market' element={<ComingSoon/>} />
      <Route path='/about' element={<ComingSoon/>} />
      <Route path='/team' element={<ComingSoon/>} />
    </Routes>
  </React.Suspense>
);
}
export default AppRouter;