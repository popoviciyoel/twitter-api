const express = require('express');
const usersRouter = express.Router();
const db = require('../../../index');

const user_controller = require('../../../controllers/UserController')

usersRouter.route('/users')
    .get(user_controller.user_list)

usersRouter.route('/user')
    .post(user_controller.validate('create_user'), user_controller.create_user)

usersRouter.route('/tweets')
    .get(user_controller.tweet_list)

usersRouter.route('/user/:id')
    .post(user_controller.validate('create_tweet'), user_controller.create_tweet)


usersRouter.route('/users/:id')
    .get(user_controller.get_user)






module.exports = usersRouter;