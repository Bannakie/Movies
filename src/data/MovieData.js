





class MovieData {
    constructor({ title, description, year, genre }) {
      this.title = title;
      this.description = description;
      this.year = year;
      this.genre = genre;
    }
  }
  
  const collection1 = [
    new MovieData({
      title: '',
      description:
        '',
      year: 2007,
      genre: '',
    }),
    new MovieData({
      title: '',
      description:'',
      year: ,
      genre: '',
    }),
    new MovieData({
      title: "",
      description: '',
      year: ,
      genre: '',
    }),
  ];
  
  const collection2 = [
    new MovieData({
      title: '',
      description:'',
      year: ,
      genre: '',
    }),
    new MovieData({
      title: '',
      description: '',
      year: ,
      genre: '',
    }),
    new MovieData({
      title: '',
      description: '',
      year: ,
      genre: '',
    }),
  ];
  
  const movieCollections = [collection1, collection2];
  
  export {MovieData, movieCollections};