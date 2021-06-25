import { useParams } from 'react-router-dom';

const Guild = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="Side-menu">
            </div>
            <div className="setting">
            </div>
        </div>
    );
};

export default Guild;