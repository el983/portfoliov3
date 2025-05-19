import React from 'react'
import './Card5.css'
import kawana from '../assets/resorts_kawana.webp'
import lake from '../assets/resorts_lake.webp'
const Card5 = () => {
  return (
    <div className='card5' id=''>
      <header>
        <div class="page-width">
          {/* <h1>CSS Position Sticky</h1> */}
        </div>
      </header>

      <div className="main-sidebar">
        <aside>
          {/* <div class="widget golden"></div>
    <div class="widget blue"></div> */}
          <h2>About Us</h2>
        </aside>

        <article>
          <div className="img-group">
          <img src={kawana} alt="" />
          </div>
          
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dolore commodi, necessitatibus quibusdam eius cupiditate ut tempora?
            Quam aperiam quasi quos corporis. Voluptate excepturi maiores dicta
            nobis, cumque soluta sapiente? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Possimus dolore commodi, necessitatibus quibusdam
            eius cupiditate ut tempora? Quam aperiam quasi quos corporis.
            Voluptate excepturi maiores dicta nobis, cumque soluta sapiente?
          </p>
          <div className="img-group">
          <img src={lake} alt="" />
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam corrupti quisquam veniam ab dolor suscipit, temporibus nemo, nihil eius ratione voluptates distinctio? Nostrum ipsum ad sit ducimus tempora nisi omnis fugit inventore? Voluptates optio, possimus a vero repellendus aut placeat, voluptatum libero quaerat voluptatibus modi necessitatibus nam repellat quos odio ullam quae! Quisquam deserunt totam expedita provident delectus magnam a, beatae non vero? Saepe voluptatem nihil beatae recusandae, eos vitae incidunt laboriosam. Distinctio odio necessitatibus hic animi recusandae numquam odit nobis eligendi debitis repellat, rem beatae ducimus, saepe ex magni quam aut provident maxime. Eius sed facere illum fuga.
          </p>
        </article>

      </div>



    </div>
  )
}

export default Card5