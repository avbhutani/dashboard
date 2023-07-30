import "./style.css"

export default function Header() {
  return (
   <div>
   
  
    <header id="header" class="header d-flex align-items-center">
  
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
  
          <h1>DocSeva🧑‍⚕️<span>.</span></h1>
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>   
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
      </div>
    </header>
   </div>
  )
}
