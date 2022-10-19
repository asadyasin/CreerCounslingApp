import React, { useState } from "react";
import clasess from "./Controls.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Navbars/Header";
import SideNavbar from "../Navbars/SideNavbar";
import UserInputForm from "../InputForm/UserInputForm";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Colleges from "../Colleges/Colleges";
import Degree from "../Degree/Degree";
import Admin from "../Admin/Admin";
import DataContext from "../../Store/data-context";
export default function Controls(props) {
  const [FormIsShown, setFormIsShown] = useState(false);
  const [User, setUser] = useState();
  const ShowFormFun = () => {
    setFormIsShown(true);
  };
  const HideFormFun = () => {
    setFormIsShown(false);
  };
  let matricDegrees = [
    {
      id: 0,
      name: "Matric Science(com)",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "Metriculation in Computer Science helps learners develop an interest in computational thinking and an understanding of the principles of problem-solving using computers.",
      img: "engineering.jpg",
    },
    {
      id: 1,
      name: "Matric Science(bio)",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "Metriculation in Biology helps learners to understand the biological world in which they live and take an informed interest in science and scientific developments.",
      img: "engineering.jpg",
    },
    {
      id: 2,
      name: "Matric Arts",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "All those students who choose arts subjects have vast options for further studies. One who want to be an artist, designer or someone who want to join television or film industry etc, arts is the best for such students.",
      img: "engineering.jpg",
    },
  ];
  let interDegrees = [
    {
      id: 0,
      name: "FSC(Pre-Engineering)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Enginering.",
      description:
        "It is another option for science students after completing matriculation. It is the major and primary step toward the best engineering fields",
      img: "./Material/engineering.jpg",
    },
    {
      id: 1,
      name: "FSC(Pre-Medical)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Medical.",
      description:
        "It is another option for science students after completing matriculation. It the major and primary step toward the best engineering fields",
      img: "Material/engineering.jpg",
    },
    {
      id: 2,
      name: "ICS(Physics)",
      degType: "Intermediate",
      subName: "Intermediate in computer sciences.",
      description:
        "It is another option for science students after completing matriculation. It the major and primary step toward the best engineering fields",
      img: "Material/engineering.jpg",
    },
    {
      id: 3,
      name: "ICS (Statistics)",
      degType: "Intermediate",
      subName: "Faculty of Arts in colleges",
      description:
        "Statistics is the branch of Mathematics, working with analysis, and data collection. Statistics analysis first gather the data, review the data and then conclude results from the data. It is a term used to summarize the data into the mathematical form.",
      img: "engineering.jpg",
    },
    {
      id: 4,
      name: "ICS (Economics)",
      degType: "Intermediate",
      subName: "Faculty of arts in colleges",
      description:
        "Economics is a term used to summarize the data into the mathematical.Economics is the study of how people allocate scarce resources for production, distribution, and consumption, both individually and collectively.",
      img: "engineering.jpg",
    },
    {
      id: 5,
      name: "ICom",
      degType: "Intermediate",
      subName: "Faculty of commerce in colleges",
      description:
        "I.COM program is particularly designed for Commerce degree. Basic concepts of commerce are induced in students who opt the subject. The subject provides a huge ground for upcoming commerce professionals. Students who have an interest in accountancy and economics should take this course.",
      img: "engineering.jpg",
    },
  ];
  return (
    <DataContext.Provider
      value={{
        MatricDegrees: matricDegrees,
        InterDegrees: interDegrees,
        UserData:User,
      }}
    >
      <BrowserRouter>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <Header />
          </div>
          <div className={clasess.item2}>
            <SideNavbar />
          </div>
          <div className={clasess.item3}>
            {FormIsShown && 
            <UserInputForm 
            User={User} 
            setUser={setUser} 
            onClose={HideFormFun}
             />
             }
            <Routes>
              <Route path="/" element={<Home OnClick={ShowFormFun} />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/degree" element={<Degree />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </DataContext.Provider>
  );
}
