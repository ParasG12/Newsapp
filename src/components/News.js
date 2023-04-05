import { useEffect,useState } from 'react';
import React from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';




// export class News extends Component {
  const News = (props)=>{
    const[articles,setArticles]=useState([])
    const[loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults,settotalResults]=useState(0)


  // static propTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category:PropTypes.string

  // }
  // static defaultProps={
  //   country:"in",
  //   pageSize:5,
  //   category:"general"

  // }
   const capitalize = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)

  }

  // constructor(props) {
    // super(props);
    // this.state = {
    //   articles: [],
    //   loading: true,
    //   page: 1,
    //   totalResults:0


    // }
    // document.title=`${capitalize(props.category)}-NewsMonkey`
  // }
  const updateNews = async()=>{
    // props.setProgress(10)
   props.setProgress(10)
     let response = await fetch(`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=495fbf93e1814ba9beb9060b271f83fb&page=${page}&pageSize=${props.pageSize}`)
     props.setProgress(30)
    setLoading({loading:true})
      let value = await response.json()
      props.setProgress(60)
     
        console.log(value)
        setArticles(value.articles)
        settotalResults(value.totalResults)
        setLoading(false)
        

      // this.setState({
      //   articles: value.articles,
      //   totalResults: value.totalResults,
      //   loading:false
  
      // })
      props.setProgress(100)
        
     


  }
  useEffect(()=>{
   updateNews()

  },[])
  // async componentDidMount() {
  //   console.log("cdm")
  //   this.updateNews()
  // }
  // //   let response = await fetch(`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`)
  // // this.setState({loading:true})
  // //   let value = await response.json()
  // //   setTimeout(() => {
  // //     console.log(value)
  // //   this.setState({
  // //     articles: value.articles,
  // //     totalResults: value.totalResults,
  // //     loading:false

  // //   })
      
  // //   }, 2000);
  //   // console.log(value)
  //   // this.setState({
  //   //   articles: value.articles,
  //   //   totalResults: value.totalResults,
  //   //   loading:false

  //   // })


  // }
  const handelNextClick = async () => {
    console.log("next clicked")
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {
    //   console.log("no more pages")
    // }
    // else {





    //   let value = await fetch(`https://newsapi.org/v2/top-headlines?&country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`)
    //  this.setState({
    //    loading:true
    //   })
    //   let response = await value.json();
    //   setTimeout(() => {
    //     this.setState({
    //     articles: response.articles,
    //     page: this.state.page + 1,
    //     loading: false


    //   })
        
    //   }, 2000);
    //   // this.setState({
    //   //   articles: response.articles,
    //   //   page: this.state.page + 1,
    //   //   loading: false


    //   // })
    // }
    // this.setState({
    //   page:this.state.page+1
    // })
    setPage({page:page+1})
    
   
  }







const handlePreviousClick = async () => {
  console.log("previous clicked")
//   let value = await fetch(`https://newsapi.org/v2/top-headlines?&country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pagesize=${props.pageSize}`)
//    this.setState({
//     loading:true

//  })
//   let response = await value.json();
//   setTimeout(() => {
//     this.setState({
//       articles: response.articles,
//       page: this.state.page - 1,
//       loading: false
  
//     })
    
//   }, 2000);
//   // this.setState({
//   //   articles: response.articles,
//   //   page: this.state.page - 1,
//   //   loading: false

  // })
  // this.setState({
  //   page:this.state.page-1
  // })
  setPage(page+1)
updateNews()
}
const fetchMoreData = async() => {

  let response = await fetch(`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=495fbf93e1814ba9beb9060b271f83fb&page=${page}&pageSize=${props.pageSize}`)
  // a fake async api call like which sends
  // 20 more records in 1.5 secs
  // this.setState({page:this.state.page+1})
  setPage(page+1)
  
    // this.setState({loading:true})
      let value = await response.json()
      setTimeout(() => {
        console.log(value)
      // this.setState({
      //   articles: this.state.articles.concat(value.articles),
      //   totalResults: value.totalResults,
      //   loading:false
  
      // })
      setArticles(articles.concat(value.articles))
      settotalResults(value.totalResults)
      setLoading(false)
      
     
  
        
      }, 2000);
  
}


// render(){


  return (
   <>
      <h1 className="text-center" style={{margin:"35px 0",marginTop:"90px"}}>NewsMonkey-Top {capitalize(props.category)}  Headlines  </h1>
       {loading && <Spinner/>} 
      {/* <h2>NewsMonkey-Top Headlines</h2> */}
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container">
      <div className="row my-3">
      {/* {!this.state.loading && this.state.articles.map((element) => { */}

        { articles.map((element) => {

          return <div className="col md-3 " key={element.url}><Newsitem title={(element.title) ? element.title.slice(0, 45) : "..."} description={(element.description) ? element.description.slice(0, 88) : "..."} imageUrl={(element.urlToImage) ? element.urlToImage : "https://c.ndtvimg.com/2023-03/np8efg2_pm-modi_625x300_28_March_23.jpg"} redirect={element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}></Newsitem></div>



          // return <div className="col-md-4" key={element.url}>  <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} /></div>



        })
        }
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
        <button className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page <= 1}>&larr; Previous</button>
        <button className="btn btn-dark" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))} onClick={this.handelNextClick}>Next  &rarr;</button>

      </div> */}

</>










  )
// }
}



export default News
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string

}
News.defaultProps={
  country:"in",
  pageSize:5,
  category:"general"

}
// &pageSize=${props.pageSize