from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import AIMessage, HumanMessage
from dotenv import load_dotenv
import os

from google.oauth2 import service_account
from google.auth.transport.requests import Request
import google.auth

service_account_path = 'F:/Trade Vision/TradeVision/backend/blueprints/ChatBotService/key.json'
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = service_account_path

credentials = service_account.Credentials.from_service_account_file(service_account_path)
print(f"Credentials: {credentials}")

class StockMarketChatbotService:
    def __init__(self):
        # Load environment variables from .env file
        load_dotenv()

        # Get the API key from environment variables
        self.api_key = "AIzaSyA1gFe81hIs2_1m-F5ZnD7MlQNtvBJaiEw"  # Secure the API key
        print(f"API Key: {self.api_key}")

        # Initialize embeddings and LLM (make sure credentials are properly handled)
        self.embeddings = GoogleGenerativeAIEmbeddings(api_key=self.api_key, model="models/embedding-001")
        self.llm = ChatGoogleGenerativeAI(api_key=self.api_key, model="gemini-1.5-flash", temperature=0.3, max_tokens=1000)
        self.chat_history = []

        self.persist_directory = "local_chroma_db_stock"
        self.vectorstore = self.initialize_vector_store()

        # Initialize retriever
        self.retriever = self.vectorstore.as_retriever(search_kwargs={"k": 10})

        # Define system prompts
        self.system_prompt = (
            "You are a stock market assistant. Answer the user's question based on the stock market context."
        )

        self.prompt_template = ChatPromptTemplate.from_messages(
            [
                ("system", self.system_prompt),
                MessagesPlaceholder("chat_history"),
                ("human", "{input}"),
            ]
        )

    def initialize_vector_store(self):
        # Check if the vector store already exists
        if os.path.exists(self.persist_directory) and len(os.listdir(self.persist_directory)) > 0:
            # Load the existing vector store
            print(f"Loading existing vector store from {self.persist_directory}")
            return Chroma(persist_directory=self.persist_directory, embedding_function=self.embeddings, collection_name="stock_market")

        else:
            # If vector store doesn't exist, fetch data and create it
            print("Fetching data from websites and creating vector store...")
            urls = [
                "https://www.investopedia.com/terms/s/stockmarket.asp",
                "https://en.wikipedia.org/wiki/Stock_market",
                "https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/stock-market/",
                "https://www.nerdwallet.com/article/investing/what-is-the-stock-market",
                "https://economictimes.indiatimes.com/definition/stock-market",
                "https://www.forbes.com/advisor/investing/what-is-the-stock-market/",
                "https://www.ig.com/en/trading-need-to-knows/what-is-trading",
                "https://n26.com/en-eu/blog/what-is-trading",
                "https://groww.in/p/trading"
            ]

            documents = []
            for url in urls:
                loader = WebBaseLoader(url)
                docs = loader.load()
                documents.extend(docs)

            # Split the documents into manageable chunks
            text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
            texts = text_splitter.split_documents(documents)

            # Create vector store from texts
            vectorstore = Chroma(persist_directory=self.persist_directory, embedding_function=self.embeddings, collection_name="stock_market")
            vectorstore.add_documents(texts)

            return vectorstore

    def qa_chain(self, question):
        # Log the incoming question
        print(f"Question: {question}")

        # Invoke retriever to get documents
        retrieved_docs = self.retriever.get_relevant_documents(question)

        # Convert retrieved_docs to a string if it's a list
        if isinstance(retrieved_docs, list):
            retrieved_docs = "\n\n".join([doc.page_content for doc in retrieved_docs if hasattr(doc, 'page_content')])

        # Create the prompt with retrieved context and question
        prompt = (
            "You are a stock market assistant. Use the following pieces of retrieved context to answer "
            "the question. If you don't know the answer, say that you don't know."
            "\n\n"
            "{context}"
            "\n\n"
            "chat_history :"
            "{chat_history} "
            "human :"
            "{question}"
        ).format(context=retrieved_docs, question=question, chat_history=self.chat_history)

        # Pass the formatted prompt to the LLM
        result = self.llm.invoke(prompt)

        # Handle different result formats
        if isinstance(result, dict) and 'content' in result:
            return result['content']
        elif isinstance(result, str):
            return result
        elif isinstance(result, AIMessage):
            # Handle AIMessage object
            return result.content
        else:
            raise ValueError(f"Unexpected result format: {type(result)}")

    def chatbot(self, question):
        result = self.qa_chain(question)
        # Retain only the last 3 conversations in history
        if len(self.chat_history) >= 6:
            self.chat_history = self.chat_history[-3:]

        self.chat_history.extend([
            HumanMessage(content=question),
            AIMessage(content=result),
        ])

        return result

chatbot_service = StockMarketChatbotService()
