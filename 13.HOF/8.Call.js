/** Call(): 
 * 1. The call() method is a predefined javascript method.
 * 2. With call() an object can use a method belonging to another object.  
 */

const youTuber1 = {
    name: "ThapaTechnical",
    content: "Programming",
    feature: function(rating, support){
        console.log(`Very friendly way of teaching. ${this.name} is my favorite ${this.content} channel. i will love to give ${rating} star rating. Please ${support} this channel`);
    }
}
youTuber1.feature(5, "Subscribe");

const youTuber2 = {
    name: 'Yahoo Baba',
    content: "Programming", 
}

youTuber1.feature.call(youTuber2, 4, "Subscribe & Share");