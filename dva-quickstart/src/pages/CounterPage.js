import React from 'react';
import Counter from '../components/counter'
const CounterPage = (props) => {
    return (
        <div>
            {/*可以在此处传入history给子组件*/}
           {/* <Counter history={props.history}/>*/}
            <Counter/>
        </div>
    );
};
CounterPage.protoTypes={};
export default CounterPage;