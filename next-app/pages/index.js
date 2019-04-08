import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'
function Index(props) {
    return (
        <Layout>
            <div className="container">
                <h1>Welcome to BitsPrice!</h1>
                <Prices bpi={props.bpi}/>
            </div>
        </Layout>
    )
}
Index.getInitialProps = async ()=>{
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();
    return {bpi:data};
};
export default Index