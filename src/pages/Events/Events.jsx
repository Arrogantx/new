import React from 'react'
import "./events.scss"
import EventsBg from '../../components/EventsBg/EventsBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import ComingEventsData from '../../Data/ComingEventData'
import PastEventData from '../../Data/PastEventData'

const Events = () => {
  return (
    <section className='events'>
      <div className="wrapper">
      <EventsBg />
        <div className="event-container  animate-turnOff">
          <div className="events">
           <h2>Upcoming Events</h2>
           <div className="cards">
            {ComingEventsData.map((item) => {
                return(
                    <div className="card">
                <img src={item.img} alt="" />
                <h3>🎟️ {item.title}</h3>
                <p className='location'>{item.location}</p>
                <p className='time'>{item.date}</p>
                <p className='text'>{item.text}</p>
               <a href="/"><button>Get Tickets</button></a> 
            </div>
                )
            })}
           
           </div>

          </div>
          <div className="events past-evnts">
           <h2>Past Events</h2>
           <div className="cards">
           {PastEventData.map((item) => {
                return(
                    <div className="card">
                <img src={item.img} alt="" />
                <h3>🎟️ {item.title}</h3>
                <p className='location'>{item.location}</p>
                <p className='time'>{item.date}</p>
                <p className='text'>{item.text}</p>
               <a href="/"><button>Get Tickets</button></a> 
            </div>
                )
            })}
           </div>
          </div>
        </div>
<BottomBar/>

      </div>
    </section>
  )
}

export default Events
