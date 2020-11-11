import time
from flask import Flask
from joblib import load
import numpy as np

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

columns = ['yearsofexperience', 'yearsatcompany', 'location_Arlington,VA', 'location_Atlanta,GA',
'location_Austin,TX', 'location_Bangalore,KA,India', 'location_Bellevue,WA', 'location_Bengaluru,KA,India',
'location_Berlin,BE,Germany', 'location_Boston,MA', 'location_Boulder,CO', 'location_Cambridge,MA',
'location_Chicago,IL', 'location_Cupertino,CA', 'location_Dallas,TX', 'location_Denver,CO',
'location_Dublin,DN,Ireland', 'location_Herndon,VA', 'location_Hillsboro,OR', 'location_Houston,TX',
'location_Hyderabad,TS,India', 'location_Irvine,CA', 'location_Jersey City,NJ', 'location_Kirkland,WA',
'location_London,EN,UnitedKingdom', 'location_LosAngeles,CA', 'location_LosGatos,CA', 'location_MenloPark,CA',
'location_Minneapolis,MN', 'location_Moscow,MC,Russia', 'location_MountainView,CA', 'location_NewYork,NY',
'location_PaloAlto,CA', 'location_Philadelphia,PA', 'location_Phoenix,AZ', 'location_Pittsburgh,PA',
'location_Plano,TX', 'location_Pleasanton,CA', 'location_Portland,OR', 'location_Raleigh,NC', 'location_Redmond,WA',
'location_RedwoodCity,CA', 'location_SanBruno,CA', 'location_SanDiego,CA', 'location_SanFrancisco,CA',
'location_SanJose,CA', 'location_SantaClara,CA', 'location_Seattle,WA', 'location_Singapore,SG,Singapore',
'location_Sunnyvale,CA', 'location_Sydney,NS,Australia', 'location_TelAviv,TA,Israel', 'location_Toronto,ON,Canada',
'location_Vancouver,BC,Canada', 'location_Washington,DC', 'location_Zurich,ZH,Switzerland', 'title_Data_Scientist',
'title_Hardware_Engineer', 'title_Management_Consultant', 'title_Marketing', 'title_Product_Designer',
'title_Product_Manager', 'title_Software_Engineer', 'title_Software_Engineering_Manager', 'title_Solution_Architect',
'title_Technical_Program_Manager', 'gender_Male', 'gender_Other']

@app.route('/<yearsofexperience>/<yearsatcompany>/<location>/<title>/<gender>') 
def predict_salary(yearsofexperience,yearsatcompany,location,title,gender):
    parameters = [int(yearsofexperience),int(yearsatcompany)]
    for i in range(2, len(columns)):
        if columns[0] == 'l' and columns == 'location_' + location:
            parameters.append(1)
        elif columns[0] == 't' and columns == 'title_' + title:
            parameters.append(1)
        elif columns[0] == 'g' and columns == 'gender_' + gender:
            parameters.append(1)
        else:
            parameters.append(0) 

    # load the saved pipleine model
    model = load("../salary_predict.joblib")
    parameters = np.array(parameters).reshape(1, -1)

    # predict salary from the model
    result = model.predict(parameters)
    print(result)
    return str(result[0])