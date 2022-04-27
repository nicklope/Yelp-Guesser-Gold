import axios from 'axios'
import { useState, useEffect } from 'react'
import HowManyCatStars from '../components/HowManyCatsStars'
import catguesser5 from '../images/catguesser5.PNG'
import comingsoon from '../images/comingsoon.PNG'

const CatGuesser = (props) => {
  // const [cat, setCat] = useState('')

  // const getCat = async () => {
  //   const response = await axios.get(
  //     'http://api.thecatapi.com/v1/images/search',
  //     { params: { limit: 1 } }
  //   )
  //   // setCat = response.data[0].url
  //   console.log(response.data[0].url)
  // }
  // getCat()

  return (
    <div className="cat-guesser-wrapper">
      <div className="cat-guesser-logo">
        <img src={catguesser5} alt="cat guesser" />
      </div>
      <div className="coming-soon">
        <img src={comingsoon} alt="coming soon" />
      </div>
    </div>
  )
}

export default CatGuesser
