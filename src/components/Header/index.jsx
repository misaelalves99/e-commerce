import '../Header/Header.modules.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 28,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '50ch',
        },
      },
    },
}));

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className="bar1">
                    <div className="logo">
                        <img src="../src/assets/logo.png" alt="Logo" />
                        <h1>E-Commerce</h1>
                    </div>
                    <div className='user'>
                        <div className='carrinho-u'>
                            <Link><FaCartPlus /></Link>
                        </div>
                        <div className='favoritos-u'>
                            <Link><MdFavorite /></Link>
                        </div>
                        <div className='perfil-u'>
                            <Link><FaUser /></Link>
                        </div>
                    </div>
                    
                </div>
                <div className="bar2">
                    <div className="pesquisar">
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="procurar…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}