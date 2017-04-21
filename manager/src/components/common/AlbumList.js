// import a library
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// create a component
// Album list class-based component
class AlbumList extends Component {
  // initializations
  // state has empty albums array
  state = { albums: [] };

  // componentWillMount: any time right before rendering
  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // need key attribute so that react knows
      // when to update the DOM elements in any given time.
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// export the component to be used
export default AlbumList;
