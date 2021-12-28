# PatitoLaboratory
correr con docker 
> docker build . 

correr las peticiones

docker run -p 5000:5000  -e MYSQLHOST='IP'  -e MYSQLUSER='patitoOliver' -e MYSQLPASS='Oliver12345' -v "$(pwd)/js/:/app/js/" -v "$(pwd)/src/:/app/src/" -it IMAGEN