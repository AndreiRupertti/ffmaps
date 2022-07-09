import MapBG from 'src/front/components/MapBG/MapBG'
import axios from 'axios'

function ff7(props) {

  return (
      <MapBG />

  )
}


export const getStaticProps = async () => {
  const host = 'http://localhost:3000'
  const { data: body } = await axios.get(host+'/api/assets/list')

  const assets = body.assets;
  
  return {
    props: {
      assets
    }
  }
}

export default ff7