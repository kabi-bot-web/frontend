import './sass/settingPage.sass';

const Setting = ({className, title, children, ...props }) => {
    return (
        <div {...props} className={`Setting-page ${className || ''}`}>
            <h2 id="title">{title}</h2>
            {children}
        </div>
    );
};

export default Setting;