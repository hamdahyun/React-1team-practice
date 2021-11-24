// import { useEffect, useState } from 'react';
// import Axios from 'axios';

// export default function Home() {
//   const [list, setlist] = useState([]);
//   const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

//   function getData() {
//     Axios.get(API_URL).then( res => {
//       console.log(res.data);
//       setlist(res.data)
//     })
//   }
//   useEffect(()=> {
//     getData();
//   }, []);

//   return (
//     <div>
//       <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
//       <Divider />
//       <ItemList list={list.slice(0, 9)} />
//       <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
//       <Divider />
//       <ItemList list={list.slice(9)} />
//     </div>
//   )
// }