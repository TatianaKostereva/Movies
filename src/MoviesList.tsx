import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import axios from "axios";

const MoviesList = () => {
  //const productsList = useContext(DBProductsContext);
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
  ];

  try {
    const response = await axios({
      url: 'http://www.omdbapi.com/?apikey=[yourkey]&',
      headers: new Headers(compiledOptions.headers),
      ...compiledOptions,
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }

  return (
    <div className="movies-list">
      <div className="autocomplete">
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movies box" variant="outlined" />}
        />
      </div>
        <div className="movies_table">
          
        </div>
    </div>
    );
  };

export default MoviesList;