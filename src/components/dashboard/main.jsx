import './sass/main.sass';

const Main = ({ options }) => {
    return (
        <div id="Dashboard-main">
            {options.map((option) => {
                return (
                    <div className="Option">
                        <span>{option.name}</span>
                        <hr />
                        <div></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Main;