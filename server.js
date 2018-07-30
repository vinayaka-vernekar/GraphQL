var Express = require('express')
var Express_graphql = require('express-graphql')
var { buildSchema  } =require('graphql')

var schema = buildSchema ('type Query {message:String,amount:String}');

var root = {
    message:() => 'Hello GraphQL',
    amount:()=> '120'
};

var app = Express();
app.use('/graphql',Express_graphql({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(4000,()=>console.log('Express GraphQL hosted'))