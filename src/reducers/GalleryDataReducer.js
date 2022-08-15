import data from '../components/Portfolio/data/portfolioData';
const GalleryDataReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER':
            if (action.deploy !== 'All') {
                return state.map((proejct) => {
                    if (proejct.tools.includes(action.deploy)) {
                        proejct.active = true;
                    } else {
                        proejct.active = false;
                    }
                    return proejct
                });
            }
            else {
                return state.map((proejct) => {
                    proejct.active = true;
                    return proejct
                });

            }
        default:
            return state
    }
}

export default GalleryDataReducer;
