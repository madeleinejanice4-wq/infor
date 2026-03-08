/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  User, 
  LogOut, 
  ChevronLeft, 
  Star, 
  Globe, 
  Instagram, 
  Plus, 
  Camera, 
  Search, 
  Heart, 
  Map as MapIcon,
  Utensils,
  Compass,
  BookOpen,
  Home,
  MessageSquare,
  Train,
  Bed,
  Film,
  CloudSun,
  Newspaper,
  Thermometer,
  Wind,
  Droplets,
  ExternalLink,
  Smile,
  Frown,
  Zap,
  Music,
  Languages,
} from 'lucide-react';
import { JAKARTA_PLACES, TRANSPORT_ROUTES, HOTELS, TRANSPORT_PAYMENT_METHODS, JAKARTA_CINEMAS, Place, Region, Category, PriceRange, TransportRoute, Hotel, HotelStar } from './data';
import { GoogleGenAI } from "@google/genai";

// --- Types ---

interface UserProfile {
  username: string;
  nickname: string;
  password: string;
  profilePic?: string;
  visitedPlaces: VisitedPlace[];
}

interface VisitedPlace {
  id: string;
  placeName: string;
  photo: string;
  comment: string;
  date: string;
}

type Screen = 
  | 'SIGN_UP' 
  | 'LOGIN' 
  | 'PROFILE' 
  | 'MAP' 
  | 'FILTERS' 
  | 'PLACE_LIST' 
  | 'PLACE_DETAIL' 
  | 'ADD_RECOMMENDATION'
  | 'EXPLORE_TRANSPORT'
  | 'EXPLORE_HOTELS'
  | 'CINEMAS'
  | 'WEATHER_DETAIL'
  | 'TRANSLATE';

const CINEMA_DATA = [
  {
    genre: 'NOW PLAYING',
    movies: [
      { title: 'Juara Sejati', description: 'An inspiring story about an athlete\'s struggle to achieve their ultimate dream.' },
      { title: 'Rumah Tanpa Cahaya', description: 'A mystery drama about a family uncovering dark secrets in their old home.' },
      { title: 'Titip Bunda di Surga Mu', description: 'A touching story about a child\'s devotion to their late mother.' }
    ]
  },
  {
    genre: 'YOU CAN ALSO WATCH ON NETFLIX',
    movies: [
      { title: 'Agak Laen', description: 'Four friends working as haunted house attendants at a night market must hide the body of a politician.' },
      { title: 'Mencuri Raden Saleh', description: 'A group of students plans to steal a priceless painting from the Presidential Palace.' },
      { title: 'Ali & Ratu Ratu Queens', description: 'A teenager travels to New York to find his long-lost mother.' }
    ]
  }
];

// --- Components ---

