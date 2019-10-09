import pandas as pd
import requests
import warnings
import socket
import json

from urllib.request import urlopen
from urllib.error import URLError

warnings.filterwarnings("ignore")

server = 'http://10.11.160.83/'
nodelocalhost = 'http://localhost:3000/'
post_entry_url = 'http://localhost:3000/addentry'

headers = { 'Content-Type' : 'application/json'}

def server_reachable():
    try:
        urlopen(nodelocalhost, timeout=5)
        return True
    except URLError as err:
        return False
    except socket.timeout:
        print ("Server timeout")
        return False

def change_data_type (dataframe, columns, data_type):
    for column in columns:
        dataframe [column] = dataframe[column].astype(data_type)

def calculate_percentage (dataframe, column_1, column_2):
    dataframe.apply (lambda row: (row.column_1 / row.column_2 )*100, axis=1)


def load_post_data():
    data = pd.read_csv('extractData.txt', sep="|", header=None)
    data = data.fillna(0)
    data = data [:-1]
    data.columns = ["manifest_name", "begin_date", "end_date", "servedHH", "servedPopn", "plannedHH", "plannedPopn"]

    data['percent_HH'] = data.apply(lambda row: (row.servedHH / row.plannedHH)*100, axis=1)
    data['percent_Popn'] = data.apply(lambda row: (row.servedPopn / row.plannedPopn)*100, axis=1)

    columns = ['percent_HH', 'percent_Popn', 'servedHH' , 'servedPopn', 'plannedHH' , 'plannedPopn' ]

    change_data_type (data, columns, 'int64')
    change_data_type (data, columns, 'str')

    data['hostname'] = socket.gethostname()
    data[['settlement','cycle', 'cycle_year', 'mod', 'fdp', 'modality']] = data.manifest_name.apply(lambda x: pd.Series(str(x).split("-", 5)))
    data = data.drop(['mod'], axis =1)

    area = []
    field = []
    
    for row in data['settlement']:
        if row == 'Lobule' or 'Rhino' or 'Imvepi' or 'Bidibidi':
            area.append('Arua')
            field.append ('Koboko')
        elif row == 'Adjumani' or 'Palabek' or 'Palorinya' or 'Kiryandongo':
            area.append('Arua')
            field.append ('Gulu')
        elif row == 'Nakivale' or 'Oruchinga':
            area.append('Mbarara')
            field.append ('Isingiro')
        elif row == 'Rwamwanja' or 'Kyaka':
            area.append('Mbarara')
            field.append ('Kyenjojo')
        elif row == 'Kyangwali':
            area.append('Mbarara')
            field.append ('Kyangwali')
        else:
            area.append('None')
            field.append ('None')
       
    # Create a column from the list
    data['area'] = area
    data['field'] = field 

    json_string = data.to_json(orient='records')
    print ("Wrangles")

    json_data = json.loads(json_string)

    try:
        for entry in json_data:
            requests.post(post_entry_url, data=json.dumps(entry), headers=headers)
        print ("Posts Successful")
    except:
        print ("Failed to post")

def main ():
    if (server_reachable() == True):
        print ("Server AVAILABLE")
        load_post_data()

    else:
        print ("Server UNAVAILABLE")

if __name__ == '__main__':
    main()


