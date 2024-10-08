import yfinance as yf

class StockDataFetcher:
    def __init__(self, ticker):
        """
        Initializes the StockDataFetcher with a given ticker symbol.

        :param ticker: str, Stock ticker symbol (e.g., 'AAPL')
        """
        self.ticker = ticker
        self.stock = yf.Ticker(ticker)

    def fetch_daily_data(self, start_date, end_date):
        """
        Fetches daily historical stock data for the given date range.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :return: pandas.DataFrame, Daily stock data
        """
        df = self.stock.history(start=start_date, end=end_date, interval='1d')
        return df.reset_index()

    def fetch_hourly_data(self, start_date, end_date):
        """
        Fetches hourly historical stock data for the given date range.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :return: pandas.DataFrame, Hourly stock data
        """
        df = self.stock.history(start=start_date, end=end_date, interval='1h')
        return df.reset_index()

    def fetch_weekly_data(self, start_date, end_date):
        """
        Fetches weekly historical stock data for the given date range.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :return: pandas.DataFrame, Weekly stock data
        """
        df = self.stock.history(start=start_date, end=end_date, interval='1wk')
        return df.reset_index()

    def fetch_monthly_data(self, start_date, end_date):
        """
        Fetches monthly historical stock data for the given date range.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :return: pandas.DataFrame, Monthly stock data
        """
        df = self.stock.history(start=start_date, end=end_date, interval='1mo')
        return df.reset_index()

    def fetch_intraday_data(self, start_date, end_date):
        """
        Fetches intraday historical stock data for the given date range.
        Note: The interval here is set to 1 minute.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :return: pandas.DataFrame, Intraday stock data
        """
        df = self.stock.history(start=start_date, end=end_date, interval='1m')
        return df.reset_index()

    def fetch_custom_interval_data(self, start_date, end_date, interval):
        """
        Fetches stock data for a custom interval.

        :param start_date: str, Start date in 'YYYY-MM-DD' format
        :param end_date: str, End date in 'YYYY-MM-DD' format
        :param interval: str, Interval string as accepted by yfinance (e.g., '5m', '15m', '1d')
        :return: pandas.DataFrame, Stock data for the custom interval
        """
        df = self.stock.history(start=start_date, end=end_date, interval=interval)
        return df.reset_index()