const Button = ({ children, onClick, className = "", variant = "primary", disabled = false, isDarkMode }: any) => {
  const baseStyles = "w-full py-3 px-4 rounded-xl font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100";
  const variants: any = {
    primary: isDarkMode 
      ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md" 
      : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
    secondary: isDarkMode
      ? "bg-gray-800 text-emerald-400 border border-emerald-900 hover:bg-gray-700"
      : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50",
    ghost: isDarkMode
      ? "bg-transparent text-gray-400 hover:bg-gray-800"
      : "bg-transparent text-gray-600 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  
  return (
    <button 
      disabled={disabled}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Input = ({ label, type = "text", value, onChange, placeholder, error, isDarkMode }: any) => (
  <div className="mb-4">
    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
      } ${error ? 'border-red-500' : ''}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Card = ({ children, className = "", isDarkMode }: any) => (
  <div className={`rounded-2xl shadow-sm border overflow-hidden ${
    isDarkMode 
      ? 'bg-gray-900 border-gray-800' 
      : 'bg-white border-gray-100'
  } ${className}`}>
    {children}
  </div>
);

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SIGN_UP');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [customPlaces, setCustomPlaces] = useState<Place[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTransportRoute, setSelectedTransportRoute] = useState<TransportRoute | null>(null);
  const [selectedHotelStar, setSelectedHotelStar] = useState<HotelStar | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);
  const [showFullNews, setShowFullNews] = useState(false);
  
  // Filter States
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<PriceRange | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [homeRecommendationRegion, setHomeRecommendationRegion] = useState<Region>('Jakarta Pusat');
  const [userMood, setUserMood] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [showRatingModal, setShowRatingModal] = useState(false);

  // Translation States
  const [translateInput, setTranslateInput] = useState('');
  const [translateOutput, setTranslateOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateMode, setTranslateMode] = useState<'EN-ID' | 'ID-EN'>('EN-ID');

  // Form States
  const [signUpForm, setSignUpForm] = useState({ username: '', nickname: '', password: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [recommendationForm, setRecommendationForm] = useState({ name: '', region: 'Jakarta Pusat' as Region, address: '', socialMedia: '', description: '' });
  const [visitedForm, setVisitedForm] = useState({ placeName: '', photo: '', comment: '' });

  // Error States
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signUpError, setSignUpError] = useState<string | null>(null);

  // Combined Places
  const allPlaces = useMemo(() => [...JAKARTA_PLACES, ...customPlaces], [customPlaces]);

  const filteredPlaces = useMemo(() => {
    return allPlaces.filter(p => 
      (!selectedRegion || p.region === selectedRegion) &&
      (!selectedCategory || p.category === selectedCategory)
    );
  }, [allPlaces, selectedRegion, selectedCategory]);

  // --- Persistence ---
  useEffect(() => {
    const savedUsers = localStorage.getItem('jakarta_explorer_users');
    const savedCurrentUser = localStorage.getItem('jakarta_explorer_current_user');
    const savedCustomPlaces = localStorage.getItem('jakarta_explorer_custom_places');
    
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedCurrentUser) {
      const user = JSON.parse(savedCurrentUser);
      setCurrentUser(user);
      setCurrentScreen('MAP');
    }
    if (savedCustomPlaces) setCustomPlaces(JSON.parse(savedCustomPlaces));
  }, []);

  useEffect(() => {
    localStorage.setItem('jakarta_explorer_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('jakarta_explorer_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('jakarta_explorer_current_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('jakarta_explorer_custom_places', JSON.stringify(customPlaces));
  }, [customPlaces]);

  // --- Handlers ---

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Jakarta Coordinates: -6.2088, 106.8456
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok');
        const data = await res.json();
        setWeather(data.current);
        
        const forecastData = data.daily.time.map((t: string, i: number) => ({
          date: t,
          code: data.daily.weather_code[i],
          max: data.daily.temperature_2m_max[i],
          min: data.daily.temperature_2m_min[i]
        }));
        setForecast(forecastData);
      } catch (e) {
        console.error("Weather fetch failed", e);
      } finally {
        setLoadingWeather(false);
      }
    };

    const fetchNews = () => {
      // Simulating real-time news for Jakarta
      const jakartaNews = [
        { id: 1, title: "Bundaran HI Station Revitalization Completed", time: "2 hours ago", source: "Detikcom", content: "The revitalization of the Bundaran HI MRT station has been completed, offering better facilities for commuters and tourists alike." },
        { id: 2, title: "CFD Event This Sunday Features Culinary Festival", time: "4 hours ago", source: "Kompas", content: "Car Free Day this Sunday will be extra special with a massive culinary festival showcasing Jakarta's best street food." },
        { id: 3, title: "MRT Jakarta Phase 2 Reaches 40% Progress", time: "6 hours ago", source: "Tempo", content: "The construction of MRT Jakarta Phase 2 is moving steadily, promising even better connectivity across the city." },
        { id: 4, title: "Jakarta International Stadium to Host Global Concert", time: "1 day ago", source: "Jakarta Post", content: "JIS is set to host a major international music festival next month, attracting thousands of visitors." },
        { id: 5, title: "New Pedestrian Zone Opened in Old Town", time: "1 day ago", source: "Antara", content: "Kota Tua (Old Town) has expanded its pedestrian-only zone, making it more comfortable for walking tours." }
      ];
      setNews(jakartaNews);
    };

    fetchWeather();
    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendationIndex(prev => (prev + 1) % 5);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code <= 3) return <CloudSun className="text-yellow-500" />;
    if (code <= 67) return <Droplets className="text-blue-500" />;
    return <Wind className="text-gray-500" />;
  };

  const getWeatherDesc = (code: number) => {
    if (code === 0) return "Clear";
    if (code <= 3) return "Cloudy";
    if (code <= 67) return "Rainy";
    return "Windy";
  };

  const handleSignUp = () => {
    const { username, nickname, password } = signUpForm;
    setSignUpError(null);
    
    // Check if username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      // If user exists, log them in if password matches
      if (existingUser.password === password) {
        setCurrentUser(existingUser);
        setCurrentScreen('MAP');
        return;
      } else {
        return setSignUpError("Username already exists with a different password.");
      }
    }

    // Validation
    const usernameWords = username.trim().split(/\s+/).length;
    const nicknameWords = nickname.trim().split(/\s+/).length;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (usernameWords > 10) return setSignUpError("Username maximum 10 words");
    if (nicknameWords > 20) return setSignUpError("Nickname maximum 20 words");
    if (password.length !== 8 || !hasLetter || !hasNumber) {
      return setSignUpError("Password must be 8 characters and contain letters & numbers");
    }

    const newUser: UserProfile = {
      username,
      nickname,
      password,
      visitedPlaces: []
    };

    setUsers([...users, newUser]);
    alert("Account created successfully! Please login.");
    setCurrentScreen('LOGIN');
  };

  const handleLogin = () => {
    setLoginError(null);
    const user = users.find(u => u.username === loginForm.username);
    
    if (!user) {
      return setLoginError("Username not found. Please create a new account!");
    }
    
    if (user.password !== loginForm.password) {
      return setLoginError("Incorrect password");
    }

    setCurrentUser(user);
    setCurrentScreen('MAP');
  };

  const handleAddRecommendation = () => {
    const newPlace: Place = {
      id: `custom-${Date.now()}`,
      name: recommendationForm.name,
      region: recommendationForm.region,
      category: 'Attraction', // Default or add to form
      priceRange: 'Free', // Default or add to form
      address: recommendationForm.address,
      mapsUrl: '',
      socialMedia: recommendationForm.socialMedia,
      description: recommendationForm.description,
      image: `https://picsum.photos/seed/${recommendationForm.name}/800/600`
    };
    setCustomPlaces([...customPlaces, newPlace]);
    alert("Recommendation added successfully!");
    setCurrentScreen('PROFILE');
  };

  const handleAddVisited = () => {
    if (!currentUser) return;
    const newVisited: VisitedPlace = {
      id: Date.now().toString(),
      placeName: visitedForm.placeName,
      photo: visitedForm.photo || `https://picsum.photos/seed/${visitedForm.placeName}/400/400`,
      comment: visitedForm.comment,
      date: new Date().toLocaleDateString('en-US')
    };
    const updatedUser = {
      ...currentUser,
      visitedPlaces: [newVisited, ...currentUser.visitedPlaces]
    };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.username === currentUser.username ? updatedUser : u));
    setVisitedForm({ placeName: '', photo: '', comment: '' });
  };

  const handleRatingSubmit = () => {
    setShowRatingModal(false);
    setRating(0);
    setCurrentScreen('MAP');
  };

  const handleTranslate = async () => {
    if (!translateInput.trim()) return;
    setIsTranslating(true);
    setTranslateOutput("");
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        setTranslateOutput("Error: API Key is missing. Please check your environment configuration.");
        setIsTranslating(false);
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const prompt = translateMode === 'EN-ID' 
        ? `Translate this English text to Indonesian. Return ONLY the translation: "${translateInput}"`
        : `Translate this Indonesian text to English. Return ONLY the translation: "${translateInput}"`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ parts: [{ text: prompt }] }]
      });
      
      if (response && response.text) {
        setTranslateOutput(response.text.trim());
      } else {
        setTranslateOutput("Translation failed: Received an empty response from the AI.");
      }
    } catch (e) {
      console.error("Translation error:", e);
      let errorMessage = "An unexpected error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
        if (errorMessage.includes("404") || errorMessage.includes("not found")) {
          errorMessage = "Model not found or service unavailable.";
        } else if (errorMessage.includes("403") || errorMessage.includes("API key")) {
          errorMessage = "Invalid API Key or permission denied.";
        }
      }
      setTranslateOutput(`Translation failed: ${errorMessage}`);
    } finally {
      setIsTranslating(false);
    }
  };

  // --- Renderers ---

  const renderHeader = (title: string, showBack = true) => (
    <div className={`sticky top-0 z-50 backdrop-blur-md border-b px-4 py-4 flex items-center justify-between ${
      isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-100'
    }`}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={() => {
            if (currentScreen === 'PLACE_DETAIL') setCurrentScreen('PLACE_LIST');
            else if (currentScreen === 'PLACE_LIST') setCurrentScreen('FILTERS');
            else if (currentScreen === 'FILTERS') setCurrentScreen('MAP');
            else if (currentScreen === 'ADD_RECOMMENDATION') setCurrentScreen('PROFILE');
            else if (currentScreen === 'EXPLORE_TRANSPORT') {
              if (selectedTransportRoute) setSelectedTransportRoute(null);
              else setCurrentScreen('MAP');
            }
            else if (currentScreen === 'EXPLORE_HOTELS') {
              setCurrentScreen('MAP');
            }
            else if (currentScreen === 'CINEMAS') {
              setCurrentScreen('MAP');
            }
            else if (currentScreen === 'WEATHER_DETAIL') {
              setCurrentScreen('MAP');
            }
            else setCurrentScreen('MAP');
          }} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
            <ChevronLeft size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </button>
        )}
        <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
        >
          {isDarkMode ? <Compass size={20} /> : <Compass size={20} className="rotate-180" />}
        </button>
        {currentUser && (
          <button onClick={() => setCurrentScreen('PROFILE')} className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden border-2 border-emerald-500">
            {currentUser.profilePic ? (
              <img src={currentUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User size={20} className="text-emerald-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans max-w-md mx-auto shadow-2xl relative overflow-x-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <AnimatePresence mode="wait">
        
        {/* --- SIGN UP SCREEN --- */}
        {currentScreen === 'SIGN_UP' && (
          <motion.div 
            key="signup"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 pt-12"
          >
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3">
                <Compass size={40} className="text-white" />
              </div>
              <h1 className="text-3xl font-black text-emerald-900">JakExplorer</h1>
              <p className="text-gray-500">Start your adventure in Jakarta</p>
            </div>
            
            <Card className="p-6" isDarkMode={isDarkMode}>
              <h2 className="text-xl font-bold mb-6">Create New Account</h2>
              {signUpError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl font-bold">
                  {signUpError}
                </div>
              )}
              <Input 
                label="Username (Max 10 words)" 
                value={signUpForm.username} 
                isDarkMode={isDarkMode}
                onChange={(v: string) => setSignUpForm({ ...signUpForm, username: v })}
                placeholder="e.g.: janicemdlne"
              />
              <Input 
                label="Nickname (Max 20 words)" 
                value={signUpForm.nickname} 
                isDarkMode={isDarkMode}
                onChange={(v: string) => setSignUpForm({ ...signUpForm, nickname: v })}
                placeholder="e.g.: Janice"
              />
              <Input 
                label="Password (8 characters, Letters & Numbers)" 
                type="password"
                value={signUpForm.password} 
                isDarkMode={isDarkMode}
                onChange={(v: string) => setSignUpForm({ ...signUpForm, password: v })}
                placeholder="********"
              />
              <Button onClick={handleSignUp} isDarkMode={isDarkMode} className="mt-4">Sign Up Now</Button>
              <button 
                onClick={() => setCurrentScreen('LOGIN')}
                className="w-full mt-4 text-sm text-emerald-600 font-medium hover:underline"
              >
                Already have an account? Login here
              </button>
            </Card>
          </motion.div>
        )}

        {/* --- LOGIN SCREEN --- */}
        {currentScreen === 'LOGIN' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 pt-12"
          >
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg -rotate-3">
                <Compass size={40} className="text-white" />
              </div>
              <h1 className="text-3xl font-black text-emerald-900">JakExplorer</h1>
              <p className="text-gray-500">Welcome back!</p>
            </div>
            
            <Card className="p-6" isDarkMode={isDarkMode}>
              <h2 className="text-xl font-bold mb-6">Login to Account</h2>
              {loginError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl font-bold">
                  {loginError}
                </div>
              )}
              <Input 
                label="Username" 
                value={loginForm.username} 
                isDarkMode={isDarkMode}
                onChange={(v: string) => setLoginForm({ ...loginForm, username: v })}
                placeholder="janicemdlne"
              />
              <Input 
                label="Password" 
                type="password"
                value={loginForm.password} 
                isDarkMode={isDarkMode}
                onChange={(v: string) => setLoginForm({ ...loginForm, password: v })}
                placeholder="********"
              />
              <Button onClick={handleLogin} isDarkMode={isDarkMode} className="mt-4">Login</Button>
              <button 
                onClick={() => setCurrentScreen('SIGN_UP')}
                className="w-full mt-4 text-sm text-emerald-600 font-medium hover:underline"
              >
                Don't have an account? Sign up now
              </button>
            </Card>
          </motion.div>
        )}

        {/* --- MAP SCREEN --- */}
        {currentScreen === 'MAP' && (
          <motion.div 
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-24"
          >
            {renderHeader("JakExplorer", false)}
            
            <div className="p-4 space-y-6">
              {/* Welcome Section */}
              <div className="relative overflow-hidden rounded-3xl p-6 bg-emerald-600 text-white shadow-xl">
                <div className="relative z-10">
                  <h2 className="text-2xl font-black mb-1">Hello, {currentUser?.nickname}!</h2>
                  <p className="text-emerald-100 text-sm">Where do you want to explore in Jakarta today?</p>
                </div>
                <Compass size={120} className="absolute -right-8 -bottom-8 text-white/10 rotate-12" />
              </div>

              {/* Weather & News Widgets */}
              <div className="grid grid-cols-2 gap-4">
                {/* Weather Widget */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentScreen('WEATHER_DETAIL')}
                  className={`p-4 rounded-3xl border shadow-sm cursor-pointer transition-all ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">Weather</span>
                    <CloudSun size={14} className="text-emerald-500" />
                  </div>
                  {loadingWeather ? (
                    <div className="h-10 w-full animate-pulse bg-gray-200 rounded-lg"></div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black">{Math.round(weather?.temperature_2m || 0)}°</span>
                        <span className="text-[10px] font-bold opacity-60">{getWeatherDesc(weather?.weather_code)}</span>
                      </div>
                      <p className="text-[9px] opacity-50 mt-1">Central Jakarta</p>
                    </div>
                  )}
                </motion.div>

                {/* News Widget */}
                <div
                  onClick={() => setShowFullNews(true)}
                  className={`p-4 rounded-3xl border shadow-sm transition-all cursor-pointer ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-500">News</span>
                    <Newspaper size={14} className="text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    {news.slice(0, 1).map(item => (
                      <div key={item.id}>
                        <p className="text-[10px] font-black leading-tight line-clamp-2">{item.title}</p>
                        <p className="text-[8px] opacity-50 mt-1">{item.source} • {item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mood Questionnaire Section */}
              <div className={`p-5 rounded-3xl border-2 transition-all ${
                isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-emerald-50 shadow-sm'
              }`}>
                <h3 className="text-sm font-black mb-1">Set your mood here in Jakarta? ✨</h3>
                <p className="text-[10px] opacity-60 mb-4">How are you feeling today, Jakartans?</p>
                
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'happy', label: 'Happy', icon: <Smile size={20} />, color: 'text-yellow-500' },
                    { id: 'sad', label: 'Sad', icon: <Frown size={20} />, color: 'text-blue-500' },
                    { id: 'exhausted', label: 'Exhausted', icon: <Zap size={20} />, color: 'text-orange-500' }
                  ].map(mood => (
                    <button
                      key={mood.id}
                      onClick={() => setUserMood(mood.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                        userMood === mood.id 
                          ? 'border-emerald-500 bg-emerald-500/10' 
                          : isDarkMode ? 'border-gray-800' : 'border-gray-50'
                      }`}
                    >
                      <div className={mood.color}>{mood.icon}</div>
                      <span className="text-[10px] font-bold">{mood.label}</span>
                    </button>
                  ))}
                </div>

                {userMood && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-emerald-50 border-emerald-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        <Music size={16} className="text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-emerald-600">Song for you:</p>
                        <p className="text-xs font-bold leading-tight">
                          {userMood === 'happy' && ["Setahun Kemarin - Kahitna", "Hebat - Tangga", "Balada Insan Muda - Diskoria"][Math.floor(Math.random() * 3)]}
                          {userMood === 'sad' && ["Usai Disini - Raisa", "Kangen - Dewa 19", "Januari - Glenn Fredly"][Math.floor(Math.random() * 3)]}
                          {userMood === 'exhausted' && ["33x - Perunggu", "Diri - Tulus", "Lihatlah Lebih Dekat - Sherina Munaf"][Math.floor(Math.random() * 3)]}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-start gap-3 pt-3 border-t border-emerald-200/50">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        <Heart size={16} className="text-pink-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-pink-600">Recommended Place:</p>
                        <p className="text-xs font-bold leading-tight">
                          {userMood === 'happy' && "M Bloc Space atau Senayan Park (SPARK)"}
                          {userMood === 'sad' && "Taman Literasi Blok M atau Museum MACAN"}
                          {userMood === 'exhausted' && "Tebet Eco Park atau Giyanti Coffee Roastery"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentScreen('EXPLORE_TRANSPORT')}
                  className={`p-4 rounded-3xl border-2 flex flex-col gap-3 shadow-md transition-all ${
                    isDarkMode 
                      ? 'bg-gray-900 border-emerald-900 text-emerald-400' 
                      : 'bg-white border-emerald-50 text-emerald-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
                    <Train size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-sm">Explore Here!</p>
                    <p className="text-[10px] opacity-70">MRT, LRT & TJ</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentScreen('EXPLORE_HOTELS')}
                  className={`p-4 rounded-3xl border-2 flex flex-col gap-3 shadow-md transition-all ${
                    isDarkMode 
                      ? 'bg-gray-900 border-indigo-900 text-indigo-400' 
                      : 'bg-white border-indigo-50 text-indigo-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'}`}>
                    <Bed size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-sm">Stay Longer?</p>
                    <p className="text-[10px] opacity-70">Best Hotels</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentScreen('CINEMAS')}
                  className={`p-4 rounded-3xl border-2 flex flex-col gap-3 shadow-md transition-all ${
                    isDarkMode 
                      ? 'bg-gray-900 border-purple-900 text-purple-400' 
                      : 'bg-white border-purple-50 text-purple-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                    <Film size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-sm">Entertainment?</p>
                    <p className="text-[10px] opacity-70">Entertainment in Jakarta</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentScreen('TRANSLATE')}
                  className={`p-4 rounded-3xl border-2 flex flex-col gap-3 shadow-md transition-all ${
                    isDarkMode 
                      ? 'bg-gray-900 border-orange-900 text-orange-400' 
                      : 'bg-white border-orange-50 text-orange-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
                    <Languages size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-sm">Translator</p>
                    <p className="text-[10px] opacity-70">EN ↔ ID</p>
                  </div>
                </motion.button>
              </div>

              {/* Region Selection */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black">Select Region</h3>
                  <span className="text-xs text-emerald-500 font-bold">See All</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {(['Jakarta Utara', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur'] as Region[]).map((reg) => (
                    <motion.button
                      key={reg}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setSelectedRegion(reg);
                        setCurrentScreen('FILTERS');
                      }}
                      className={`flex flex-col items-center gap-2 p-2 rounded-2xl border transition-all ${
                        isDarkMode 
                          ? 'bg-gray-900 border-gray-800' 
                          : 'bg-white border-gray-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                      }`}>
                        <MapPin size={18} className="text-emerald-500" />
                      </div>
                      <span className="text-[8px] font-black text-center leading-tight">
                        {reg.split(' ')[1]}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black">Nearby Recommendations</h3>
                  <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar">
                    {(['Jakarta Utara', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur'] as Region[]).map(reg => (
                      <button
                        key={reg}
                        onClick={() => {
                          setHomeRecommendationRegion(reg);
                          setCurrentRecommendationIndex(0);
                        }}
                        className={`whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-black transition-all border ${
                          homeRecommendationRegion === reg
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-500'
                        }`}
                      >
                        {reg.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {JAKARTA_PLACES
                      .filter(p => p.region === homeRecommendationRegion)
                      .slice(currentRecommendationIndex, currentRecommendationIndex + 1)
                      .map(place => (
                        <motion.div 
                          key={place.id} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          onClick={() => { setSelectedPlace(place); setCurrentScreen('PLACE_DETAIL'); }} 
                          className={`flex gap-4 p-3 rounded-2xl border shadow-sm cursor-pointer absolute inset-0 ${
                            isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                          }`}
                        >
                          <img src={place.image} alt={place.name} className="w-16 h-16 rounded-xl object-cover" />
                          <div>
                            <h4 className="font-bold text-sm">{place.name}</h4>
                            <p className={`text-xs flex items-center gap-1 mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <MapPin size={12} /> {place.address.split(',')[0]}
                            </p>
                            <div className={`mt-1 inline-block px-2 py-0.5 text-[9px] font-bold rounded-md ${
                              isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
                            }`}>
                              {place.category}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- WEATHER DETAIL SCREEN --- */}
        {currentScreen === 'WEATHER_DETAIL' && (
          <motion.div 
            key="weather"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-24"
          >
            {renderHeader("Jakarta Weather")}
            
            <div className="p-6 space-y-6">
              {/* Current Weather Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs mb-2">Today</p>
                  <div className="flex justify-center mb-4">
                    {weather && React.cloneElement(getWeatherIcon(weather.weather_code) as React.ReactElement, { size: 80, className: "text-white drop-shadow-lg" })}
                  </div>
                  <h2 className="text-6xl font-black mb-2">{Math.round(weather?.temperature_2m || 0)}°C</h2>
                  <p className="text-xl font-bold">{getWeatherDesc(weather?.weather_code)}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                    <div>
                      <Droplets size={20} className="mx-auto mb-1 opacity-70" />
                      <p className="text-[10px] opacity-70">Humidity</p>
                      <p className="font-bold">{weather?.relative_humidity_2m}%</p>
                    </div>
                    <div>
                      <Wind size={20} className="mx-auto mb-1 opacity-70" />
                      <p className="text-[10px] opacity-70">Wind</p>
                      <p className="font-bold">{weather?.wind_speed_10m} km/h</p>
                    </div>
                    <div>
                      <Thermometer size={20} className="mx-auto mb-1 opacity-70" />
                      <p className="text-[10px] opacity-70">Feels Like</p>
                      <p className="font-bold">{Math.round((weather?.temperature_2m || 0) + 1)}°</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              {/* Forecast Section */}
              <div>
                <h3 className="text-lg font-black mb-4">7-Day Forecast</h3>
                <div className="space-y-3">
                  {forecast.map((day, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                    }`}>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold w-12">
                          {i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        {getWeatherIcon(day.code)}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black">{Math.round(day.max)}°</span>
                        <span className="text-sm font-bold opacity-30">{Math.round(day.min)}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- FILTERS SCREEN --- */}
        {currentScreen === 'FILTERS' && (
          <motion.div 
            key="filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-24"
          >
            {renderHeader(`${selectedRegion}`)}
            
            <div className="p-6">
              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Category</h3>
                <div className="grid grid-cols-3 gap-3">
                  {(['Food & Beverage', 'Attraction', 'Education'] as Category[]).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                        selectedCategory === cat 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' 
                          : isDarkMode ? 'border-gray-800 bg-gray-900 text-gray-500' : 'border-gray-100 bg-white text-gray-500'
                      }`}
                    >
                      {cat === 'Food & Beverage' && <Utensils size={20} />}
                      {cat === 'Attraction' && <Compass size={20} />}
                      {cat === 'Education' && <BookOpen size={20} />}
                      <span className="text-[10px] font-bold text-center leading-tight">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                disabled={!selectedCategory}
                isDarkMode={isDarkMode}
                onClick={() => setCurrentScreen('PLACE_LIST')}
              >
                Show Places
              </Button>
            </div>
          </motion.div>
        )}

        {/* --- PLACE LIST SCREEN --- */}
        {currentScreen === 'PLACE_LIST' && (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-24"
          >
            {renderHeader(`${selectedCategory}`)}
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Showing {filteredPlaces.length} places</p>
                <button onClick={() => setCurrentScreen('FILTERS')} className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                  Change Filter
                </button>
              </div>

              <div className="space-y-4">
                {filteredPlaces.length > 0 ? filteredPlaces.map(place => (
                  <motion.div 
                    key={place.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setSelectedPlace(place); setCurrentScreen('PLACE_DETAIL'); }}
                    className={`rounded-2xl overflow-hidden shadow-sm border cursor-pointer ${
                      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                    }`}
                  >
                    <div className="h-40 relative">
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-emerald-500 px-2 py-1 rounded-lg text-[10px] font-black text-white shadow-sm">
                        {place.priceRange}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{place.name}</h3>
                      <p className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin size={14} /> {place.address.split(',')[0]}
                      </p>
                    </div>
                  </motion.div>
                )) : (
                  <div className="text-center py-20">
                    <Search size={48} className={`mx-auto mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-200'}`} />
                    <p className={`font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>No places match the filter</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* --- PLACE DETAIL SCREEN --- */}
        {currentScreen === 'PLACE_DETAIL' && selectedPlace && (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-32"
          >
            <div className="relative h-80">
              <img src={selectedPlace.image} alt={selectedPlace.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <button onClick={() => setCurrentScreen('PLACE_LIST')} className="p-2 bg-white/80 backdrop-blur rounded-full shadow-lg">
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-emerald-500 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {selectedPlace.category}
                  </span>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {selectedPlace.priceRange}
                  </span>
                </div>
                <h1 className="text-2xl font-black">{selectedPlace.name}</h1>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-4 mb-8">
                <a href={selectedPlace.mapsUrl} target="_blank" rel="noreferrer" className={`flex-1 p-4 rounded-2xl flex flex-col items-center gap-2 border transition-colors ${
                  isDarkMode ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' : 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100'
                }`}>
                  <Globe size={24} className="text-emerald-500" />
                  <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>Google Maps</span>
                </a>
                <a href={selectedPlace.socialMedia} target="_blank" rel="noreferrer" className={`flex-1 p-4 rounded-2xl flex flex-col items-center gap-2 border transition-colors ${
                  isDarkMode ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' : 'bg-pink-50 border-pink-100 hover:bg-pink-100'
                }`}>
                  <Instagram size={24} className="text-pink-500" />
                  <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-pink-400' : 'text-pink-700'}`}>Instagram</span>
                </a>
              </div>

              <div className="mb-8">
                <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>Address</h3>
                <p className={`text-sm leading-relaxed p-4 rounded-xl border italic ${
                  isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-700'
                }`}>
                  {selectedPlace.address}
                </p>
              </div>

              <div className="mb-8">
                <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>Description</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedPlace.description}
                </p>
              </div>

              <div className={`fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl border-t max-w-md mx-auto flex gap-3 ${
                isDarkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-100'
              }`}>
                <Button isDarkMode={isDarkMode} onClick={() => { setRating(0); setShowRatingModal(true); }} className="flex-1">Find More</Button>
                <Button isDarkMode={isDarkMode} variant="secondary" onClick={() => { setRating(0); setShowRatingModal(true); }} className="flex-1">Go Home</Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- PROFILE SCREEN --- */}
        {currentScreen === 'PROFILE' && currentUser && (
          <motion.div 
            key="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-24"
          >
            {renderHeader("My Profile")}
            
            <div className="p-6">
              <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 rounded-full border-4 shadow-xl flex items-center justify-center overflow-hidden ${
                      isDarkMode ? 'bg-gray-800 border-gray-900' : 'bg-emerald-100 border-white'
                    }`}>
                      {currentUser.profilePic ? (
                        <img src={currentUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User size={40} className="text-emerald-600" />
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 p-2 bg-emerald-600 text-white rounded-full shadow-lg border-2 border-white cursor-pointer">
                      <Camera size={16} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const updatedUser = { ...currentUser, profilePic: reader.result as string };
                              setCurrentUser(updatedUser);
                              setUsers(users.map(u => u.username === currentUser.username ? updatedUser : u));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                <h2 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentUser.nickname}</h2>
                <p className="text-gray-500 text-sm">@{currentUser.username}</p>
                
                <div className="flex gap-8 mt-6 w-full">
                  <div className="flex-1 text-center">
                    <p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentUser.visitedPlaces.length}</p>
                    <p className="text-xs text-gray-400 uppercase font-bold">Visited</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{customPlaces.length}</p>
                    <p className="text-xs text-gray-400 uppercase font-bold">Recs</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-8">
                <Button isDarkMode={isDarkMode} onClick={() => setCurrentScreen('ADD_RECOMMENDATION')} variant="secondary" className="flex-1 text-xs py-2">
                  <Plus size={16} className="inline mr-1" /> Recommendation
                </Button>
              </div>

              <div className="mb-8">
                <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <MapPin size={20} className="text-emerald-600" /> Places Visited
                </h3>
                
                <div className={`p-4 rounded-2xl border shadow-sm mb-6 ${
                  isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                }`}>
                  <h4 className={`text-sm font-bold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Add Visit</h4>
                  <input 
                    type="text" 
                    placeholder="Place name..." 
                    className={`w-full p-2 mb-2 border-b focus:outline-none text-sm bg-transparent ${
                      isDarkMode ? 'border-gray-800 text-white placeholder-gray-600' : 'border-gray-100 text-gray-900 placeholder-gray-400'
                    }`}
                    value={visitedForm.placeName}
                    onChange={e => setVisitedForm({...visitedForm, placeName: e.target.value})}
                  />
                  <div className="mb-2">
                    <label className={`block text-[10px] font-bold uppercase mb-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Upload Photo</label>
                    <input 
                      type="file" 
                      accept="image/*"
                      className={`w-full text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold ${
                        isDarkMode 
                          ? 'text-gray-400 file:bg-gray-800 file:text-emerald-400' 
                          : 'text-gray-500 file:bg-emerald-50 file:text-emerald-700'
                      }`}
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setVisitedForm({...visitedForm, photo: reader.result as string});
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  <textarea 
                    placeholder="What's your story there?" 
                    className={`w-full p-2 mb-3 border-b focus:outline-none text-sm resize-none h-20 bg-transparent ${
                      isDarkMode ? 'border-gray-800 text-white placeholder-gray-600' : 'border-gray-100 text-gray-900 placeholder-gray-400'
                    }`}
                    value={visitedForm.comment}
                    onChange={e => setVisitedForm({...visitedForm, comment: e.target.value})}
                  />
                  <Button isDarkMode={isDarkMode} onClick={handleAddVisited} className="py-2 text-xs">Post Visit</Button>
                </div>

                <div className="space-y-6">
                  {currentUser.visitedPlaces.map(visit => (
                    <div key={visit.id} className="border-l-2 border-emerald-500 pl-4 py-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-900'}`}>{visit.placeName}</h4>
                        <span className="text-[10px] text-gray-500 font-bold uppercase">{visit.date}</span>
                      </div>
                      <img src={visit.photo} alt={visit.placeName} className="w-full h-48 object-cover rounded-2xl mb-3 shadow-sm" />
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        {visit.comment}
                      </p>
                      <div className="flex gap-4 mt-3">
                        <button className="text-gray-500 hover:text-red-500 transition-colors"><Heart size={18} /></button>
                        <button className="text-gray-500 hover:text-emerald-500 transition-colors"><MessageSquare size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <Star size={20} className="text-yellow-500" /> Our Recommendation
                  </h3>
                  <div className="space-y-6">
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">JM</div>
                        <div>
                          <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Janice Madeleine</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Balai Sarbini</p>
                        </div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" 
                        alt="TERAS 2025" 
                        className="w-full h-48 object-cover rounded-xl mb-3 shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <p className={`text-xs italic leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        "captured saat TERAS 2025 oleh SMAN 3 Jakarta"
                      </p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">SR</div>
                        <div>
                          <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shopia Renaissy</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Aloha PIK</p>
                        </div>
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                        alt="Aloha PIK" 
                        className="w-full h-48 object-cover rounded-xl mb-3 shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <p className={`text-xs italic leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        "seru banget terutama untuk anak muda yang mau spend time bareng teman-teman!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button isDarkMode={isDarkMode} variant="danger" onClick={() => { setCurrentUser(null); setCurrentScreen('LOGIN'); }} className="mt-8">
                <LogOut size={18} className="inline mr-2" /> Logout
              </Button>
            </div>
          </motion.div>
        )}

        {/* --- EXPLORE TRANSPORT SCREEN --- */}
        {currentScreen === 'EXPLORE_TRANSPORT' && (
          <motion.div 
            key="transport"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pb-24"
          >
            {renderHeader(selectedTransportRoute ? selectedTransportRoute.name : "Explore Transport")}
            
            <div className="p-4">
              {!selectedTransportRoute ? (
                <div className="space-y-6">
                  <div className={`p-5 rounded-3xl border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-blue-50 border-blue-100'}`}>
                    <h3 className={`font-black flex items-center gap-2 mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                      <Compass size={20} /> Transport Info
                    </h3>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-blue-700'}`}>
                      Jakarta is now connected with modern transportation modes. Check MRT, LRT, and TransJakarta routes and fares below.
                    </p>
                  </div>

                  {/* Payment Methods Section */}
                  <div className={`p-5 rounded-3xl border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-emerald-50 border-emerald-100'}`}>
                    <h3 className={`font-black flex items-center gap-2 mb-3 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
                      <ExternalLink size={18} /> Payment Methods
                    </h3>
                    <div className="space-y-3">
                      {TRANSPORT_PAYMENT_METHODS.map((method, i) => (
                        <div key={i}>
                          <p className={`text-[11px] font-black uppercase tracking-wider mb-1 ${isDarkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>
                            {method.name}
                          </p>
                          <p className={`text-[10px] leading-tight ${isDarkMode ? 'text-gray-400' : 'text-emerald-900/60'}`}>
                            {method.providers.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {TRANSPORT_ROUTES.map(route => (
                      <motion.button
                        key={route.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTransportRoute(route)}
                        className={`p-4 rounded-3xl border text-left flex items-center justify-between transition-all ${
                          isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: route.color }}>
                            {route.type}
                          </div>
                          <div>
                            <h4 className="font-black text-sm leading-tight">{route.name}</h4>
                            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mt-1">{route.fare}</p>
                          </div>
                        </div>
                        <ChevronLeft size={20} className="rotate-180 text-gray-400" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full text-white text-[10px] font-black" style={{ backgroundColor: selectedTransportRoute.color }}>
                        {selectedTransportRoute.type}
                      </div>
                      <span className="text-xs font-bold text-gray-500">{selectedTransportRoute.fare}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedTransportRoute(null)}
                      className="text-xs font-bold text-emerald-500"
                    >
                      See All Routes
                    </button>
                  </div>

                  <div className={`p-6 rounded-3xl border relative overflow-hidden ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-lg'
                  }`}>
                    {/* Route Line Visualization */}
                    <div className="absolute left-8 top-10 bottom-10 w-1 rounded-full opacity-30" style={{ backgroundColor: selectedTransportRoute.color }}></div>
                    
                    <div className="space-y-8 relative z-10">
                      {selectedTransportRoute.stations.map((station, idx) => (
                        <div key={idx} className="flex items-center gap-6">
                          <div className={`w-5 h-5 rounded-full border-4 z-10 ${
                            isDarkMode ? 'bg-gray-900' : 'bg-white'
                          }`} style={{ borderColor: selectedTransportRoute.color }}>
                            {station.isInterchange && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <div>
                            <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {station.name}
                            </p>
                            {station.isInterchange && (
                              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Interchange Station</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                    <p className="text-[10px] text-gray-500 italic">
                      * Fares are subject to change according to the management's policy.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* --- EXPLORE HOTELS SCREEN --- */}
        {currentScreen === 'EXPLORE_HOTELS' && (
          <motion.div 
            key="hotels"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pb-24"
          >
            {renderHeader("Jakarta Accommodations")}
            
            <div className="p-4">
              <div className="mb-6">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Star Filter</h3>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => setSelectedHotelStar(null)}
                    className={`px-4 py-2 rounded-full border-2 whitespace-nowrap font-bold text-xs transition-all ${
                      selectedHotelStar === null 
                        ? 'border-indigo-500 bg-indigo-500 text-white' 
                        : isDarkMode ? 'border-gray-800 bg-gray-900 text-gray-500' : 'border-gray-100 bg-white text-gray-500'
                    }`}
                  >
                    All
                  </button>
                  {([5, 4, 3, 2, 1] as HotelStar[]).map(star => (
                    <button
                      key={star}
                      onClick={() => setSelectedHotelStar(star)}
                      className={`px-4 py-2 rounded-full border-2 whitespace-nowrap font-bold text-xs flex items-center gap-1 transition-all ${
                        selectedHotelStar === star 
                          ? 'border-indigo-500 bg-indigo-500 text-white' 
                          : isDarkMode ? 'border-gray-800 bg-gray-900 text-gray-500' : 'border-gray-100 bg-white text-gray-500'
                      }`}
                    >
                      {star} <Star size={12} className={selectedHotelStar === star ? 'fill-white' : 'fill-gray-500'} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {HOTELS.filter(h => selectedHotelStar === null || h.stars === selectedHotelStar).map(hotel => (
                  <Card key={hotel.id} isDarkMode={isDarkMode} className="flex flex-col">
                    <div className="h-48 relative">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-indigo-600 px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                        <span className="text-[10px] font-black text-white">{hotel.stars}</span>
                        <Star size={10} className="text-white fill-white" />
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white">
                        {hotel.region}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className={`font-black text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{hotel.name}</h4>
                      <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {hotel.description}
                      </p>
                      
                      <div className={`p-3 rounded-xl mb-4 border italic text-[11px] ${
                        isDarkMode ? 'bg-gray-800/50 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-100 text-gray-500'
                      }`}>
                        <MapPin size={12} className="inline mr-1 mb-0.5" /> {hotel.address}
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-colors ${
                          isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100'
                        }`}>
                          <Globe size={16} className="text-emerald-500" />
                          <span className="text-[9px] font-bold uppercase text-emerald-700">Maps</span>
                        </a>
                        <a href={hotel.socialMedia} target="_blank" rel="noreferrer" className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-colors ${
                          isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-pink-50 border-pink-100 hover:bg-pink-100'
                        }`}>
                          <Instagram size={16} className="text-pink-500" />
                          <span className="text-[9px] font-bold uppercase text-pink-700">IG</span>
                        </a>
                        <a href={hotel.website} target="_blank" rel="noreferrer" className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-colors ${
                          isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                        }`}>
                          <ExternalLink size={16} className="text-blue-500" />
                          <span className="text-[9px] font-bold uppercase text-blue-700">Web</span>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* --- ADD RECOMMENDATION SCREEN --- */}
        {currentScreen === 'ADD_RECOMMENDATION' && (
          <motion.div 
            key="add-rec"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pb-24"
          >
            {renderHeader("Add Recommendation")}
            
            <div className="p-6">
              <Card className="p-6" isDarkMode={isDarkMode}>
                <Input 
                  label="Place Name" 
                  isDarkMode={isDarkMode}
                  value={recommendationForm.name} 
                  onChange={(v: string) => setRecommendationForm({ ...recommendationForm, name: v })}
                  placeholder="Example: Senja Coffee Shop"
                />
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Region</label>
                  <select 
                    value={recommendationForm.region}
                    onChange={e => setRecommendationForm({...recommendationForm, region: e.target.value as Region})}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
                    }`}
                  >
                    {['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'].map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <Input 
                  label="Address" 
                  isDarkMode={isDarkMode}
                  value={recommendationForm.address} 
                  onChange={(v: string) => setRecommendationForm({ ...recommendationForm, address: v })}
                  placeholder="Jl. Raya No. 123..."
                />
                <Input 
                  label="Social Media" 
                  isDarkMode={isDarkMode}
                  value={recommendationForm.socialMedia} 
                  onChange={(v: string) => setRecommendationForm({ ...recommendationForm, socialMedia: v })}
                  placeholder="@username"
                />
                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
                  <textarea 
                    value={recommendationForm.description}
                    onChange={e => setRecommendationForm({...recommendationForm, description: e.target.value})}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32 resize-none ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-600' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Tell us about this place..."
                  />
                </div>
                <Button isDarkMode={isDarkMode} onClick={handleAddRecommendation}>Save Recommendation</Button>
              </Card>
            </div>
          </motion.div>
        )}

        {/* --- CINEMAS SCREEN --- */}
        {currentScreen === 'CINEMAS' && (
          <motion.div 
            key="cinemas"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pb-24"
          >
            {renderHeader("Entertainment in Jakarta")}
            
            <div className="p-6 space-y-8">
              <div className={`p-5 rounded-3xl border-2 ${
                isDarkMode ? 'bg-gray-900 border-purple-900/30' : 'bg-purple-50 border-purple-100 shadow-sm'
              }`}>
                <h3 className="text-lg font-black mb-1 text-purple-600">Film Recommendations 🎬</h3>
                <p className="text-xs text-gray-500 mb-4">Check out these top picks for your movie night.</p>
                
                {CINEMA_DATA.map((group, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <h4 className="text-sm font-black uppercase tracking-widest text-purple-500 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      {group.genre}
                    </h4>
                    <div className="space-y-3">
                      {group.movies.map((movie, mIdx) => (
                        <div key={mIdx} className={`p-4 rounded-2xl border ${
                          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                        }`}>
                          <p className="font-bold text-sm mb-1">{movie.title}</p>
                          <p className="text-[10px] opacity-60 leading-tight">{movie.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-black mb-4">Entertainment Locations</h3>
                <div className="space-y-4">
                  {JAKARTA_CINEMAS.map(cinema => (
                    <Card key={cinema.id} isDarkMode={isDarkMode} className="flex gap-4 p-3">
                      <img src={cinema.image} alt={cinema.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm">{cinema.name}</h4>
                          <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${
                            cinema.chain === 'XXI' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-red-500/10 text-red-600'
                          }`}>{cinema.chain}</span>
                        </div>
                        <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-2">
                          <MapPin size={10} /> {cinema.address}
                        </p>
                        <a 
                          href={cinema.mapsUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[10px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink size={10} /> View on Maps
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                <p className="text-[10px] text-gray-500 italic">
                  * Cinema schedules and movie availability may vary by location.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- TRANSLATE SCREEN --- */}
        {currentScreen === 'TRANSLATE' && (
          <motion.div 
            key="translate"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pb-24"
          >
            {renderHeader("Translator")}
            
            <div className="p-6">
              <div className={`p-6 rounded-3xl border-2 mb-6 ${
                isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-orange-50 shadow-sm'
              }`}>
                <h3 className="text-lg font-black mb-1">Get to know Indonesians better! 🇮🇩</h3>
                <p className="text-xs text-gray-500 mb-6">Learn local slang or translate your thoughts.</p>
                
                <div className="flex items-center justify-between mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                  <button 
                    onClick={() => setTranslateMode('EN-ID')}
                    className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                      translateMode === 'EN-ID' ? 'bg-white dark:bg-gray-700 shadow-sm text-orange-500' : 'text-gray-500'
                    }`}
                  >
                    EN → ID
                  </button>
                  <button 
                    onClick={() => setTranslateMode('ID-EN')}
                    className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                      translateMode === 'ID-EN' ? 'bg-white dark:bg-gray-700 shadow-sm text-orange-500' : 'text-gray-500'
                    }`}
                  >
                    ID → EN
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Input Text</label>
                    <textarea 
                      value={translateInput}
                      onChange={e => setTranslateInput(e.target.value)}
                      placeholder={translateMode === 'EN-ID' ? "Type in English..." : "Ketik dalam Bahasa Indonesia..."}
                      className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none text-sm ${
                        isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-900'
                      }`}
                    />
                  </div>

                  <Button 
                    isDarkMode={isDarkMode} 
                    onClick={handleTranslate} 
                    disabled={isTranslating || !translateInput.trim()}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    {isTranslating ? "Translating..." : "Translate Now"}
                  </Button>

                  {translateOutput && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-2xl border-2 ${
                        isDarkMode ? 'bg-gray-800 border-orange-900/30' : 'bg-orange-50 border-orange-100'
                      }`}
                    >
                      <label className="text-[10px] font-black uppercase text-orange-500 mb-1 block">Result</label>
                      <p className={`text-sm font-bold leading-relaxed ${isDarkMode ? 'text-white' : 'text-orange-900'}`}>
                        {translateOutput}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* News Modal */}
      <AnimatePresence>
        {showFullNews && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-black text-lg">Jakarta News</h3>
                <button onClick={() => setShowFullNews(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronLeft className="rotate-90" />
                </button>
              </div>
              <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6 no-scrollbar">
                {news.map(item => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-blue-500 uppercase">{item.source}</span>
                      <span className="text-[10px] text-gray-500">{item.time}</span>
                    </div>
                    <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t">
                <Button isDarkMode={isDarkMode} onClick={() => setShowFullNews(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RATING MODAL --- */}
      {showRatingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`rounded-3xl p-8 w-full max-w-xs text-center shadow-2xl ${
              isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-100'
            }`}>
              <Star size={32} className="text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Rate this place!</h3>
            <p className="text-gray-500 text-sm mb-6">How was your experience at {selectedPlace?.name}?</p>
            
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map(s => (
                <button 
                  key={s} 
                  onClick={() => setRating(s)}
                  className="transition-transform active:scale-125"
                >
                  <Star 
                    size={32} 
                    className={`${rating >= s ? 'text-yellow-500 fill-yellow-500' : isDarkMode ? 'text-gray-800' : 'text-gray-200'}`} 
                  />
                </button>
              ))}
            </div>
            
            <Button isDarkMode={isDarkMode} onClick={handleRatingSubmit} disabled={rating === 0}>Submit Rating</Button>
          </motion.div>
        </div>
      )}

      {/* --- NAVIGATION BAR --- */}
      {currentUser && currentScreen !== 'SIGN_UP' && currentScreen !== 'LOGIN' && (
        <div className={`fixed bottom-0 left-0 right-0 h-20 backdrop-blur-xl border-t px-8 flex items-center justify-between max-w-md mx-auto z-40 ${
          isDarkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-100'
        }`}>
          <button onClick={() => setCurrentScreen('MAP')} className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'MAP' ? 'text-emerald-500' : 'text-gray-500'}`}>
            <Home size={24} />
            <span className="text-[10px] font-bold uppercase">Home</span>
          </button>
          <button onClick={() => setCurrentScreen('PROFILE')} className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'PROFILE' ? 'text-emerald-500' : 'text-gray-500'}`}>
            <User size={24} />
            <span className="text-[10px] font-bold uppercase">Profile</span>
          </button>
          <button onClick={() => setCurrentScreen('ADD_RECOMMENDATION')} className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'ADD_RECOMMENDATION' ? 'text-emerald-500' : 'text-gray-500'}`}>
            <Plus size={24} />
            <span className="text-[10px] font-bold uppercase">Add</span>
          </button>
        </div>
      )}
    </div>
  );
}
