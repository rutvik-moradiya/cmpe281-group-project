import React from "react";
import Item from "./Item";
import SearchResults from "./SearchResults";
import { Route, withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
import "../assets/stylesheets/feed.css";
const { FETCH_ALBUMS } = Queries;
 
class Feed extends React.Component{
 constructor(props){
   super(props);
 }
 
 render(){
   return(
     <section className="main-root-section">
       <Route path="/search/:filter">
        <SearchResults />
       </Route>
       <section className="populars">
         <h2>Albums</h2>
         <Query query={FETCH_ALBUMS}>
           {({ loading, error, data }) => {
             if (loading) return "Loading...";
             if (error) return `Error! ${error.message}`;
             return (
               <div className="content-container">
                 {data.albums.map(album => {
                   return <Item key={album._id} album={album} />
                 })}
               </div>              
             )
             }}
         </Query>
    <div className="card" >
      <div
        className="card__thumbnail"
        style={{backgroundImage: `url(https://dotify-aa-dev.s3.us-east-2.amazonaws.com/ohMyGod_album.png)`}}
        data-testid="card-thumbnail"></div>
      <div className="card__content">
        <div className="card__wrapper">
          <h3 className="card__title">rutvik</h3>
          <span className="card__artist">Rutvik</span>
        </div>
        
      </div>
    </div>
    <div className="card" >
      <div
        className="card__thumbnail"
        style={{backgroundImage: `url(https://dotify-aa-dev.s3.us-east-2.amazonaws.com/ohMyGod_album.png)`}}
        data-testid="card-thumbnail"></div>
      <div className="card__content">
        <div className="card__wrapper">
          <h3 className="card__title">rutvik</h3>
          <span className="card__artist">Rutvik</span>
        </div>
        
      </div>
    </div>   <div className="card" >
      <div
        className="card__thumbnail"
        style={{backgroundImage: `url(https://dotify-aa-dev.s3.us-east-2.amazonaws.com/ohMyGod_album.png)`}}
        data-testid="card-thumbnail"></div>
      <div className="card__content">
        <div className="card__wrapper">
          <h3 className="card__title">rutvik</h3>
          <span className="card__artist">Rutvik</span>
        </div>
        
      </div>
    </div>
       </section>
     </section>
   );
 }
 
};
 
export default withRouter(Feed);