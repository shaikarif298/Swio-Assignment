/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className='homebody'>
      <section1 >
        <h1 className='textwhite'><b>Sleeve</b> 2
        <br/>
        The ultimate music accessory for your Mac.

        </h1>
        <p className='textwhite'>Sleeve sits on the desktop, displaying and controlling the music you're <br /> currently playing in 
                Image of an app icon Apple Music, Image of an app icon Spotify, and Image of an app icon Doppler.</p>
        <button className='button' type="button" onClick={()=> navigate("/PaymentPage")}>bill pay</button>
      </section1>

      <section2>
        <span className='transperant'>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</span>
        <br />
        <span>NEW IN 2.0</span>
        <br />
        <h1 className='textwhite'>
        Themes. Unlimited themes.
        </h1>
        <p className='textwhite'>Themes in Sleeve make creating and switching between customizations easy. Share your own creations <br /> with friends and install as many themes as you like with just a double-click.</p>
        <br />
        <img src="https://images.unsplash.com/photo-1647489238455-fd12b591d064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBwbGF5ZXJzJTIwc3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D" alt="player img" height='800vh' width={'1000vh'}/>
        <div style={{display:'flex', alignSelf: 'center'}}>
        <img  style={{margin : '10px', marginLeft: "500px"}} src="https://replay.software/sleeve/images/ThemeUIActiveDark@2x.png" alt="lll" />
        </div>
      </section2>

      <section3>
        <span style={{color : 'violet', fontSize: '10px'}}>CUSTOMIZATION</span>
        <h1 className='textwhite'>Countless ways to customize.</h1>
        <p className='textwhite'>Customization is at the core of the Sleeve experience — choose from any combination <br /> of design choices, behaviors and settings to make Sleeve at home on your desktop.</p>
        <br /> <br /><div style={{display: "inline-block;"}}>
              <img className='z=0' style={{width:"70px", height :"70px", marginLeft: '-10px' , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayHotkeysDark@2x.png" alt="Image 1"/>
              <img className='z=10' style={{width:"80px", height :"80px", marginLeft: '-10px' , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayWindowDark@2x.png" alt="Image 2"/>
              <img className='z=0' style={{width:"90px", marginLeft: '-10px', height :"90px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayInterfaceDark@2x.png" alt="Image 3"/>
              <img className='z=0' style={{width:"100px", marginLeft: '-10px', height :"100px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png" alt="Image 4"/>
              <img className='z=0' style={{width:"110px", marginLeft: '-10px', height :"110px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayThemeDark@2x.png" alt="Image 5"/>
              <img className='z=0' style={{width:"100px", marginLeft: '-10px', height :"100px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayTrackDark@2x.png" alt="Image 6"/>
              <img className='z=0' style={{width:"90px", marginLeft: '-10px', height :"90px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayPositionDark@2x.png" alt="Image 7"/>
              <img className='z=0' style={{width:"80px", marginLeft: '-10px', height :"80px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArrayArtworkDark@2x.png" alt="Image 8"/>
              <img className='z=0' style={{width:"70px", marginLeft: '-10px', height :"70px" , transition: 'opacity 0.5s ease 0.5s', transform :'0.5s ease', opacity: '1'}} src="https://replay.software/sleeve/images/IconArraySettingsDark@2x.png" alt="Image 9"/>
            </div>
      </section3>
<br />
      <section4 class="indent-1">
        <br />
            <section>
                  <img height={'50px'} width={'50px'} src='https://replay.software/sleeve/images/IconArrayArtworkDark@2x.png'/>
                  <h3 className='textwhite'>Artwork</h3>
                  <p className='textwhite'>Scale artwork all the way up or all the way down. Round the corners or leave them square.    
                      <br/>Choose shadow and lighting effects to bring your album artwork to life.
                      <br/>Or hide it completely.</p>
              </section>

              <section>
                  <div className='box'>
                    <img className='image' id='i1' width={'330px'}  src='https://replay.software/sleeve/images/Artwork1Dark@2x.jpg'/>
                    <img className='image' width={'330px'}  src='https://replay.software/sleeve/images/Artwork2Dark@2x.jpg'/>
                    <img className='image' width={'330px'}  src='https://replay.software/sleeve/images/Artwork3Dark@2x.jpg'/>

                  </div>
            </section>
      </section4>  
      
    </div>
  );
};

export default HomePage;
