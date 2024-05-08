import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import NavbarController from "./components/NavbarController";
import Main from "./views/MainPage";
import SignUp from "./views/SignUpPage";
import SignIn from "./views/SignInPage";
import GamePage from "./views/GamePage";
import SocialCallback from "./views/CallBack";
import CreateWordPage from "./views/CreateWordPage";
import WordCardPage from "./views/WordCardPage";
import SetListPage from "./views/SetListPage";
import TypingPage from "./views/TypingPage";
import FlipWordPage from "./views/FlipWordPage";
import MemorizePage from "./views/Memorizepage";
import CommunityPage from "./views/CommunityPage";
import EditWordPage from "./views/EditWordPage";
import GrammarPage from "./views/GrammerPage";
import PronunciationPage from "./views/PronunciationPage";
import CreateSentencePage from "./views/CreateSentencePage";
import { Create } from "phaser";
// const CreateWordWrapper = () => (
//   <DataProvider>
//     <CreateWordPage />
//   </DataProvider>
// );

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarController />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route
            path="/social/callback/google"
            element={<SocialCallback provider="google" />}
          />
          <Route
            path="/social/callback/kakao"
            element={<SocialCallback provider="kakao" />}
          />
          <Route
            path="/social/callback/naver"
            element={<SocialCallback provider="naver" />}
          />
          <Route
            path="/social/callback/github"
            element={<SocialCallback provider="github" />}
          />
          <Route path="/Typing" element={<TypingPage />} />
          <Route path="/Game" element={<GamePage />} />
          <Route
            path="/CreateWord"
            element={
              <DataProvider>
                <CreateWordPage />
              </DataProvider>
            }
          />
          <Route path="/set/:id" element={<WordCardPage />} />
          <Route
            path="/EditWord/:id"
            element={
              <DataProvider>
                <EditWordPage />
              </DataProvider>
            }
          />
          <Route path="/Memorize/:id" element={<MemorizePage />} />
          <Route path="/MySet" element={<SetListPage />} />
          <Route path="/Community" element={<CommunityPage />} />
          <Route path="/FlipWord" element={<FlipWordPage />} />
          <Route path="/CreateSentence" element={<CreateSentencePage />} />
          <Route path="/Grammar" element={<GrammarPage />} />
          <Route path="/Pronunciation" element={<PronunciationPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
