import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Industrialtraining from "../Pages/Industrialtraining";
import Popularcourses from "../Pages/Popularcourses";
import Gallery from "../Pages/Gallery";
import Feedback from "../Pages/Feedback";

// OLD COURSES
import SpringHibernate from "../Pages/SpringHibernate";
import NetFrame from "../Pages/NetFrame";
import CodeIgniter from "../Pages/CodeIgniter";
import Laravel from "../Pages/Laravel";
import Django from "../Pages/Django";
import Wordpress from "../Pages/Wordpress";

// COURSES
import Java from "../Pages/courses/Java";
import Php from "../Pages/courses/Php";

import Python from "../Pages/courses/Python";
import Cpp from "../Pages/courses/Cpp";
import DigitalMarketing from "../Pages/courses/DigitalMarketing";
import WebDesigning from "../Pages/courses/WebDesigning";
import Android from "../Pages/courses/Android";
import Illustrator from "../Pages/courses/Illustrator";
import Photoshop from "../Pages/courses/Photoshop";
import Animate from "../Pages/courses/Animate";
import Excel from "../Pages/courses/Excel";
import Angular from "../Pages/courses/Angular";
import Nodejs from "../Pages/courses/Nodejs";
import Reactjs from "../Pages/courses/Reactjs";
import DataScience from "../Pages/courses/DataScience";
import MachineLearning from "../Pages/courses/MachineLearning";
import SapFico from "../Pages/courses/SapFico";
import SapAbap from "../Pages/courses/SapAbap";
import ArtificialIntelligence from "../Pages/courses/ArtificialIntelligence";
import Tally from "../Pages/courses/Tally";
import Ecommerce from "../Pages/courses/Ecommerce";
import DomainHosting from "../Pages/courses/DomainHosting";
import Sql from "../Pages/courses/Sql";
import Dotnet from "../Pages/courses/Dotnet";
import CMAFoundation from "../Pages/courses/CMAFoundation";

// 404 PAGE
const NotFound = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      404 Page Not Found
    </h1>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= MAIN PAGES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/industrial-training" element={<Industrialtraining />} />
        <Route path="/courses" element={<Popularcourses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* ================= OLD COURSES ================= */}
        <Route path="/spring" element={<SpringHibernate />} />
        <Route path="/netframe" element={<NetFrame />} />
        <Route path="/codeigniter" element={<CodeIgniter />} />
        <Route path="/laravel" element={<Laravel />} />
        <Route path="/django" element={<Django />} />
        <Route path="/wordpress" element={<Wordpress />} />

        {/* ================= MODERN COURSES ================= */}
        <Route path="/java" element={<Java />} />
        <Route path="/php" element={<Php />} />
        <Route path="/python" element={<Python />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path="/android" element={<Android />} />
        <Route path="/illustrator" element={<Illustrator />} />
        <Route path="/photoshop" element={<Photoshop />} />
        <Route path="/animate" element={<Animate />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/nodejs" element={<Nodejs />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/sap-fico" element={<SapFico />} />
        <Route path="/sap-abap" element={<SapAbap />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/tally" element={<Tally />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/domain-hosting" element={<DomainHosting />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/dotnet" element={<Dotnet />} />
        <Route path="/cma-foundation" element={<CMAFoundation />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;