import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor(){
    let authorLink = "https://www.recipetineats.com/chicken-pad-thai/"
    let authorPhoto = "https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=125,125"
    let authorName = "Nagi"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>recipetineats</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
render() {
return(
<div> 
    <div>
       <h1>Pad Thai</h1>
       <p>Pad Thai is a Thai noodle stir fry with a sweet-savoury-sour sauce scattered with crushed peanuts. It’s made with thin, flat rice noodles, and almost always has bean sprouts, garlic chives, scrambled egg, firm tofu and a protein – the most popular being chicken or prawns/shrimp.
   
       </p>
    </div>
    <RecipeAuthor />
 </div>
);
}
}


export default RecipeDescription;