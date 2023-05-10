import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';
import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord, setMeanings }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
        setMeanings([]);
    }

  return (
    <div className="header">
      <span className="title">
        {word ? word : 'DICTIONARY'}
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
            <TextField 
                className='search'
                label="Type Text"
                variant="outlined"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                 />
            <TextField
                className='select'
                select
                label="Language"
                value={category}
                onChange={(e) => handleChange(e.target.value)}
                helperText="Please select your language"
                >
                {categories.map((category) => (
                    <MenuItem key={category.label} value={category.label}>
                        {category.value}
                    </MenuItem>
                ))}
            </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
};

export default Header;
