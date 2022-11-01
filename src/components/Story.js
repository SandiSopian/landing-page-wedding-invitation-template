import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
              Curabit aliquet orci elit genes tristique lorem commodo vitae.
              Tuliaum tincidunt nete sede gravida aliquam, neque libero
              hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat
              volutpat edat themo the druanye semper.
            </p>
            <p>
              Luality fringilla duiman at elit vinibus viverra nec a lacus themo
              the druanye sene sollicitudin mi suscipit non sagie the fermen.
            </p>
            <p>
              Phasellus viverra tristique justo duis vitae diam neque nivamus ac
              est augue artine aringilla dui at elit finibus viverra nec a
              lacus. Nedana themo eros odio semper soe suscipit non. Curabit
              aliquet orci elit genes tristique.
            </p>
            <h4>Dec 5th, 2021, We Said Yes!</h4>
            <p>
              Luality fringilla duiman at elit finibus viverra nec a lacus themo
              the druanye sene sollicitudin mi suscipit non sagie the fermen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
