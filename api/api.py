import time
from flask import Flask
from joblib import load
import numpy as np

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

columns = ['yearsofexperience', 'location_Arlington,VA', 'location_Atlanta,GA', 'location_Austin,TX', 'location_Bangalore,KA,India', 'location_Bellevue,WA', 'location_Bengaluru,KA,India', 'location_Berlin,BE,Germany', 'location_Boston,MA', 'location_Boulder,CO', 'location_Cambridge,MA', 'location_Chicago,IL', 'location_Cupertino,CA', 'location_Dallas,TX', 'location_Denver,CO', 'location_Dublin,DN,Ireland', 'location_Folsom,CA', 'location_FosterCity,CA', 'location_Herndon,VA', 'location_Hillsboro,OR', 'location_Houston,TX', 'location_Hyderabad,TS,India', 'location_Irvine,CA', 'location_JerseyCity,NJ', 'location_Kirkland,WA', 'location_London,EN,UnitedKingdom', 'location_LosAngeles,CA', 'location_LosGatos,CA', 'location_Madison,WI', 'location_MenloPark,CA', 'location_Milpitas,CA', 'location_Minneapolis,MN', 'location_Montreal,QC,Canada', 'location_Moscow,MC,Russia', 'location_MountainView,CA', 'location_NewYork,NY', 'location_Ottawa,ON,Canada', 'location_PaloAlto,CA', 'location_Philadelphia,PA', 'location_Phoenix,AZ', 'location_Pittsburgh,PA', 'location_Plano,TX', 'location_Pleasanton,CA', 'location_Portland,OR', 'location_Raleigh,NC', 'location_Redmond,WA', 'location_RedwoodCity,CA', 'location_Reston,VA', 'location_Richmond,VA', 'location_SanBruno,CA', 'location_SanDiego,CA', 'location_SanFrancisco,CA', 'location_SanJose,CA', 'location_SanMateo,CA', 'location_SantaClara,CA', 'location_SantaMonica,CA', 'location_Seattle,WA', 'location_Singapore,SG,Singapore', 'location_Sunnyvale,CA', 'location_Sydney,NS,Australia', 'location_TelAviv,TA,Israel', 'location_Toronto,ON,Canada', 'location_Vancouver,BC,Canada', 'location_Washington,DC', 'location_Zurich,ZH,Switzerland', 'title_Data_Scientist', 'title_Hardware_Engineer', 'title_Management_Consultant', 'title_Marketing', 'title_Product_Designer', 'title_Product_Manager', 'title_Software_Engineer', 'title_Software_Engineering_Manager', 'title_Solution_Architect', 'title_Technical_Program_Manager']

@app.route('/<yearsofexperience>/<location>/<title>') 
def predict_salary(yearsofexperience,location,title):
    parameters = [int(yearsofexperience)]
    for i in range(1, len(columns)):
        if columns[i][0] == 'l' and columns[i] == 'location_' + location:
            parameters.append(1)
        elif columns[i][0] == 't' and columns[i] == 'title_' + title:
            parameters.append(1)
        else:
            parameters.append(0) 
    print(parameters)

    # load the saved pipleine model
    model = load("../salary_predict2.joblib")
    parameters = np.array(parameters).reshape(1, -1)

    # predict salary from the model
    result = model.predict(parameters)

    return "{:.2f}".format(result[0])