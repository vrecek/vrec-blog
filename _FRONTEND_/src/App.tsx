import React from 'react';
import './css/index.css'
import Navigation from './components/Layout/Nav/Navigation';
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './components/Layout/Footer/Footer';
import ArrowTop from './components/Layout/Arrow/ArrowTop';
import SEARCH_PAGE from './components/Search Page/SEARCH_PAGE';
import ARTICLE_PAGE from './components/Article Page/ARTICLE_PAGE';
import LOGIN_REGISTER_PAGE from './components/LoginRegister Page/LOGIN_REGISTER_PAGE';
import TERMS_CONDITIONS_PAGE from './components/TermsAndConditions/TERMS_CONDITIONS_PAGE';
import CONTACT from './components/Contact Page/CONTACT';
import Fetches from './functions/Fetches';
import UserType from './interfaces/UserType';
import ERROR_PAGE from './components/Error Page/ERROR_PAGE';
import ADMIN_PANEL from './components/Admin/ADMIN_PANEL';
import PROFILE_PAGE from './components/Profile/PROFILE_PAGE';
import CookieReminder from './components/Layout/CookiePopup/CookieReminder';
import Cookies from 'universal-cookie';

const UserContext = React.createContext<UserType | null>(null)

function App() {
   const [user, setUser] = React.useState<{ user: UserType | null, finished: boolean }>({ user: null, finished: false })

   // GET LOGGED USER
   React.useEffect(() => {
      const init = async () => {
         try {
            const data = await Fetches.mix(`${ process.env.REACT_APP_API_USER_IS_AUTHED }/true`, 'GET')

            const hookObj = {
               user: data.json.user,
               finished: true
            }

            setUser(hookObj)

         }catch(err) {
            setUser({
               user: null,
               finished: true
            })
         }
      }
      init()
   }, [])

   if(user.finished) {
      const isCookieSet: boolean = !!new Cookies().get('accept')

      return (
         <div className="App">
           <Router>
     
              <UserContext.Provider value={ user.user }>
     
                 <Navigation />
                 
                  <Routes>
     
                     <Route path='/' element={ <MAIN_PAGE /> } />
                     <Route path='/page/:nr' element={ <MAIN_PAGE /> } />
     
                     <Route path='/profile' element={ <PROFILE_PAGE /> } />
     
                     <Route path={ process.env.REACT_APP_ADMIN_ROUTE } element={ <ADMIN_PANEL /> } />
     
                     <Route path='/error' element={ <ERROR_PAGE /> } />
     
                     <Route path='/search/:type/:string' element={ <SEARCH_PAGE key={ window.location.pathname } /> } />
     
                     <Route path='/article/:id_or_title' element={ <ARTICLE_PAGE /> } />
     
                     <Route path='/credentials/:login_register' element={ <LOGIN_REGISTER_PAGE /> } />
     
                     <Route path='/terms-and-conditions' element={ <TERMS_CONDITIONS_PAGE /> } />
                     <Route path='/contact' element={ <CONTACT /> } />
                 
                  </Routes>
     
                 <Footer />
     
                 <ArrowTop />
                 
                  {
                     !isCookieSet && <CookieReminder />
                  }
     
              </UserContext.Provider>
     
            </Router>
          </div>
        );
   }

   return (
      <div className='loading-abs'>
         <span></span>
      </div>
   )
}

export default App;
export { UserContext }
