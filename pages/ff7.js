import List from 'src/front/List'
import axios from 'axios'

function ff7(props) {

  return (
    <p>
      <List assets={props.assets}/>
    </p>
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