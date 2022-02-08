# Animal Clinic
This repo contains a web application example made using Django/Python and React.js technologies.

## Getting Started
In the created web application, Django REST API is used on the backend and React is used on the frontend. Main features available in the web application:
1. The records of the staffs in the animal clinic can be made, examined and deleted.
	* All kinds of transactions related to the staffs can only be carried out by the Admin of the site.
2. A new customer and an animal record of this customer can be created.
3. Multiple animal records can be created for a customer.
4. Existing records can be searched by name, reviewed, updated, and deleted.
	* Staffs are required to log in to the site for all kinds of transactions other than deleting customer and animal records.

### Prerequisites
```
Python 3.8.x
asgiref==3.5.0
backports.zoneinfo==0.2.1
Django==4.0.2
django-cors-headers==3.11.0
djangorestframework==3.13.1
djangorestframework-simplejwt==5.0.0
PyJWT==2.3.0
pytz==2021.3
sqlparse==0.4.2
tzdata==2021.5
```

### Installing
1. Project files are downloaded from the Repo.
2. The virtual environment is set up and activated. It is recommended to have the virtual environment in the same folder as the project (in the same folder as manage.py). You can get help [here](https://medium.com/co-learning-lounge/create-virtual-environment-python-windows-2021-d947c3a3ca78) to set up the virtual environment.
3. After the virtual environment is activated, the `pip install requirements.txt` command is run.
4. The commands `python manage.py makemigrations` and `python manage.py migrate` are run respectively. 
5. After the installation is finished, the `python manage.py createsuperuser` command is run and the Admin user is created.
6. With the `python manage.py runserver` command, the web application is run locally. The main page is reached at the address [http://127.0.0.1:8000/](http://127.0.0.1:8000/).
7. Admin login is made with the Login button on the navigation bar.

### Usage

#### Create a Staff
1. Admin login is made with the Login button on the navigation bar.
2. Create Staff button is clicked and staff information is entered. After entering the information, click the Submit button.
![Create Staff](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/create_staff.JPG)

#### Examination of Existing Staff Records
1. Admin login is made with the Login button on the navigation bar.
2. Click the Show Staffs button on the navigation bar. In the window that opens, all employee records can be examined and deleted.
![Show Staffs](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/show_staffs.JPG)

#### Create a New Record
1. In order to create a customer record, the employee must log in to the system.
2. Click on the Create New Record button on the homepage. In the window that opens, information about the customer and the animal is entered and the Submit button is clicked.
3. The Customer part is used to fetch the information of an existing customer. It has autocomplete feature.
![Create New Record](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/create_record.JPG)

#### Examination of Existing Customer Records
1. In order to create a customer record, the employee must log in to the system.
2. Click on the Search Record button on the homepage. In the window that opens, an existing record can be searched by customer or animal name.
![Search a Record](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/search_record1.JPG)
3. The record whose details you want to see is selected. In the resulting table, the customer and the animal records of the customer are examined.
![Search the Record](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/search_record2.JPG)
4. If you want to update the record, click on the name of the record to be updated and make the desired changes in the window that opens.
![Update the Record](https://github.com/yildirimemr/animal_clinic/blob/main/usage_images/update.JPG)
5. To delete the existing record, click the Delete button next to the record. Only employees with Admin authority can perform delete.

## Authors
* **Emre Yıldırım** - [GitHub](https://github.com/yildirimemr)