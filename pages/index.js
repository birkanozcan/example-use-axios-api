import Birkan from '../component/Birkan'
import axios from 'axios';

export const getStaticProps = async () => {
  console.log('asdasdjakdjasldkjsajldks')
  //const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
  //const data = await res.json();
  const resAxios = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  const data = await resAxios.data
  return {
    props: { Homes: data }
  }
}

const Home = ({ Homes }) => (
  <div>
    <Birkan Homes={Homes} />
  </div>
)

export default Home;