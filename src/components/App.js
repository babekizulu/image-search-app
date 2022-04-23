//Libraries
import {React, Component} from 'react';
//API
import Unsplash from '../api/Unsplash';
//Components 
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = {images: []};

   onSearchSubmit = async (term) => {
        const res = await Unsplash.get('/search/photos', {
            params: {query: term}
        });
      
        this.setState({ images : res.data.results});
    }

    render() {
        const {images} = this.state;
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={images}/>
            </div>
        );
    }
}

export default App;