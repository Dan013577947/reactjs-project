import Header from '../../components/Header'
import './TrackingPage.css'
import TrackingPageContents from './TrackingPageContents';

function TrackingPage({ cart }) {

  

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <title>Tracking</title>
      <Header cart={cart} />
      <TrackingPageContents />
    </>
  );
}

export default TrackingPage