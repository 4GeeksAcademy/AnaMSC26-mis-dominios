/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "some", "another", "any"];
  let adj = ["great", "big", "crazy", "cool", "intriguin"];
  let noun = ["jogger", "racoon", "dog", "space", "cow"];
  let tld = [".com", ".net", ".cat", ".es", ".org", ".rocks"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + tld[l]);
        }
      }
    }
  }
};
