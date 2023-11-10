Download or clone repository on local pc and in project folder run: npm install on command prompt.

1. To start json-server run on command prompt:
npm run server
http://localhost:3005/messages

2. To run the project run on command prompt:
npm run dev
Open http://localhost:3000/ with your browser to see the result.

Sample project has 5 pages:
1. Featured Posts: loads all Featured Posts from json-server http://localhost:3000/
2. All Posts: loads all the Posts from json-server http://localhost:3000/posts
3. Details page: http://localhost:3000/posts/mastering-mongoDB
    If an individual post is clicked on All Posts/ Featured Posts it takes to Details page.
4. Contact page: http://localhost:3000/contact
    if all fields are filled and submitted, the form gets submitted and data is saved to json-server db.json file at the root level.
5. A static page http://localhost:3000/sample-blog
	Uses React Markdown