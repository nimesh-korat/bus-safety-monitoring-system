import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Feedback from './Pages/Feedback';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import LiveData from './Pages/LiveData';
import Complaint from './Pages/Complaint';
import Alerts from './Pages/Alerts';
import GetHistoryData from './Pages/GetHistoryData';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/liveData" element={<LiveData />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/getHistoryData" element={<GetHistoryData />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
