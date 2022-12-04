import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Loading } from './components/Loading/Loading';
import SearchHeader from './components/SearchHeader/SearchHeader';
import { Outlet } from 'react-router';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Loading />
        <div className="wrapper">
          <Outlet />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
//인기영상 데이터 불러오기
//

export default App;
