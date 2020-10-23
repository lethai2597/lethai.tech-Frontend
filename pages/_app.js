import '../styles/antd.less';

function MyApp({ Component, pageProps }) {
  return(
    <div style={{minHeight: '100vh'}}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
