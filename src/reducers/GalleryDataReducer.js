import data from '../components/Portfolio/data/portfolioData';
const GalleryDataReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER':
            if (action.deploy !== 'All') {
                return data.filter((proejct) => proejct.tools.includes(action.deploy));
            } else {
                return data;
            }
        default:
            return state
    }
}

export default GalleryDataReducer;
