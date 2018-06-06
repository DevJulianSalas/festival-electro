# Colors
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`


create_project:
	docker-compose -f docker-compose.yml run frontend npx create-react-app festival_electro