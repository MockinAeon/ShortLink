import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp'
import '../imports/api/users.js';
import {Links} from '../imports/api/links.js';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    //set http status code, set http headers, set http body, end http request
    const _id = req.url.slice(1);
    const link = Links.findOne({_id});

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
    //res.write('<h1>This is my middleware</h1>');
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next();
    }
  });
});
