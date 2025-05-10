import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>MAIN</Link>
            <Link to='/about'>ABOUT</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;