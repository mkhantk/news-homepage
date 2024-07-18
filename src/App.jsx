import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import menuClose from './assets/icon-menu-close.svg'
import menu from './assets/icon-menu.svg'
import gaming from './assets/image-gaming-growth.jpg'
import retro from './assets/image-retro-pcs.jpg'
import laptop from './assets/image-top-laptops.jpg'
import web3Desktop from './assets/image-web-3-desktop.jpg'
import web3Mobile from './assets/image-web-3-mobile.jpg'
import logo from './assets/logo.svg'

function App() {
  // const [count, setCount] = useState(0)
  const [exitMenu, setExitMenu] = useState(() => {
    return (
      <img id='menu' src={menu} alt='menu'/>
    )
    
  })
  

  const handleClick = (e) => {
    console.log(e.currentTarget.firstChild.id)
    if(e.currentTarget.firstChild.id === 'menu') {
      setExitMenu(() => {
        return (
        <img id='menuClose' src={menuClose} alt="menu close"/>
      )
      })
      document.getElementById('navi').classList.remove('visiblity')
      document.getElementById('overlay').classList.remove('visiblity')
      
    } else {
      setExitMenu(() => {
        return (
        <img id='menu' src={menu} alt='menu' />
      )
      })
      document.getElementById('navi').classList.add('visiblity')
      document.getElementById('overlay').classList.add('visiblity')
    }
  }

  return (
    <>
      <div id='container' className='container flex flex-col justify-center items-center min-h-screen p-5 gap-5 pb-32 md:w-4/5 m-auto'>
        <header className='flex flex-row justify-end items-center gap-5 w-full'>
          <img src={logo} alt="logo" className='mr-auto' />
          
          <nav id='navi' className='menu max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:bg-white max-md:w-[300px] visiblity max-md:z-[9990]'>
            <ul className='flex gap-5 justify-center items-center h-full list-none max-md:flex-col max-md:items-start p-5 max-md:justify-start max-md:py-32'>
              <li><a href="#">Home</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </nav>
          <button onClick={handleClick} 
          className='hidden max-md:block max-md:z-[9999]'>{exitMenu}</button>
        </header>

        <main className='grid grid-cols-1 text-start gap-10 md:grid-cols-3'>
          <div className='intro grid gap-5 md:grid-cols-2 md:col-span-2'>
            <picture className='md:col-span-2 m-0'>
              <source media='(min-width: 768px)' srcSet={web3Desktop}/>
              <img src={web3Mobile} alt="web 3 imgs" />
            </picture>
            <div className='title text-4xl font-extrabold mr-8 md:text-5xl '>
            The Bright Future of Web 3.0?
            </div>
            <p className='flex flex-col justify-between gap-5'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
            <br />
            <button className='readMore mr-auto px-5 py-3 text-sm font-bold tracking-[3px] bg-softRed text-black hover:text-grayishBlue hover:bg-veryDarkBlue'>READ MORE</button>
            </p>
            
          </div>

          <div className='new bg-veryDarkBlue p-5 grid'>
            <div className='text-softOrange text-2xl font-bold'>New</div>
            <div className='py-10 border-b border-b-grayishBlue'>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className='py-10 border-b border-b-grayishBlue'> 
              <h3>The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className='pb-5 pt-10'>
              <h3>Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>

          <div className='rank grid gap-10 md:col-span-3 md:grid-cols-3'>
            <div className='grid grid-cols-3 gap-5'>
              <img src={retro} alt="retro" />
              <div className='text'>
                <div className='number'>01</div>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <img src={laptop} alt="laptop" />
              <div className='text'>
                <div className='number'> 02</div>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <img src={gaming} alt="gaming" />
              <div className='text'>
                <div className='number'> 03</div>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </main>
        <div id='overlay' className='fixed inset-0 bg-black opacity-50 md:hidden visiblity z-[999]'></div>
        <footer className="attribution text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Min Khant Kyaw</a>.
        </footer>
      </div>  
        
        
    </>
  )
}

export default App
