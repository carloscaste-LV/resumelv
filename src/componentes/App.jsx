import React from 'react';
import '../static/App.css';
import ContactSection from './ContactSection';
import ProjectSection from './ProjectSection';
import WelcomeSection from './WelcomeSection';
import ButtonsTools from './ButtonsTools.jsx';


function disableGoogleTranslate() {
  var googleTranslateScript = document.querySelector('script[src*="translate.google.com"]');
  if (googleTranslateScript) {
    googleTranslateScript.parentNode.removeChild(googleTranslateScript);
  }
}




class App extends React.Component{
  

  componentDidMount() {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      document.cookie = "cookieName=cookieValue; SameSite=Lax";

      document.addEventListener('DOMContentLoaded', function() {
        disableGoogleTranslate();
      });

    }
  }


  render(){
    
    return (
      <main  >
        <ButtonsTools/>
        <WelcomeSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      );
  }
}
export default App;
