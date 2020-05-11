import { connect } from 'mongoose';
connect('mongodb://localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});