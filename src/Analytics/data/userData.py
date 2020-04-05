from datetime import datetime, timedelta


def fetchUserData():
    dateFrom = '2005-01-01'
    dateTo = datetime.now()
    dateList = dateTo - dateFrom
    dateList.timedelta(0, 5, 203000)
