import Head from 'next/head'
import NavBar from './navbar'


const Layout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>next js</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css"/>
            </Head>
            <NavBar/>
            <div className="container">
                {props.children}
            </div>
        </React.Fragment>
    )
}
export default Layout