import './App.css';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import AboutMe from './components/aboutme/AboutMe';
import Employee from './components/employeeinformation/Employee';
import PresidentVotes from './components/Presidents/PresidentVotes';
// import EmployeeInfo from './components/employeeinformation/EmployeeInfo';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <Employee />
      <PresidentVotes />
      <Footer />
    </div>
  );
}

export default App;
