import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Loading } from './Loading/Loading';
import Video from './Video/Video';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <div className="wrapper">
        <div className="search">
          <form>
            <fieldset>
              <legend className="blind">검색</legend>
              <input type="text" value="" />
              <button>Search</button>
            </fieldset>
          </form>
        </div>
        <div>
          <Video></Video>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
//인기영상 데이터 불러오기
//

export default App;
