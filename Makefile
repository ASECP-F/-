create:
	yarn create next-app sentan --typescript --tailwind --eslint --app --src-dir --use-yarn 

run:
	docker compose run -u 1000:1000 --rm app 

up:
	docker compose up 
