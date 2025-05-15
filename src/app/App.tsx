import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>MAIN</Link>
            <Link to='/about'>ABOUT</Link>
            <AppRouter/>
        </div>
    );
};

export default App;