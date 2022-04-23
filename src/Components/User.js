import React,{useEffect, useState} from 'react'

const imageStyle = {
  borderRadius:"50%",
  display:"block",
  margin:"auto",
  textAlign:"center",
  padding:"0.4em",
  border:"1px solid grey",
  marginTop:"1em",
}

function User(props) {
    const [page, setPage] = useState(props.page);
    const url = `https://randomuser.me/api?page=${page}&results=${props.total}&seed="abc"`
    let [result, setState] = useState([]);
    useEffect(() => {
        async function fetchMyAPI(){
        const data = await fetch(url);
        const response = await data.json();
        console.log(response.results);
        setState(response.results);
      }
      fetchMyAPI();
    }, [page])

    const handlePrevClick = () =>{
      setPage(page-1);
      console.log("this is page : ", page);
    }
    const handleNextClick = () =>{
      setPage(page+1);
      console.log("this is page : ", page);
    }
    
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-5">
            {
              result.map((item, idx)=>{
               return(
                 <div key={idx} className="details">
                   <img src={item.picture.large} style={imageStyle} alt={item.name.first} />
                   <h2 className='text-center'>{item.name.first} {item.name.last}</h2>
                 </div>
               )
              })
          }
        </div>
        <div className="col"></div>
        
        <div className='col-12  d-flex justify-content-center'>
        <button onClick={handleNextClick} className=' me-2 btn btn-primary'>Next</button>
        <button onClick={handlePrevClick} disabled={page<= 1} className='btn btn-primary'>prev</button>
        </div>
      </div>
    </div>
  )
}

export default User