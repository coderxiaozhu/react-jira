import { useRoutes } from 'react-router-dom';
import { router } from './router';

import { useSetRem } from './utils/px2Rem';
import useCheckToken from './customHook/useCheckToken';

const App = () => {
    useSetRem();
    useCheckToken();
    return useRoutes(router);
};

export default App;
