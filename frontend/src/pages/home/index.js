import Header from "../../components/home/header/Header";
import "./style.css";

export default function Home() {
  return (
    <div className="home_wrapper">
        <Header />
      <section className="sidebar">
        <div className="sidebar_header">
            <h1>Dashboard</h1>
        </div>
      </section>
        <section className="main"></section>
    </div>
  );
}
