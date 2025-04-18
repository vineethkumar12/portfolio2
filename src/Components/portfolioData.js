import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.png";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";

export const projects = [
  {
    id: 1,
    name: "Disease Prediction System Using Machine Learning",
    about:
      "Built a disease outcome prediction model using scikit-learn with Decision Trees and Logistic Regression on patient data. Deployed it in an interactive app for real-time use by healthcare professionals.",
    tech: ["Python", "scikit-learn", "Flask", "HTML", "CSS"],
    github:
      "https://github.com/mitravarun123/-Disease-Prediction-System-Using-Machine-Learning",
    link1: "https://vineethkumar.csre.in",
    src: img1, // Add image if needed
    video: "",
  },
  {
    id: 2,
    name: "Industrial Data Visualization Application",
    about:
      "Built a real-time Plotly Dash dashboard to visualize industrial machine performance with dynamic KPI filtering from a SQL backend.",
    tech: ["Python", "Plotly Dash", "SQL", "Plotly"],
    github:
      "https://github.com/mitravarun123/-Industrial-Data-Visualization-Application",
    link1: "",
    src: img2,
    video: "",
  },
  {
    id: 3,
    name: "Location Based Weather Forecasting Using Historical Data",
    about:
      "Developed an interactive app using ML models trained on API-based historical weather data to forecast and visualize future weather patterns.",
    tech: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Requests",
      "Flask",
      "Streamlit",
    ],
    github:
      "https://github.com/mitravarun123/Location-Based-Weather-Forecasting-Using-Historical-Data",
    link1: "",
    src: img3,
    video: "",
  },
  {
    id: 4,
    name: "Water Consumption Analysis & Prediction",
    about:
      "This project analyzes and predicts water consumption trends using historical data. It demonstrates effective data preprocessing, visualization, and model building using Python and Jupyter Notebook.",
    tech: ["Python", "Scikit-learn", "XgBoost", "Pandas", "Matplotlib"],
    github:
      "https://github.com/mitravarun123/Water_ConsumptionPrediction/tree/main",
    link1: "",
    src: img4,
    video: "",
  },
  {
    id: 5,
    name: "Real-Time Sign Language Detection Model",
    about:
      "Built a real-time sign language recognition app using CNN and OpenCV to convert live hand gestures into text for improved accessibility.",
    tech: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "CNN",
      "NumPy",
      "Flask",
      "Streamlit",
    ],
    github:
      "https://github.com/mitravarun123/Real-Time-Sign-Language-Detection-Model",
    link1: "",
    src: img6,
    video: "",
  },
  {
    id: 6,
    name: "Credit Risk Prediction Model",
    about:
      "Built a credit risk prediction model with XGBoost using financial data and deployed it via Flask for real-time loan approval insights.",
    tech: [
      "Python",
      "XGBoost",
      "SQL",
      "Pandas",
      "NumPy",
      "Flask",
      "scikit-learn",
    ],
    github: "https://github.com/mitravarun123/-Credit-Risk-Prediction-Model",
    link1: "",
    src: img7,
    video: "",
  },
  {
    id: 7,
    name: "Financial Forecasting Anomaly Detection Dashboard",
    about:
      "Developed a financial forecasting and anomaly detection dashboard using time series analysis with deep learning and machine learning models.",
    tech: [
      "Python",
      "LSTM",
      "GRU",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Plotly Dash",
      "Streamlit",
      "TensorFlow",
      "Keras",
      "SQL",
    ],
    github:
      "https://github.com/mitravarun123/Financial-Forecasting-Anomaly-Detection-Dashboard",
    link1: "",
    src: img8,
    video: "",
  },
  {
    id: 8,
    name: "End-to-End ML Pipeline for Industrial Image Classification System",
    about:
      "Built a TensorFlow-based image classification system for industrial defect detection with 92%+ accuracy, deployed via Flask and Docker for real-time quality checks.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Flask",
      "Docker",
      "scikit-learn",
      "HTML",
      "CSS",
    ],
    github:
      "https://github.com/mitravarun123/End-to-End-ML-pipeline-for-Industrial-Image-Classification-System",
    link1: "",
    src: img9,
    video: "",
  },
  {
    id: 9,
    name: "Twitter Sentiment Analysis Using LSTM and CNN",
    about:
      "Developed a Twitter sentiment analysis model using LSTM and CNN to classify tweets into positive, negative, or neutral sentiments.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Pandas",
      "Twitter API",
    ],
    github:
      "https://github.com/mitravarun123/Twitter-sentiment-analysis-using-lstm-and-cnn",
    link1: "",
    src: img10,
    video: "",
  },
  {
    id: 10,
    name: "Personalized Medical Chatbot using LLMs and Generative AI",
    about:
      "Developed a personalized medical chatbot using LLMs to provide real-time health advice, diagnose symptoms, and recommend treatments based on user medical history and data.",
    tech: [
      "Python",
      "GPT-4",
      "BioBERT",
      "Flask",
      "React",
      "HuggingFace",
      "Langchain",
    ],
    github:
      "https://github.com/mitravarun123/Personalized-medical-Chat-bot-using-LLMs-and-Generative-AI-",
    link1: "",
    src: img11,
    video: "",
  },
  {
    id: 11,
    name: "Generative Chatbot for Personalized Financial Advice",
    about:
      "Developed a generative AI-based chatbot using GPT-4 for personalized financial advice, helping users with investment strategies, budgeting, and saving plans based on their financial goals and data.",
    tech: [
      "GPT-4",
      "Python",
      "Flask",
      "MongoDB",
      "React",
      "Docker",
      "Kubernetes",
    ],
    github:
      "https://github.com/mitravarun123/-Generative-Chatbot-for-Personalized-Financial-Advice",
    link1: "",
    src: img12,
    video: "",
  },
  {
    id: 12,
    name: "Emotion Intelligence: A Scalable Sentiment Analysis Engine",
    about:
      "Engineered Emotion Intelligence, a scalable sentiment analysis engine using LangChain and Hugging Face, achieving 90%+ accuracy in real-time sentiment detection.",
    tech: ["LangChain", "HuggingFace", "Streamlit", "Python", "Flask"],
    github:
      "https://github.com/mitravarun123/Emotion-Intelligence-A-Scalable-Sentiment-Analysis-Engine",
    link1: "",
    src: img5,
    video: "",
  },
];
