import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const  questions = [
  {
    question: "1. What is Artificial Intelligence?",
    answer: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
    explanation: "These processes include learning (acquiring information), reasoning (using rules to reach conclusions), and self-correction.",
    code: `// No code: This is a theoretical concept.`
  },
  {
    question: "2. What are the types of AI?",
    answer: "The main types of AI are Narrow AI, General AI, and Super AI.",
    explanation: "Narrow AI performs specific tasks, General AI mimics human intelligence, and Super AI surpasses human intelligence.",
    code: `// No code: Conceptual classification.`
  },
  {
    question: "3. What is the difference between AI, Machine Learning, and Deep Learning?",
    answer: "AI is the broader concept, Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning.",
    explanation: "Machine Learning uses statistical methods to allow machines to improve with experience. Deep Learning uses neural networks with multiple layers.",
    code: `// No code: Conceptual explanation.`
  },
  {
    question: "4. What is a neural network?",
    answer: "A neural network is a set of algorithms designed to recognize patterns, modeled after the human brain.",
    explanation: "It consists of layers of nodes (neurons) that transform inputs into outputs using weights, biases, and activation functions.",
    code: `from keras.models import Sequential
model = Sequential()`
  },
  {
    question: "5. What is the Turing Test?",
    answer: "The Turing Test evaluates a machine's ability to exhibit intelligent behavior indistinguishable from a human.",
    explanation: "If a human cannot reliably distinguish the machine from a human, the machine passes the test.",
    code: `// No code: Conceptual explanation.`
  },
  {
    question: "6. What is supervised learning?",
    answer: "Supervised learning is a type of machine learning where the model is trained on labeled data.",
    explanation: "It uses input-output pairs to learn a mapping function.",
    code: `from sklearn.linear_model import LinearRegression
model = LinearRegression().fit(X, y)`
  },
  {
    question: "7. What is unsupervised learning?",
    answer: "Unsupervised learning is a type of machine learning where the model is trained on unlabeled data.",
    explanation: "It tries to find hidden patterns or intrinsic structures in the input data.",
    code: `from sklearn.cluster import KMeans
model = KMeans(n_clusters=3).fit(X)`
  },
  {
    question: "8. What is reinforcement learning?",
    answer: "Reinforcement learning is a type of learning where an agent learns to make decisions by taking actions in an environment to maximize cumulative reward.",
    explanation: "It uses rewards and punishments to train agents through trial and error.",
    code: `# Example concept:
# Agent -> Action -> Environment -> Reward -> Update`
  },
  {
    question: "9. What is overfitting in AI models?",
    answer: "Overfitting occurs when a model learns the training data too well, including its noise, and performs poorly on unseen data.",
    explanation: "It leads to high training accuracy but low test accuracy.",
    code: `# Use techniques like dropout, regularization, or early stopping`
  },
  {
    question: "10. What is underfitting?",
    answer: "Underfitting happens when a model is too simple to capture the underlying patterns in the data.",
    explanation: "It results in poor performance on both training and test datasets.",
    code: `# Try more complex models or feature engineering`
  },
  {
    question: "11. What is precision in AI classification?",
    answer: "Precision is the ratio of correctly predicted positive observations to the total predicted positives.",
    explanation: "Precision = TP / (TP + FP)",
    code: `from sklearn.metrics import precision_score
precision_score(y_true, y_pred)`
  },
  {
    question: "12. What is recall?",
    answer: "Recall is the ratio of correctly predicted positive observations to all actual positives.",
    explanation: "Recall = TP / (TP + FN)",
    code: `from sklearn.metrics import recall_score
recall_score(y_true, y_pred)`
  },
  {
    question: "13. What is F1-Score?",
    answer: "The F1-score is the harmonic mean of precision and recall.",
    explanation: "F1 = 2 * (precision * recall) / (precision + recall)",
    code: `from sklearn.metrics import f1_score
f1_score(y_true, y_pred)`
  },
  {
    question: "14. What is a confusion matrix?",
    answer: "A confusion matrix shows the performance of a classification model by displaying true positives, false positives, false negatives, and true negatives.",
    explanation: "It helps evaluate the accuracy of a classification model.",
    code: `from sklearn.metrics import confusion_matrix
confusion_matrix(y_true, y_pred)`
  },
  {
    question: "15. What is a decision tree?",
    answer: "A decision tree is a flowchart-like tree structure where internal nodes represent tests on features, and leaf nodes represent outcomes.",
    explanation: "It is used for both classification and regression problems.",
    code: `from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier().fit(X, y)`
  },
  {
    question: "16. What is a support vector machine?",
    answer: "A Support Vector Machine (SVM) is a supervised learning model used for classification and regression analysis.",
    explanation: "It finds the hyperplane that best separates data into classes.",
    code: `from sklearn.svm import SVC
model = SVC().fit(X, y)`
  },
  {
    question: "17. What is Natural Language Processing (NLP)?",
    answer: "NLP is a field of AI that focuses on the interaction between computers and human language.",
    explanation: "It enables machines to read, understand, and derive meaning from human languages.",
    code: `import nltk
nltk.download('punkt')`
  },
  {
    question: "18. What is tokenization in NLP?",
    answer: "Tokenization is the process of breaking text into smaller components like words or sentences.",
    explanation: "It is a basic step in text processing.",
    code: `from nltk.tokenize import word_tokenize
word_tokenize("AI is awesome!")`
  },
  {
    question: "19. What is stemming?",
    answer: "Stemming is the process of reducing words to their root form.",
    explanation: "It removes suffixes like 'ing', 'ed', etc.",
    code: `from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
stemmer.stem("running")`
  },
  {
    question: "20. What is lemmatization?",
    answer: "Lemmatization reduces words to their base or dictionary form using vocabulary and morphological analysis.",
    explanation: "Unlike stemming, lemmatization returns real words.",
    code: `from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
lemmatizer.lemmatize("running", pos="v")`
  },
  {
    question: "21. What is a confusion matrix used for?",
    answer: "It is used to evaluate the performance of classification models.",
    explanation: "It shows true vs. predicted classes in a matrix format.",
    code: `# Already covered in question 14`
  },
  {
    question: "22. What is an activation function in neural networks?",
    answer: "Activation functions decide whether a neuron should be activated or not.",
    explanation: "Common examples include ReLU, Sigmoid, and Tanh.",
    code: `import torch.nn as nn
activation = nn.ReLU()`
  },
  {
    question: "23. What is backpropagation?",
    answer: "Backpropagation is an algorithm used to train neural networks by adjusting weights using gradients.",
    explanation: "It minimizes the error by propagating it backward from output to input layers.",
    code: `# Implicit in training neural nets using frameworks like TensorFlow or PyTorch`
  },
  {
    question: "24. What is gradient descent?",
    answer: "Gradient descent is an optimization algorithm used to minimize a loss function.",
    explanation: "It updates weights by taking steps proportional to the negative gradient of the loss function.",
    code: `# Example with learning rate alpha
# weight -= alpha * gradient`
  },
  {
    question: "25. What is a loss function?",
    answer: "A loss function measures the difference between predicted output and actual output.",
    explanation: "Common loss functions are MSE, Cross-Entropy, etc.",
    code: `import torch.nn as nn
loss = nn.MSELoss()`
  },
  {
    question: "26. What is transfer learning?",
    answer: "Transfer learning involves using a pre-trained model on a new but related problem.",
    explanation: "It saves time and resources by leveraging existing knowledge.",
    code: `from tensorflow.keras.applications import VGG16
model = VGG16(weights='imagenet', include_top=False)`
  },
  {
    question: "27. What is the difference between classification and regression?",
    answer: "Classification predicts discrete labels, regression predicts continuous values.",
    explanation: "E.g., classifying spam vs. not spam (classification) vs. predicting house price (regression).",
    code: `# Use LogisticRegression for classification, LinearRegression for regression`
  },
  {
    question: "28. What is cross-validation?",
    answer: "Cross-validation is a technique to evaluate the model performance by training and testing on different subsets of the data.",
    explanation: "It helps prevent overfitting and underfitting.",
    code: `from sklearn.model_selection import cross_val_score
cross_val_score(model, X, y, cv=5)`
  },
  {
    question: "29. What are hyperparameters?",
    answer: "Hyperparameters are the parameters set before training a model that influence the learning process.",
    explanation: "Examples include learning rate, number of epochs, and batch size.",
    code: `# Example: model = DecisionTreeClassifier(max_depth=3)`
  },
  {
    question: "30. What is an epoch in deep learning?",
    answer: "An epoch is one complete pass through the entire training dataset.",
    explanation: "Multiple epochs help the model learn better by updating weights repeatedly.",
    code: `# In Keras: model.fit(X, y, epochs=10)`
  }
];


      
  
export default function AiInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          AI(Artificial Intelligence) Interview Questions
            </h1>
  
            {questions.map((q, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                   {q.question}
                </h2>
  
                <p className="text-green-700 font-medium mb-2">
                <span className="font-semibold">Answer:</span> {q.answer}
                </p>
  
                <p className="text-gray-700 mb-3">
                <span className="font-semibold">Explanation:</span> {q.explanation}
                </p>
  
                <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-auto whitespace-pre-wrap">
                  <pre>
                    <code>{q.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  