import React, { Component } from 'react'; 

class AddMovie extends Component{
    addNewMovie(e){
        e.preventDefault();
        const movie = {
            title: this.title.value, 
            year: this.year.value, 
            description: this.description.value, 
            poster: this.poster.value
        };
        this.props.addMovie(movie);
    }
    
    render(){
        return(
        <form className="movie-form" onSubmit={e => this.addNewMovie(e)}>
            <p>Add a Movie</p>
            <input ref={ ( input ) => this.title = input } type="text" placeholder="Title"/>
            <input ref={ ( input ) => this.year = input } type="Year" placeholder="Year"/>
            <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster"/>
            <textarea ref={ ( input ) => this.description = input } type="text" placeholder="Description"></textarea>
            <button type="submit">Add Movie</button>
        </form>
                        
        );
    }
}

export default AddMovie;