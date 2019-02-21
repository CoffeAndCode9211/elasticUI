import React from 'react';
import { Header } from './Header';
/*import { ElasticAutoComplete } from './ElasticAutoComplete';*/
import { BookSearch } from './BookSearch';

const App = () => (
    <div>
        <Header title='wisestep' />
        <div className="mt-md-5 mx-md-5">
            <BookSearch />
        </div>
    </div>
);

export default App;