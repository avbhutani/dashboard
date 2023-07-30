import Header from "../../components/home/header/Header";
import Sidebar from "../../components/home/sidebar/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <div className="home_wrapper">
        <Header />
        <section>
        <Sidebar/>
        </section>
        <section className="main"></section>
    </div>
  );
}
