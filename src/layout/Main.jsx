import { Component } from 'react';

import MovieList from '../components/MovieList';
import Preloader from '../components/UI/Preloader';
import Search from '../components/UI/Search';

import getMovies from '../API/filmService';

const initialState = {
  currentMovie: 'matrix',
  currentType: 'all',
  movies: [],
  isLoading: true,
};

class Main extends Component {
  state = initialState;

  fetchRequest = () => {
    getMovies(this.state.currentMovie, this.state.currentType)
      .then((data) =>
        this.setState((prevState) => ({
          ...prevState,
          movies: data.Search,
          isLoading: false,
        }))
      )
      .catch((error) => {
        console.error(error);
        this.setState((prevState) => ({ ...prevState, isLoading: false }));
      });
  };

  componentDidMount() {
    this.fetchRequest();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.currentMovie !== prevState.currentMovie || this.state.currentType !== prevState.currentType) {
      this.fetchRequest();
    }
  }

  setCurrentMovieType = (movie, type) => {
    if (!movie) {
      this.setState((prevState) => ({
        ...prevState,
        currentMovie: '',
        currentType: type,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        currentMovie: movie,
        currentType: type,
      }));
    }
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <main className='container content'>
        <Search setCurrentMovieType={this.setCurrentMovieType} />
        {isLoading ? <Preloader /> : <MovieList movies={movies} />}
      </main>
    );
  }
}

export default Main;
