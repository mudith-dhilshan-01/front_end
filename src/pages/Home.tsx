import Sidebar from '../components/SideBar';
import '../css/Home.css'


function Home(){
  
    return(
<div className="home-container">
          <Sidebar /> {/* Sidebar included here */}
        <div className="content">
          <div className='flex-right'>
          <h1 style={{ fontSize: '36px',fontWeight: 'bold' }}>Welcome to the Tech World</h1>
        </div>
        <p>This is your dashboard content area.</p>
        {/* You can add more content here for your home page */}
      </div>
    </div>
  


)
}
    


export default Home;